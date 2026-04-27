"use server";

import { redirect } from "next/navigation";
import {
  SignupFormSchema,
  SigninFormSchema,
  ForgotPasswordSchema,
  type FormState,
} from "@/lib/definitions";
import { createSession, deleteSession } from "@/lib/session";
import { createUser, findUserByEmail, verifyPassword } from "@/lib/users";

export async function signup(
  _state: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;

  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    return {
      message: "An account with this email already exists.",
    };
  }

  const user = await createUser(name, email, password);
  if (!user) {
    return {
      message: "An error occurred while creating your account.",
    };
  }

  await createSession({
    userId: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });

  redirect("/profile");
}

export async function signin(
  _state: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = SigninFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  const user = await findUserByEmail(email);
  if (!user) {
    return {
      message: "Invalid email or password.",
    };
  }

  const isValidPassword = await verifyPassword(password, user.password);
  if (!isValidPassword) {
    return {
      message: "Invalid email or password.",
    };
  }

  await createSession({
    userId: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });

  redirect("/profile");
}

export async function forgotPassword(
  _state: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = ForgotPasswordSchema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  return {
    success: true,
    message:
      "If an account with that email exists, we've sent a password reset link. Please check your inbox.",
  };
}

export async function logout() {
  await deleteSession();
  redirect("/signin");
}
