import { Robot, Direction } from "./robot";
import { World } from "./world";

describe("Robot", () => {
  test("should be created", () => {
    const world = new World(4, 4);
    const robot = new Robot(world, 0, 0, Direction.NORTH);
    expect(robot).toBeDefined();
  });

  test("should turn left", () => {
    const world = new World(4, 4);
    const robot = new Robot(world, 0, 0, Direction.NORTH);
    robot.turnLeft();
    expect(robot.direction).toBe(Direction.WEST);
    expect(robot.x).toBe(0);
    expect(robot.y).toBe(0);
  });

  test("should turn right", () => {
    const world = new World(4, 4);
    const robot = new Robot(world, 0, 0, Direction.NORTH);
    robot.turnRight();
    expect(robot.direction).toBe(Direction.EAST);
    expect(robot.x).toBe(0);
    expect(robot.y).toBe(0);
  });

  test("should move", () => {
    const world = new World(4, 4);
    const robot = new Robot(world, 0, 0, Direction.NORTH);
    robot.move();
    expect(robot.direction).toBe(Direction.NORTH);
    expect(robot.x).toBe(0);
    expect(robot.y).toBe(1);
  });

  test("should move off the world", () => {
    const world = new World(4, 4);
    const robot = new Robot(world, 0, 0, Direction.NORTH);
    robot.move();
    robot.move();
    robot.move();
    robot.move();
    robot.move();
    expect(robot.direction).toBe(Direction.NORTH);
    expect(robot.x).toBe(0);
    expect(robot.y).toBe(4);
  });

  test("should move off the world", () => {
    const world = new World(4, 4);
    const robot = new Robot(world, 0, 0, Direction.NORTH);
    robot.turnLeft();
    robot.move();
    expect(robot.direction).toBe(Direction.WEST);
    expect(robot.x).toBe(0);
    expect(robot.y).toBe(0);
  });

  test("should move twice", () => {
    const world = new World(4, 4);
    const robot = new Robot(world, 0, 0, Direction.NORTH);
    robot.move();
    robot.move();
    expect(robot.direction).toBe(Direction.NORTH);
    expect(robot.x).toBe(0);
    expect(robot.y).toBe(2);
  });

  test("should move left", () => {
    const world = new World(4, 4);
    const robot = new Robot(world, 0, 0, Direction.NORTH);
    robot.turnLeft();
    robot.move();
    expect(robot.direction).toBe(Direction.WEST);
    expect(robot.x).toBe(0);
    expect(robot.y).toBe(0);
  });

  test("should move right", () => {
    const world = new World(4, 4);
    const robot = new Robot(world, 0, 0, Direction.NORTH);
    robot.turnRight();
    robot.move();
    expect(robot.direction).toBe(Direction.EAST);
    expect(robot.x).toBe(1);
    expect(robot.y).toBe(0);
  });

  test("should turn move right, move left", () => {
    const world = new World(4, 4);
    const robot = new Robot(world, 0, 0, Direction.NORTH);
    robot.turnRight();
    robot.move();
    robot.turnLeft();
    robot.move();
    expect(robot.direction).toBe(Direction.NORTH);
    expect(robot.x).toBe(1);
    expect(robot.y).toBe(1);
  });
});

