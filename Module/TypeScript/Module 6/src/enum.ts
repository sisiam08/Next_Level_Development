// type UserRoles = "Admin" | "Editor" | "Viewer";

// const canEdit = (role: UserRoles) => {
//   if (role === "Admin" || role === "Editor") return true;
//   else return false;
// };

enum UserRoles {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

const canEdit = (role: UserRoles) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) return true;
  else return false;
};

console.log(canEdit(UserRoles.Admin));
console.log(canEdit(UserRoles.Viewer));

// for run this code use - "node --experimental-transform-types enum.ts"
