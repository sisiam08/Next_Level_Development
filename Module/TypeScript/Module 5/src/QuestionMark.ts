// ? : ternary operator : decision making
// ?? : nullish coalescing operator : null / undefined use korle nullish operartor kaj korbe
// ?. : optional chaining

// ternary
const biyerBosyosh = (age: number) => {
  const result = age >= 21 ? "Boyosh hoiche" : "Baccha!!";

  //   console.log(result);
};

biyerBosyosh(12);

// nullish coalescing
const userTheme = null;

const selectedTheme = userTheme ?? "Light Theme";

// console.log(selectedTheme);

const isAuthenticated = "";

const resultWithTernary = isAuthenticated ? isAuthenticated : "Authentic na!";

const resultWithNullish = isAuthenticated ?? "Authentic na!";

console.log({ resultWithTernary }, { resultWithNullish });

// optional chaining

const user: {
  address: {
    city: string;
    town: string;
    postalCode?: number;
  };
} = {
  address: {
    city: "Dhaka",
    town: "Bashundhara R/A",
  },
};

const userPostalCode = user?.address?.postalCode; // Optional Chaining
console.log(userPostalCode);
