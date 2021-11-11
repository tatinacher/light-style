import css from "../index";

test("css tests", () => {
  expect(typeof css(`display: block`)).toBe("string");
});
