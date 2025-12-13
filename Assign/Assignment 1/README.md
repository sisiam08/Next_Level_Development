keyof কোনো object এর সবগুলো key এর নামকে একটি union type হিসেবে বের করে।

type User = {
name: string;
age: number;
email: string;
};
type UserKeys = keyof User;
