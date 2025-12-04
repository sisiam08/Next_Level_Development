const postsArray = [
  { id: "p-101", title: "Intro to SQL", author: "Alex" },
  { id: "p-102", title: "Data Structures in JS", author: "Beth" },
  { id: "p-103", title: "Understanding Reduce", author: "Chris" },
  { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];

const lookUpTable = postsArray.reduce((table, post) => {
  table[post.id] = post;

  return table;
}, {});

// console.log(lookUpTable);

// const post = postsArray.find((pst)=> pst.id == "p-102");

// const post = lookUpTable["p-103"];

// console.log(post);

for (let obj in postsArray) {
  console.log(postsArray[obj]);
}


for (let post in lookUpTable) {
  console.log(lookUpTable[post]);
}
