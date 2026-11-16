"use client";

import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

import {
  changePasswordSchema,
  type ChangePasswordFormValues,
} from "@/schema/auth-schema";
import { useRouter, useSearchParams } from "next/navigation";
import { resetPassword } from "@/services/auth-service";
import toast from "react-hot-toast";

export default function ResetPasswordForm() {
  const searchParams = useSearchParams()
  const uid = searchParams.get('uid')
  const token = searchParams.get('token')


  const form = useForm<ChangePasswordFormValues>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      new_password: "",
      confirm_password: "",
    },
  });

  async function onSubmit(values: ChangePasswordFormValues) {
    try {
      const res = await resetPassword(uid, token, values.new_password, values.confirm_password)
      if (res.status == 200) {
        toast.success('Password reset successfully!')
        form.reset()
      }
      
    } catch (error) {
      toast.error('Failed to reset password. Please try again.')
    }
  }

  return (
    <div className="w-full space-y-6">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5"
      >

        {/* New Password */}
        <Controller
          name="new_password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>
                New password
              </FieldLabel>

              <Input
                {...field}
                id={field.name}
                type="password"
                placeholder="Enter your new password"
                autoComplete="new-password"
                aria-invalid={fieldState.invalid}
              />

              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        {/* Confirm Password */}
        <Controller
          name="confirm_password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>
                Confirm new password
              </FieldLabel>

              <Input
                {...field}
                id={field.name}
                type="password"
                placeholder="Confirm your new password"
                autoComplete="new-password"
                aria-invalid={fieldState.invalid}
              />

              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <>
              <Spinner />
              Resetting password...
            </>
          ) : (
            "Reset Password"
          )}
        </Button>
      </form>

      {/* Back to Login */}
      <p className="text-center text-sm text-muted-foreground">
        Remember your password?{" "}
        <Link
          href="/"
          className="font-medium text-primary hover:underline"
        >
          Back to login
        </Link>
      </p>
    </div>
  );
}