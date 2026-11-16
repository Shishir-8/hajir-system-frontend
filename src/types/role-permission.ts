
export enum UserRole {
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
  EMPLOYEE = "EMPLOYEE",
}

export enum EPermissions {
  // Employees
  CAN_READ_EMPLOYEE = "employees.view_employee",
  CAN_CREATE_EMPLOYEE = "employees.add_employee",
  CAN_UPDATE_EMPLOYEE = "employees.change_employee",
  CAN_DELETE_EMPLOYEE = "employees.delete_employee",

  CAN_READ_DEPARTMENT = "departments.view_department",
  CAN_CREATE_DEPARTMENT = "departments.add_department",
  CAN_UPDATE_DEPARTMENT = "departments.change_department",
  CAN_DELETE_DEPARTMENT = "departments.delete_department",

  // Attendance
  CAN_READ_ATTENDANCE = "view_attendance",
  CAN_CREATE_ATTENDANCE = "add_attendance",
  CAN_UPDATE_ATTENDANCE = "change_attendance",
  CAN_DELETE_ATTENDANCE = "delete_attendance",

  // Leave Management
  CAN_READ_LEAVE = "view_leave",
  CAN_CREATE_LEAVE = "add_leave",
  CAN_UPDATE_LEAVE = "change_leave",
  CAN_DELETE_LEAVE = "delete_leave",

  // Settings
  CAN_READ_SETTINGS = "view_settings",
  CAN_UPDATE_SETTINGS = "change_settings",
}

 
        
        
       