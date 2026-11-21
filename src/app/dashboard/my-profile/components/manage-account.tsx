
"use client";

import { useState } from "react";
import { LockKeyhole, Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ManageAccount() {
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  return (
    <section className="space-y-6 rounded-xl border bg-card p-6">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-primary/10 p-3">
          <LockKeyhole className="h-5 w-5 text-primary" />
        </div>

        <div>
          <h2 className="text-lg font-semibold">Password</h2>
          <p className="text-sm text-muted-foreground">
            Manage your account password and security.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="font-medium">Change Password</h3>
          <p className="text-sm text-muted-foreground">
            Update your account password.
          </p>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowPasswordForm(!showPasswordForm)}
        >
          {showPasswordForm ? "Cancel" : "Change Password"}
        </Button>
      </div>

      {showPasswordForm && (
        <div className="space-y-4 rounded-lg border p-4">
          <div className="space-y-2">
            <Label>Current Password</Label>
            <Input
              type="password"
              placeholder="Enter current password"
            />
          </div>

          <div className="space-y-2">
            <Label>New Password</Label>
            <Input
              type="password"
              placeholder="Enter new password"
            />
          </div>

          <div className="space-y-2">
            <Label>Confirm New Password</Label>
            <Input
              type="password"
              placeholder="Confirm new password"
            />
          </div>

          <div className="flex justify-end">
            <Button>Update Password</Button>
          </div>
        </div>
      )}
    </section>
  );
}
