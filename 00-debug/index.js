const end = 10;

for (let i = 0; i < end; i++) {
  // const element = array[i];
  console.log(i);
}

const expansiveCompute = (a, b) => {
  console.log(a);
  console.log(b);
  return a + b;
};

function sum(a, b) {
  // 在调试中如何得到 7 这个结果
  return expansiveCompute(a, b);
}

sum(3, 4);
// 如何进入到 `.filter` 函数中进行调试
// 如何进入到 `.filter` 函数中进行调试
const l = [1, 2, 3, 4, 5].map((x) => sum(x, 1)).filter((x) => x > 3);
const sub = (x, y) => x - y;

// 如何进入到 sub 函数中进行调试
const n = sub(sum(2, sum(3, 4)), 1);

Promise.resolve(3).then((o) => {
  // 如何 StepOver/StepInto 到当前行进行调试
  console.log(o);
});

console.log('hello, world');

const sleep = (seconds) => {
  // 从 await sleep(2000) 如何调试到这里边
  console.log('DEBUG TO HERE');
  return new Promise((resolve) => setTimeout(resolve, seconds));
};

(async () => {
  await sleep();
})();

const obj = null;
console.log(obj.a);
