import { World } from "./world";

// test world

describe("World", () => {
  const world = new World(4, 4);

  test("should return true if object is in world", () => {
    const object = { x: 0, y: 0 };
    expect(world.isObjectInWorld(object)).toBe(true);
  });

  test("should return false if object is not in world", () => {
    const object = { x: 5, y: 5 };
    expect(world.isObjectInWorld(object)).toBe(false);
  });
});