'use client'
import { useSearchParams } from "next/navigation";
import ResetPasswordForm from "./components/reset-password-form";
import { Suspense } from "react";

export default function ResetPasswordPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          Reset password
        </h1>

        <p className="text-sm text-muted-foreground">
          Enter your current password and choose a new one.
        </p>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <ResetPasswordForm />
      </Suspense>
    </div>
  );
}