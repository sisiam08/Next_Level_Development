// Spread Operator

// const friends: string[] = ["Osman", "Ali", "Omar"];

// const schoolFriends: string[] = ["abc", "xyz"];

// const collegeFriends: string[] = ["axz"];

// friends.push(...schoolFriends, ...collegeFriends); //Spread Operator

// console.log(friends);

// const user = { name: "Osman", phone: "0123345456" };

// const otherInfo = { hobby: "Gerdening", favouriteColor: "Black" };

// const userInfo = { ...user, ...otherInfo };

// console.log(userInfo);

// Rest Operator

const sendInvitation = (...friends: string[]) => {
  friends.forEach((friend: string) =>
    console.log(`Send invitation to ${friend}`)
  );
};

sendInvitation("Osman", "Ali", "Omar");
