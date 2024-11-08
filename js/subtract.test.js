const sub = require("./subtract");

test("sub 2 - 1 to equal 1", () => {
  expect(sub(2, 1)).toBe(1);
});
