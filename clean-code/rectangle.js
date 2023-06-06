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

function buildEmptyRows(rows, columns) {
  return new Array(rows)
    .fill(null)
    .map(() => buildEmptyRow(columns) + "\n")
    .join("");
}

function buildFullRow(columns) {
  return new Array(columns).fill("*").join("");
}

function buildEmptyRow(columns) {
  return "*" + new Array(columns - 2).fill(" ").join("") + "*";
}
