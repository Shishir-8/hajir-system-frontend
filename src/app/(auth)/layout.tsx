"use client";

import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid min-h-screen w-full bg-base-100 md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr]">
      {/* Left Side */}
      <section
        style={{
          backgroundImage: "url('/auth-layout.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative hidden min-h-screen overflow-hidden bg-gray-950 md:flex"
      >
        {/* Background Overlays */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-950/95 via-indigo-950/75 to-purple-950/65" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-transparent to-slate-950/35" />

        {/* Background Effects */}
        <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-indigo-500/20 blur-[110px]" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-purple-500/20 blur-[110px]" />

        <div className="relative z-10 flex min-h-screen w-full flex-col justify-between p-10 xl:p-14">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-xl">
              <span className="text-2xl font-bold text-indigo-300">H</span>
            </div>

            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white">
                Hajir <span className="text-indigo-300">System</span>
              </h1>

              <p className="mt-1 text-xs tracking-wide text-white/60">
                Enterprise Employee Management
              </p>
            </div>
          </div>

          {/* Center Content */}
          <div className="my-16 max-w-xl">
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/8 px-4 py-2.5 shadow-lg backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              <span className="text-xs font-medium tracking-wide text-white/85">
                Streamlined Workforce Management
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.12] tracking-tight text-white xl:text-6xl">
              Manage your team,
              <br />
              simplify your
              <br />
              <span className="bg-linear-to-r from-indigo-200 via-white to-purple-200 bg-clip-text text-transparent">
                workflow.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-7 text-white/65 xl:text-base">
              Manage employees, organize departments, and control access
              from one simple, secure platform.
            </p>

            {/* Features */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-lg border border-white/10 bg-white/6 px-3 py-2 text-xs text-white/75 backdrop-blur-md">
                Secure Access
              </span>

              <span className="rounded-lg border border-white/10 bg-white/6 px-3 py-2 text-xs text-white/75 backdrop-blur-md">
                Employee Management
              </span>

              <span className="rounded-lg border border-white/10 bg-white/6 px-3 py-2 text-xs text-white/75 backdrop-blur-md">
                Role-Based Control
              </span>
            </div>
          </div>

          {/* Footer */}
          <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-6">
            <p className="text-xs text-white/45">
              © 2026 Hajir System. All rights reserved.
            </p>

            <p className="text-xs font-medium tracking-wide text-white/55">
              Efficient. Secure. Professional.
            </p>
          </footer>
        </div>
      </section>

      {/* Right Side */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-base-100 px-5 py-10 sm:px-8 lg:px-12">
        {/* Background Effects */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-indigo-500/[0.07] blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-purple-500/[0.07] blur-3xl" />

        {/* Login / Register Content */}
        <div className="relative z-10 w-full max-w-lg">
          {children}
        </div>
      </section>
    </main>
  );
}