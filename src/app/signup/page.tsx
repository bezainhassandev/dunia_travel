import type { Metadata } from "next";
import SignupForm from "./signup-form";

export const metadata: Metadata = {
  title: "Sign Up | Wanderlust Travel",
  description: "Create your Wanderlust Travel account and start planning your next adventure.",
};

export default function SignupPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-surface dark:bg-dark-surface py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <span className="text-4xl mb-4 block">✈</span>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Create Account</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Join Wanderlust and start exploring the world
          </p>
        </div>

        <div className="bg-white dark:bg-dark-card rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-dark-border">
          <SignupForm />
        </div>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
          Already have an account?{" "}
          <a href="/signin" className="text-primary dark:text-accent font-semibold hover:text-primary-dark dark:hover:text-accent-light transition-colors">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
