/**
 * Rectangle 5x7
 *
 * *******
 * *     *
 * *     *
 * *     *
 * *******
 */

console.log(
  buildRectangle(5, 7) ===
    `*******
*     *
*     *
*     *
*******
`
);

console.log(
  buildEmptyRows(3, 7) ===
    `*     *
*     *
*     *
`
);

console.log(buildFullRow(7) === "*******");
console.log(buildEmptyRow(7) === "*     *");

function buildRectangle(rows, columns) {
  return (
    buildFullRow(columns) +
    "\n" +
    buildEmptyRows(rows - 2, columns) +
    buildFullRow(columns) +
    "\n"
  );
}

/**
 * *
 * **
 * ***
 * ****
 * *****
 */

console.log(buildTriangle(5));

function buildTriangle(height) {
  return new Array(height)
    .fill(null)
    .map((_, index) => buildFullRow(index + 1) + "\n")
    .join("");
}

function buildFullRow(columns) {
  return new Array(columns).fill("*").join("");
}

function buildEmptyRows(rows, columns) {
  return new Array(rows)
    .fill(null)
    .map(() => buildEmptyRow(columns) + "\n")
    .join("");
}

function buildEmptyRow(columns) {
  return "*" + new Array(columns - 2).fill(" ").join("") + "*";
}

function doIt(x, y) {
  return (
    new Array(x).fill("*").join("") +
    "\n" +
    new Array(y - 2)
      .fill(null)
      .map(() => "*" + new Array(x - 2).fill(" ").join("") + "*" + "\n")
      .join("") +
    new Array(x).fill("*").join("") +
    "\n"
  );
}
