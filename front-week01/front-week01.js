// let x = 10;

// let result = x % 2 ? "홀수" : "짝수";

// console.log(result);

// id = prompt("아이디를 입력해주세요.");

// password = prompt("비밀번호를 입력해 주세요.");

// if (id === "likelion" && password === "1234") {
//   alert("인증에 성공");
// } else {
//   alert("실패");
// }

// for (var i = 1; i <= 6; i++) {
//   for (var j = 1; j <= 6; j++) {
//     if (i + j === 6) console.log(`[${i}, ${j}]`);
//   }
// }

const multiplyAll = (...args) => {
  return args.reduce((a, b) => a * b, 1);
};

console.log(multiplyAll(3, 4, 5));
