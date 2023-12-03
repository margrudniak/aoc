import { readFile } from "../utils";

const main = async () => {
  const numbers: number[] = [];
  const data = (await readFile(__dirname + "/02-input.txt")).split("\n");
  const array: string[][] = [];
  data.forEach((el) => {
    array.push(el.split(":").join(",").split(";").join(",").split(","));
  });
  array.forEach((element, i) => {
    element.forEach((el) => {
      console.log(el);
      if (el.trim().includes("red")) {
        if (Number(el.slice(0, 3).trim()) > 12) {
          numbers.push(i + 1);
          console.log({
            color: "red",
            number: Number(el.slice(0, 3).trim()),
            i,
          });
        }
      }
      if (el.trim().includes("blue")) {
        if (Number(el.slice(0, 3).trim()) > 14) {
          numbers.push(i + 1);
          console.log({
            color: "blue",
            number: Number(el.slice(0, 3).trim()),
            i,
          });
        }
      }
      if (el.trim().includes("green")) {
        if (Number(el.slice(0, 3).trim()) > 13) {
          numbers.push(i + 1);
          console.log({
            color: "red",
            number: Number(el.slice(0, 3).trim()),
            i,
          });
        }
      }
    });
  });

  let sum = 0;

  [...new Set(numbers)].forEach((num) => {
    sum += num;
  });

  console.log(5050 - sum);

  console.log([...new Set(numbers)]);
};

main();
