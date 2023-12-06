import { readFile, sumArray } from "../utils";

/* SOLUTION DIFFERENCE FROM THE CORRECT WITH 588 */

const isBuiltWithSpecificCharacter = (str, specificChar) => {
  if (str.length === 0) {
    return false; // An empty string doesn't meet the criteria
  }

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) !== specificChar) {
      return false; // Found a different character, not built with the specific character
    }
  }

  return true; // All characters are the same as the specific character
};

const main = async () => {
  const arrayOfNumbers = [];
  const fallOfArrayOfNumbers = [];
  const data = (await readFile(__dirname + "/03-input.txt")).split("\n");
  for (let i = 0; i < data.length; i++) {
    const arrayOfNumbersInLine = [data[i].match(/\d+/g)];
    for (let j = 0; j < arrayOfNumbersInLine.length; j++) {
      if (arrayOfNumbersInLine[j] !== null) {
        arrayOfNumbersInLine[j].forEach((el) => {
          const startIndex =
            data[i].indexOf(el) - 1 <= -1 ? 0 : data[i].indexOf(el) - 1;
          const endIndex =
            data[i].indexOf(el) + el.length > data[i].length
              ? data[i].length - 1
              : data[i].indexOf(el) + el.length;
          if (i === 0) {
            const downFragment = data[i + 1].slice(startIndex, endIndex + 1);
            const left = startIndex === 0 ? true : data[i][startIndex];
            const right =
              endIndex === data[i].length ? true : data[i][endIndex];
            if (
              isBuiltWithSpecificCharacter(downFragment, ".") &&
              isBuiltWithSpecificCharacter(left, ".") &&
              isBuiltWithSpecificCharacter(right, ".")
            ) {
              fallOfArrayOfNumbers.push(el);
            } else {
              arrayOfNumbers.push(el);
            }
            return;
          }
          if (i === data.length - 1) {
            const upFragment = data[i - 1].slice(startIndex, endIndex + 1);
            const left = startIndex === 0 ? true : data[i][startIndex];
            const right =
              endIndex === data[i].length ? true : data[i][endIndex];
            if (
              isBuiltWithSpecificCharacter(upFragment, ".") &&
              isBuiltWithSpecificCharacter(left, ".") &&
              isBuiltWithSpecificCharacter(right, ".")
            ) {
              fallOfArrayOfNumbers.push(el);
            } else {
              arrayOfNumbers.push(el);
            }
            return;
          } else {
            const upFragment = data[i - 1].slice(startIndex, endIndex + 1);
            const downFragment = data[i + 1].slice(startIndex, endIndex + 1);
            const left = startIndex === 0 ? true : data[i][startIndex];
            const right =
              endIndex === data[i].length ? true : data[i][endIndex];
            console.log({
              upFragment,
              downFragment,
              left,
              right,
              el,
              odpada:
                isBuiltWithSpecificCharacter(upFragment, ".") &&
                isBuiltWithSpecificCharacter(downFragment, ".") &&
                isBuiltWithSpecificCharacter(left, ".") &&
                isBuiltWithSpecificCharacter(right, "."),
            });
            if (
              isBuiltWithSpecificCharacter(upFragment, ".") &&
              isBuiltWithSpecificCharacter(downFragment, ".") &&
              isBuiltWithSpecificCharacter(left, ".") &&
              isBuiltWithSpecificCharacter(right, ".")
            ) {
              fallOfArrayOfNumbers.push(el);
            } else {
              arrayOfNumbers.push(el);
            }
            return;
          }
        });
      }
    }
  }
  console.dir(fallOfArrayOfNumbers, { maxArrayLength: null });
  console.dir(arrayOfNumbers, { maxArrayLength: null });
  const intArray = arrayOfNumbers.map(function (e) {
    return parseInt(e);
  });
  console.log(sumArray(intArray));
};

main();
