import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const employees = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    department: "Engineering",
    joiningDate: "Nov 08, 2026",
    status: "ACTIVE",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    department: "Human Resources",
    joiningDate: "Nov 07, 2026",
    status: "ACTIVE",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
    department: "Finance",
    joiningDate: "Nov 05, 2026",
    status: "ACTIVE",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@example.com",
    department: "Marketing",
    joiningDate: "Nov 03, 2026",
    status: "INACTIVE",
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david@example.com",
    department: "Engineering",
    joiningDate: "Nov 01, 2026",
    status: "ACTIVE",
  },
];

export function RecentEmployees() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recently Added Employees</CardTitle>
          <CardDescription>
            The latest employees added to your organization.
          </CardDescription>
        </div>

        <Button variant="outline" size="sm">
          <Link href="/employees">View All</Link>
        </Button>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Joining Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {employees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{employee.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {employee.email}
                      </p>
                    </div>
                  </TableCell>

                  <TableCell>{employee.department}</TableCell>

                  <TableCell>{employee.joiningDate}</TableCell>

                  <TableCell>
                    <Badge
                      variant={
                        employee.status === "ACTIVE"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {employee.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}