"use client";

import { useActionState } from "react";
import { signup } from "@/app/actions/auth";

export default function SignupForm() {
  const [state, action, pending] = useActionState(signup, undefined);

  return (
    <form action={action} className="space-y-5">
      {state?.message && (
        <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700">
          {state.message}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          className="w-full rounded-xl border border-gray-300 dark:border-slate-600 dark:bg-dark-surface dark:text-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
        />
        {state?.errors?.name && (
          <p className="mt-1 text-sm text-red-600">{state.errors.name[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          className="w-full rounded-xl border border-gray-300 dark:border-slate-600 dark:bg-dark-surface dark:text-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
        />
        {state?.errors?.email && (
          <p className="mt-1 text-sm text-red-600">{state.errors.email[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Min 8 chars, 1 letter, 1 number"
          className="w-full rounded-xl border border-gray-300 dark:border-slate-600 dark:bg-dark-surface dark:text-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
        />
        {state?.errors?.password && (
          <div className="mt-1 text-sm text-red-600">
            {state.errors.password.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        )}
      </div>

      <button
        disabled={pending}
        type="submit"
        className="w-full rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? "Creating Account..." : "Sign Up"}
      </button>
    </form>
  );
}
