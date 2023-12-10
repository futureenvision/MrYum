import { loadInstructions } from "./main";

describe("Load Instructions", () => {
  test("should load instructions to move from file", () => {
    const spy = jest.spyOn(console, "log");
    loadInstructions("../assets/instructions_correct_1.txt");
    expect(spy).toHaveBeenCalledWith("Output: 0,1,NORTH");
  });

  test("should load instructions to move left from file", () => {
    const spy = jest.spyOn(console, "log");
    loadInstructions("../assets/instructions_correct_2.txt");
    expect(spy).toHaveBeenCalledWith("Output: 0,0,WEST");
  });

  test("should load instructions to move left and to move right from file", () => {
    const spy = jest.spyOn(console, "log");
    loadInstructions("../assets/instructions_correct_3.txt");
    expect(spy).toHaveBeenCalledWith("Output: 1,1,NORTH");
  });

  test("should load instructions from file with incorrect PLACE instruction", () => {
    const spy = jest.spyOn(console, "log");
    loadInstructions("../assets/instructions_incorrect_1.txt");
    expect(spy).toHaveBeenCalledWith("Invalid instruction: ", "PLACE0,0,NORTH");
  });

  test("should load instructions from file with incorrect instruction", () => {
    const spy = jest.spyOn(console, "log");
    loadInstructions("../assets/instructions_incorrect_2.txt");
    expect(spy).toHaveBeenCalledWith("Invalid instruction: ", "REPORTS");
  });

  test("should load instructions from file with incorrect instruction formate", () => {
    const spy = jest.spyOn(console, "log");
    loadInstructions("../assets/instructions_incorrect_3.txt");
    expect(spy).toHaveBeenCalledWith("Invalid instruction: ", "LEFT RIGHT");
  });

  test("should load instructions from file with incorrect instruction formate", () => {
    const spy = jest.spyOn(console, "log");
    loadInstructions("../assets/instructions_incorrect_4.txt");
    expect(spy).toHaveBeenCalledWith("Invalid direction: ", "NORTHS");
  });
});
