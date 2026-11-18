
"use client";

import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  CalendarDays,
  User,
  Building2,
  Pencil,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Employee } from "@/types/employee";
import { useRouter } from "next/navigation";

const DetailItem = ({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) => (
  <div className="flex items-start gap-3">
    <div className="rounded-md bg-muted p-2">
      <Icon className="size-4 text-muted-foreground" />
    </div>
    <div className="space-y-1">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-sm font-medium">{value || "-"}</p>
    </div>
  </div>
);

interface Props {
    employee: Employee
}

const EmployeeDetails = ({employee}: Props) => {
  const router = useRouter()
  const handleEdit = () => {
    router.push(`/dashboard/employees/edit-employee/${employee.id}`)

  }
  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card>
        <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="size-16">
              <AvatarFallback className="text-xl">
                {employee.first_name.slice(0,1)}{employee.last_name.slice(0,1)}
              </AvatarFallback>
            </Avatar>

            <div className="space-y-1">
              <h2 className="text-xl font-semibold">
                {employee.first_name} {employee.last_name}
              </h2>

              <p className="text-sm text-muted-foreground">
                {employee.designation}
              </p>

              <Badge variant="default">
                {employee.employment_status}
              </Badge>
            </div>
          </div>

          <Button onClick={handleEdit}>
            <Pencil className="mr-2 size-4" />
            Edit Employee
          </Button>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Personal Information</CardTitle>
        </CardHeader>

        <CardContent className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <DetailItem
            icon={User}
            label="First Name"
            value={employee.first_name}
          />
          <DetailItem
            icon={User}
            label="Role"
            value={employee.role}
          />
          <DetailItem
            icon={Mail}
            label="Email Address"
            value={employee.email}
          />
        <DetailItem
            icon={User}
            label="Last Name"
            value={employee.last_name}
          />
          <DetailItem
            icon={Phone}
            label="Phone Number"
            value={employee.phone_number}
          />
          <DetailItem
            icon={MapPin}
            label="Address"
            value={employee.address}
          />
        </CardContent>
      </Card>

      {/* Employment Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Employment Information</CardTitle>
        </CardHeader>

        <CardContent className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          <DetailItem
            icon={Building2}
            label="Department"
            value={employee.department}
          />
          <DetailItem
            icon={Briefcase}
            label="Designation"
            value={employee.designation}
          />
          <DetailItem
            icon={CalendarDays}
            label="Joining Date"
            value={employee.joining_date}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default EmployeeDetails;
