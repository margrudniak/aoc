import { readFile } from "../utils";

interface OrganizedType {
  id: number | null;
  typedNumbers: number[] | null;
  winningNumbers: number[] | null;
  commbonNumbers: number[] | null;
  prize: number | null;
  isWinning: boolean | null;
}

const main = async () => {
  let sum = 0;
  const arrayFiltered: OrganizedType[] = [];
  const data = (await readFile(__dirname + "/04-input.txt")).split("\n");
  data.forEach((el, i) => {
    let id = null;
    let typedNumbers = null;
    let winningNumbers = null;
    let commbonNumbers = null;
    let prize = null;
    let isWinning = null;
    el.split(":")
      .join(",")
      .split("|")
      .join(",")
      .split(",")
      .forEach((ele, j) => {
        if (j === 0) {
          id = Number(ele.match(/\d+/g));
        }
        if (j === 1) {
          const typeArray = ele.trimEnd().trimEnd().match(/\d+/g);
          const arrOfNum = typeArray.map((str) => {
            return parseInt(str, 10);
          });
          typedNumbers = JSON.parse(JSON.stringify(arrOfNum));
        }
        if (j === 2) {
          const winArray = ele.trimEnd().trimEnd().match(/\d+/g);
          const arrOfNum = winArray.map((str) => {
            return parseInt(str, 10);
          });
          winningNumbers = JSON.parse(JSON.stringify(arrOfNum));
        }
      });
    const arrayOfWonNumbers: number[] | [] = typedNumbers.filter((i) =>
      winningNumbers.includes(i)
    );

    if (arrayOfWonNumbers.length > 0) {
      commbonNumbers = arrayOfWonNumbers;
      isWinning = true;
      prize = Math.pow(
        2,
        arrayOfWonNumbers.length === 1 ? 0 : arrayOfWonNumbers.length - 1
      );
    } else {
      isWinning = false;
    }
    arrayFiltered.push({
      id,
      typedNumbers,
      winningNumbers,
      commbonNumbers,
      prize,
      isWinning,
    });
  });

  if (arrayFiltered.length) {
    arrayFiltered.forEach((element) => {
      if (element.isWinning) {
        sum += Number(element.prize);
      }
    });
  }

  console.log(arrayFiltered);
  console.log(sum);
};

main();
