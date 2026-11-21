
"use client";

import { LockKeyhole, Eye, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ChangePassword() {
  return (
    <div className="rounded-xl border bg-card p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-primary/10 p-3">
          <ShieldCheck className="h-5 w-5 text-primary" />
        </div>

        <div>
          <h2 className="text-lg font-semibold">Security</h2>
          <p className="text-sm text-muted-foreground">
            Manage your password and keep your account secure.
          </p>
        </div>
      </div>

      {/* Password Form */}
      <div className="max-w-xl space-y-5">
        <div>
          <h3 className="font-medium">Change Password</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Choose a strong password that you don't use elsewhere.
          </p>
        </div>

        <div className="space-y-2">
          <Label>Current Password</Label>
          <div className="relative">
            <Input
              type="password"
              placeholder="Enter current password"
              className="pr-10"
            />
            <Eye className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        <div className="space-y-2">
          <Label>New Password</Label>
          <div className="relative">
            <Input
              type="password"
              placeholder="Enter new password"
              className="pr-10"
            />
            <Eye className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Confirm New Password</Label>
          <div className="relative">
            <Input
              type="password"
              placeholder="Confirm new password"
              className="pr-10"
            />
            <Eye className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        {/* Password Hint */}
        <div className="rounded-lg bg-muted/50 p-4">
          <p className="text-sm font-medium mb-1">Password requirements</p>
          <p className="text-sm text-muted-foreground">
            Use at least 8 characters, including a combination of letters,
            numbers, and symbols.
          </p>
        </div>

        <div className="flex justify-end">
          <Button>Update Password</Button>
        </div>
      </div>
    </div>
  );
}
