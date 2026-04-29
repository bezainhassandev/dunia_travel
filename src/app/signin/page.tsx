import type { Metadata } from "next";
import SigninForm from "./signin-form";

export const metadata: Metadata = {
  title: "Sign In | Wanderlust Travel",
  description: "Sign in to your Wanderlust Travel account.",
};

export default function SigninPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-surface dark:bg-dark-surface py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <span className="text-4xl mb-4 block">✈</span>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome Back</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Sign in to continue your travel journey
          </p>
        </div>

        <div className="bg-white dark:bg-dark-card rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-dark-border">
          <SigninForm />
        </div>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-primary dark:text-accent font-semibold hover:text-primary-dark dark:hover:text-accent-light transition-colors">
            Sign Up
          </a>
        </p>

        <div className="mt-8 bg-white dark:bg-dark-card rounded-2xl shadow-md p-6 border border-gray-100 dark:border-dark-border">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Demo Accounts</h3>
          <div className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
            <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-dark-surface rounded-lg">
              <div>
                <span className="font-medium text-gray-900 dark:text-white">Admin:</span> admin@wanderlust.travel
              </div>
              <span className="text-gray-500 dark:text-gray-400">Admin123!</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-dark-surface rounded-lg">
              <div>
                <span className="font-medium text-gray-900 dark:text-white">User:</span> john@example.com
              </div>
              <span className="text-gray-500 dark:text-gray-400">User1234!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
