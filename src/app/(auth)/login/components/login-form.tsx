"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  type LoginFormValues,
  loginSchema,
} from "@/schema/auth-schema";
import { Metadata } from "next";
import { Spinner } from "@/components/ui/spinner";
import toast from "react-hot-toast";
import { loginUser } from "@/services/auth-service";
import { useRouter } from "next/navigation";

export const metadata: Metadata = {
  title: 'Login | Hajir System',
  description: 'Log in to your Hajir System workforce account.',
};

export default function LoginForm() {
  const router = useRouter()



  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues)=> {
    try {
      const res = await loginUser(values)
      if (res.status == 200) {

        toast.success("Login successfull!")
        
      }
      router.replace('/admin/dashboard')
      
    } catch (error: any) {
      console.log(error)
      toast.error("Login failed. Please try again.")
    }
  }

  return (
    <div className="w-full space-y-6">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5"
      >
        {/* Email Field */}
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>
                Email address
              </FieldLabel>

              <Input
                {...field}
                id={field.name}
                type="email"
                placeholder="you@gmail.com"
                autoComplete="email"
                aria-invalid={fieldState.invalid}
              />

              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        {/* Password Field */}
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor={field.name}>
                  Password
                </FieldLabel>

                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <Input
                {...field}
                id={field.name}
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
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
          className="w-full cursor-pointer"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting
            ? <Spinner />
            : "Sign In"}
        </Button>
      </form>
    </div>
  );
}