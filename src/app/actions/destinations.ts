"use server";

import { revalidatePath } from "next/cache";
import { getSession } from "@/lib/session";
import {
  addDestination,
  updateDestination,
  deleteDestination,
} from "@/lib/destinations";

export async function createDestinationAction(formData: FormData) {
  const session = await getSession();
  if (!session || session.role !== "admin") {
    return { error: "Unauthorized" };
  }

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const image = formData.get("image") as string;
  const price = formData.get("price") as string;
  const duration = formData.get("duration") as string;
  const category = formData.get("category") as string;

  if (!name || !description || !image || !price || !duration || !category) {
    return { error: "All fields are required" };
  }

  addDestination({ name, description, image, price, duration, category });
  revalidatePath("/admin");
  revalidatePath("/destinations");
  return { success: true };
}

export async function updateDestinationAction(formData: FormData) {
  const session = await getSession();
  if (!session || session.role !== "admin") {
    return { error: "Unauthorized" };
  }

  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const image = formData.get("image") as string;
  const price = formData.get("price") as string;
  const duration = formData.get("duration") as string;
  const category = formData.get("category") as string;

  if (!id || !name || !description || !image || !price || !duration || !category) {
    return { error: "All fields are required" };
  }

  const updated = updateDestination(id, { name, description, image, price, duration, category });
  if (!updated) {
    return { error: "Destination not found" };
  }

  revalidatePath("/admin");
  revalidatePath("/destinations");
  return { success: true };
}

export async function deleteDestinationAction(formData: FormData) {
  const session = await getSession();
  if (!session || session.role !== "admin") {
    return { error: "Unauthorized" };
  }

  const id = formData.get("id") as string;
  if (!id) {
    return { error: "Destination ID is required" };
  }

  const deleted = deleteDestination(id);
  if (!deleted) {
    return { error: "Destination not found" };
  }

  revalidatePath("/admin");
  revalidatePath("/destinations");
  return { success: true };
}
