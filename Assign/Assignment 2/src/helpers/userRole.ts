const UserRoles = {
  admin: "admin",
  customer: "customer",
} as const;

export const isValidRole = (role: keyof typeof UserRoles) => {
  if (role === UserRoles.admin || role === UserRoles.customer) return true;
  else return false;
};
