const frontBabyLion = [
  { id: 1, name: "박세은", age: 23, major: "IT공학전공" },
  { id: 2, name: "박소연", age: 23, major: "컴퓨터과학전공" },
  { id: 3, name: "이승채", age: 22, major: "인공지능공학부" },
  { id: 4, name: "이연서", age: 23, major: "컴퓨터과학전공" },
  { id: 5, name: "이채빈", age: 22, major: "영어영문학부" },
  { id: 6, name: "정교은", age: 22, major: "컴퓨터과학전공" },
];

const park = frontBabyLion.filter((baby) => {
  return baby.name.includes("박");
});
console.log(park);

// const frontYeongjin = [
//   { id: 1, name: "강주은", age: 26, major: "한국어문학부" },
//   { id: 2, name: "성윤정", age: 27, major: "IT공학전공" },
//   { id: 3, name: "유동은", age: 23, major: "IT공학전공" },
//   { id: 4, name: "이현정", age: 23, major: "인공지능공학부" },
// ];

// console.log("이름만 출력");
// frontYeongjin.forEach((person) => {
//   console.log(person.name);
// });

// const frontYeongjinArray = frontYeongjin.map((person) => {
//   return {
//     name: person.name,
//     major: person.major,
//   };
// });
// console.log("나이 제거 배열 출력: ", frontYeongjinArray);

// const itEngineering = frontYeongjin.filter((front) => {
//   return front.major === "IT공학전공";
// });
// console.log("IT공학전공인 사람 출력: ", itEngineering);

// const twentyThree = frontYeongjin.filter((front) => {
//   return front.age === 23;
// });
// console.log("나이 23인 사람 출력: ", twentyThree);
