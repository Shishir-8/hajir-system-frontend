
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const attendanceData = {
  total: 120,
  present: 105,
  absent: 10,
  late: 5,
};

const AttendanceOverview = () => {
  const percentage = Math.round(
    (attendanceData.present / attendanceData.total) * 100
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Attendance Overview</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Attendance Rate
            </span>
            <span className="text-lg font-semibold">{percentage}%</span>
          </div>

          <Progress value={percentage} className="h-2" />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Present</p>
            <p className="text-2xl font-semibold text-green-600">
              {attendanceData.present}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Absent</p>
            <p className="text-2xl font-semibold text-red-500">
              {attendanceData.absent}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Late</p>
            <p className="text-2xl font-semibold text-amber-500">
              {attendanceData.late}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AttendanceOverview;
