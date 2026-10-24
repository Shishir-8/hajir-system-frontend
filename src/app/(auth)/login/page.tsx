import React from "react";
import LoginForm from "./components/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Hajir System",
  description: "Sign in to your Hajir System account.",
};

export default function LoginPage() {
  return (
    <main className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back 👋</h1>

        <p className="text-sm text-muted-foreground">
          Sign in to your Hajir System account.
        </p>
      </div>
      <LoginForm />
    </main>
  );
}
