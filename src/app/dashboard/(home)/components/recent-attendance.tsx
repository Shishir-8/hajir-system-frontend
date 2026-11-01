
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { recentAttendance } from "@/constants/dashboard-stats";


const RecentAttendance = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Attendance</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b text-muted-foreground">
                <th className="py-3 pr-4 font-medium">Employee</th>
                <th className="py-3 px-4 font-medium">Department</th>
                <th className="py-3 px-4 font-medium">Check In</th>
                <th className="py-3 pl-4 font-medium">Status</th>
              </tr>
            </thead>

            <tbody>
              {recentAttendance.map((employee) => (
                <tr key={employee.id} className="border-b last:border-0">
                  <td className="py-3 pr-4 font-medium">
                    {employee.name}
                  </td>

                  <td className="py-3 px-4 text-muted-foreground">
                    {employee.department}
                  </td>

                  <td className="py-3 px-4">
                    {employee.checkIn}
                  </td>

                  <td className="py-3 pl-4">
                    <Badge
                      variant="outline"
                      className={
                        employee.status === "Present"
                          ? "border-green-500 text-green-600"
                          : employee.status === "Late"
                          ? "border-amber-500 text-amber-600"
                          : "border-red-500 text-red-600"
                      }
                    >
                      {employee.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentAttendance;
