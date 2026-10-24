import React from "react";
import ForgotPasswordForm from "./components/forgot-password";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password | Hajir System",
  description: "Reset your Hajir System account password.",
};

export default function ForgotPasswordPage() {
  return (
    <main className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Forgot password?</h1>

        <p className="text-sm text-muted-foreground">
          Enter your email address and we'll help you reset your password.
        </p>
      </div>
      <ForgotPasswordForm />
    </main>
  );
}
