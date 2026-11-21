
"use client";

import { useState } from "react";
import { Pencil, UserRound, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MyProfile } from "@/constants/admin-type";
import { DetailItem } from "./detail-item";

interface Props {
    profile : MyProfile
}

export default function PersonalInformation({profile}: Props) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section className="rounded-xl border bg-card p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-primary/10 p-3">
            <UserRound className="h-5 w-5 text-primary" />
          </div>

          <div>
            <h2 className="text-lg font-semibold">Personal Information</h2>
            <p className="text-sm text-muted-foreground">
              Your personal details and contact information.
            </p>
          </div>
        </div>

        {!isEditing && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEditing(true)}
          >
            <Pencil className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        )}
      </div>

      {!isEditing ? (
        <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          <DetailItem label="First Name" value={profile.first_name} />
          <DetailItem label="Last Name" value={profile.last_name} />
          <DetailItem label="Email Address" value={profile.email} />
          <DetailItem label="Phone Number" value={profile.phone_number} />
          <DetailItem label="Address" value={profile.address} />
        </div>
      ) : (
        <div className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>First Name</Label>
              <Input defaultValue={profile.first_name} />
            </div>

            <div className="space-y-2">
              <Label>Last Name</Label>
              <Input defaultValue={profile.last_name} />
            </div>

            <div className="space-y-2">
              <Label>Email Address</Label>
              <Input type="email" defaultValue={profile.email} />
            </div>

            <div className="space-y-2">
              <Label>Phone Number</Label>
              <Input defaultValue={profile.phone_number} />
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label>Address</Label>
              <Input defaultValue={profile.address} />
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => setIsEditing(false)}
            >
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
            <Button onClick={() => setIsEditing(false)}>
              Save Changes
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
