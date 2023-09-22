const shuffle = require("../src/shuffle");

describe("testing shuffle function", () => {
  const array = [1,2,3,4,5]
  const output = shuffle(array)

  test('should return an array', ()=>{
    expect(Array.isArray(output)).toBe(true);
  });

  test('should return array of same length as sent in', ()=>{
    expect(output.length).toBe(array.length)
  });
    
  test("contain the same items as the input array", () => {
    expect(output).toEqual(expect.arrayContaining(array));
  });

  test("have shuffled items", () => {
    expect(output).not.toEqual(array);
  });
});
