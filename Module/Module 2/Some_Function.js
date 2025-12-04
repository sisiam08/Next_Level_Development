const numbers = [10, 5, 8, 1, 7, 3];

const hasEvenNumber = numbers.some((num) => num % 2 == 0);

// console.log(hasEvenNumber);

const allPositive = numbers.every((num) => num > 0);

// console.log(allPositive);

const currentUsersRole = ["editor", "admin", "user"];

const featureAccessRole = ["admin", "manager"];

const canAccess = currentUsersRole.some((role) =>
  featureAccessRole.includes(role)
);

console.log("Can Access: ", canAccess);