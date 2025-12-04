// nullable
const getUser = (input: string | null) => {
  if (input) console.log(input);
  else console.log("All User");
};

getUser(null);

// Unknown
const discountPrice = (price: unknown) => {
  if (typeof price === "number") {
    price = price * 0.1;
    console.log(price);
  } else if (typeof price === "string") {
    [price] = price.split(" ");
    console.log(Number(price) * 0.1);
  } else console.log("Wrong Input!");
};

discountPrice(100);
discountPrice("100 TK");
discountPrice(null);

// Never
const throwError = (msg: string): never => {
  throw new Error(msg);
};

throwError("error.....");
