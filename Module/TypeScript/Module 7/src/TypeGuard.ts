//  type guard

const add = (num1: number | string, num2: number | string) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else return num1.toString() + num2.toString();
};

add(2, 3);
add("2", "3");
add(2, "3");
add("2", 3);

// in guard

type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "admin";
};

const getUserInfo = (user: NormalUser | AdminUser) => {
  if("role" in user){
    console.log(`${user.name}, you have ${user.role} access.`);
  }
  else console.log(`Welcome ${user.name}`);
};


getUserInfo({name: "Siam"});