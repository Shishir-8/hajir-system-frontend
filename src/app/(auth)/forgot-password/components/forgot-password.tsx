"use client";

import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  forgotPasswordSchema,
  type ForgotPasswordFormValues,
} from "@/schema/auth-schema";
import { Spinner } from "@/components/ui/spinner";
import { forgotPassword } from "@/services/auth-service";
import toast from "react-hot-toast";

export default function ForgotPasswordForm() {
  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: ForgotPasswordFormValues) => {
    try {
      const response = await forgotPassword(values.email);
      if (response.status == 200) {
        toast.success("Password rest link is sent to your email.");
        form.reset()
      }
    } catch (error) {
      toast.error("Unable to send password reset link. Please try again.");
    }
  };

  return (
    <div className="w-full space-y-6">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Email address</FieldLabel>

              <Input
                {...field}
                id={field.name}
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                aria-invalid={fieldState.invalid}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Button
          type="submit"
          className="w-full cursor-pointer"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <>
              <Spinner />
              Sending...
            </>
          ) : (
            "Send Reset Link"
          )}
        </Button>
      </form>

      {/* Back to Login */}
      <p className="text-center text-sm text-muted-foreground">
        Remember your password?{" "}
        <Link href="/" className="font-medium text-primary hover:underline">
          Back to login
        </Link>
      </p>
    </div>
  );
}
