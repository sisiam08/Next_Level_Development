type UserRole = "admin" | "user" | "guest";

const getDashboard = (role: UserRole) => {
  if (role === "admin") return "Admin Dashboard";
  else if (role === "user") return "User Dashboard";
  else return "Guest Dashboard";
};

// console.log(getDashboard("guest"));

type Employee = {
  id: string;
  name: string;
  phone: string;
};

type Manager = {
  destination: String;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

const Osman: EmployeeManager = {
  id: "123",
  name: "Osman",
  phone: "012333333",
  destination: "manager",
  teamSize: 12,
};
