import fs from "fs";

const whichValue = (val: string) => {
  if (val === "A" || val === "X") return 1;
  if (val === "B" || val === "Y") return 2;
  if (val === "C" || val === "Z") return 3;
  else return;
};

const polskaNazwa = (val: number) => {
  switch (val) {
    case 1:
      return "Kamien";
    case 2:
      return "Papier";
    case 3:
      return "Nozyce";
    default:
      return;
  }
};

// 1 1 -
// 1 2 6
// 1 3 0
// 2 1 0
// 2 2 -
// 2 3 6
// 3 1 6
// 3 2 0
// 3 3 -

fs.readFile("src/02/02-input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  } else {
    const file = data.split("\n");
    let result = 0;
    file.forEach((el: string) => {
      const firstValue = whichValue(el[0]);
      const secondValue = whichValue(el[2]);
      const pierwsza = polskaNazwa(firstValue);
      const druga = polskaNazwa(secondValue);

      result += secondValue;

      if (firstValue === secondValue) {
        console.log(`${pierwsza} ${druga}`);
        result += 3;
      }
      if (
        (firstValue === 1 && secondValue === 2) ||
        (firstValue === 2 && secondValue === 3) ||
        (firstValue === 3 && secondValue === 1)
      )
        result += 6;

      console.log(`${pierwsza} ${druga} ---- ${result}`);
    });
    console.log(result);
  }
});
