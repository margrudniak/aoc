import { readFile, sumArray } from "../utils";

const main = async () => {
  const numbers: number[] = [];
  const data = (await readFile(__dirname + "/02-input.txt")).split("\n");
  const array: string[][] = [];
  data.forEach((el) => {
    array.push(el.split(":").join(",").split(";").join(",").split(","));
  });
  array.forEach((element, i) => {
    console.log("raz: ", element);
    const bestResults = {
      red: 0,
      blue: 0,
      green: 0,
    };
    element.forEach((el) => {
      console.log("dwa: ", el);
      if (el.trim().includes("red")) {
        bestResults.red =
          bestResults.red < Number(el.slice(0, 3).trim())
            ? Number(el.slice(0, 3).trim())
            : bestResults.red;
        console.log({
          color: "red",
          number: Number(el.slice(0, 3).trim()),
          i,
        });
      }
      if (el.trim().includes("blue")) {
        bestResults.blue =
          bestResults.blue < Number(el.slice(0, 3).trim())
            ? Number(el.slice(0, 3).trim())
            : bestResults.blue;
        console.log({
          color: "blue",
          number: Number(el.slice(0, 3).trim()),
          i,
        });
      }
      if (el.trim().includes("green")) {
        bestResults.green =
          bestResults.green < Number(el.slice(0, 3).trim())
            ? Number(el.slice(0, 3).trim())
            : bestResults.green;
        console.log({
          color: "green",
          number: Number(el.slice(0, 3).trim()),
          i,
        });
      }
    });
    numbers.push(bestResults.blue * bestResults.green * bestResults.red);
  });

  console.log(sumArray(numbers));
};

main();
