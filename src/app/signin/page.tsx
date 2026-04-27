import type { Metadata } from "next";
import SigninForm from "./signin-form";

export const metadata: Metadata = {
  title: "Sign In | Wanderlust Travel",
  description: "Sign in to your Wanderlust Travel account.",
};

export default function SigninPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-surface py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <span className="text-4xl mb-4 block">✈</span>
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="mt-2 text-gray-600">
            Sign in to continue your travel journey
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <SigninForm />
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-primary font-semibold hover:text-primary-dark transition-colors">
            Sign Up
          </a>
        </p>

        <div className="mt-8 bg-white rounded-2xl shadow-md p-6 border border-gray-100">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Demo Accounts</h3>
          <div className="space-y-2 text-xs text-gray-600">
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
              <div>
                <span className="font-medium text-gray-900">Admin:</span> admin@wanderlust.travel
              </div>
              <span className="text-gray-500">Admin123!</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
              <div>
                <span className="font-medium text-gray-900">User:</span> john@example.com
              </div>
              <span className="text-gray-500">User1234!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
