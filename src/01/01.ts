import fs from "fs";

fs.readFile("./01-input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  } else {
    const file = data.split("\n");
    const arr = [];
    let tempArr = [];
    const arrCallories = [];

    file.forEach((el) => {
      if (el === "") {
        arr.push(tempArr);
        tempArr = [];
      } else {
        tempArr.push(el);
      }
    });

    arr.forEach((arr) => {
      let sum = 0;
      arr.forEach((el: string) => {
        sum += Number(el);
      });
      arrCallories.push(sum);
    });

    const maxCalories = Math.max(...arrCallories);
    console.log(maxCalories);
  }
});
