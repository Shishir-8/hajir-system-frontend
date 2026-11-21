
import { BriefcaseBusiness } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MyProfile } from "@/constants/admin-type";
import { DetailItem } from "./detail-item";


interface Props {
    employment: MyProfile
}

export default function EmploymentInformation({employment}: Props) {
  return (
    <section className="rounded-xl border bg-card p-6 space-y-6">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-primary/10 p-3">
          <BriefcaseBusiness className="h-5 w-5 text-primary" />
        </div>

        <div>
          <h2 className="text-lg font-semibold">
            Employment Information
          </h2>
          <p className="text-sm text-muted-foreground">
            Your current employment details.
          </p>
        </div>
      </div>

      <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
        <DetailItem label="Department" value={employment.department} />
        <DetailItem label="Designation" value={employment.designation} />
        <DetailItem label="Joining Date" value={employment.joining_date} />

        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">
            Employment Status
          </p>
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
            {employment.employment_status}
          </Badge>
        </div>
      </div>

      <p className="border-t pt-4 text-xs text-muted-foreground">
        Employment information is managed by your HR administrator.
      </p>
    </section>
  );
}
