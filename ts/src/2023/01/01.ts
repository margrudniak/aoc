import { readFile } from "../utils";

const main = async () => {
  const data = (await readFile(__dirname + "/01-input.txt")).split("\n");
  const arrayOfNumbers: number[] = [];
  data.forEach((el: string) => {
    const extractedArrayOfElements = el.match(/\d+/g);
    arrayOfNumbers.push(
      Number(
        `${extractedArrayOfElements[0][0]}${
          extractedArrayOfElements[extractedArrayOfElements.length - 1][
            extractedArrayOfElements[extractedArrayOfElements.length - 1]
              .length - 1
          ]
        }`
      )
    );
  });

  const sum = arrayOfNumbers.reduce((acc, current) => {
    if (typeof current === "number") {
      return acc + current;
    }
    return acc;
  }, 0);

  console.log(sum);
};

main();
