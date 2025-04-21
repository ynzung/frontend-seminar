let count = 1;

const handleInterval = setInterval(() => {
  console.log(count);
  count++;

  if (count > 5) {
    clearInterval(handleInterval);
  }
}, 1000);

// console.log("안녕하세요");

// setTimeout(() => {
//   console.log("성윤정");
// }, 5000);
