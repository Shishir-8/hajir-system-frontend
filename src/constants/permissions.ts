
export const PERMISSIONS = {
  DASHBOARD_VIEW: "dashboard.view",

  // Employees
  EMPLOYEE_VIEW: "employee.view",
  EMPLOYEE_CREATE: "employee.create",
  EMPLOYEE_UPDATE: "employee.update",
  EMPLOYEE_DELETE: "employee.delete",

  // Departments
  DEPARTMENT_VIEW: "department.view",
  DEPARTMENT_CREATE: "department.create",
  DEPARTMENT_UPDATE: "department.update",
  DEPARTMENT_DELETE: "department.delete",

  // Attendance
  ATTENDANCE_VIEW: "attendance.view",
  ATTENDANCE_CREATE: "attendance.create",
  ATTENDANCE_UPDATE: "attendance.update",
  ATTENDANCE_DELETE: "attendance.delete",

  // Leave
  LEAVE_VIEW: "leave.view",
  LEAVE_CREATE: "leave.create",
  LEAVE_APPROVE: "leave.approve",

  // Payroll
  PAYROLL_VIEW: "payroll.view",
  PAYROLL_CREATE: "payroll.create",
  PAYROLL_UPDATE: "payroll.update",

  // Profile
  PROFILE_VIEW: "profile.view",
  PROFILE_UPDATE: "profile.update",
} as const;
