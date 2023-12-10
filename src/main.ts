import * as fs from "fs";
import * as path from "path";
import { World } from "./world";
import { Direction, Robot } from "./robot";

const readInstructionsFile = (file: string) => {
  const filePath = path.join(__dirname, file);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const instructions = fileContent.split("\n");
  return instructions;
};

const placeRobotInWorld = (instruction: string) => {
  const [main, place] = instruction.split(" ");

  if (main !== "PLACE" || !place) {
    console.log("Invalid instruction: ", instruction);
    return;
  }

  const [x, y, direction] = place.split(",");

  if (!x || !y || !direction) {
    console.log("Invalid instruction: ", instruction);
    return;
  }

  if (!Object.keys(Direction).includes(direction)) {
    console.log("Invalid direction: ", direction);
    return;
  }

  const world = new World(4, 4);
  return new Robot(world, parseInt(x), parseInt(y), direction as Direction);
};

export const loadInstructions = (fileName: string) => {
  let robot: Robot | undefined;
  const instructions = readInstructionsFile(fileName);

  for (let instruction of instructions) {
    instruction = instruction.trim();

    if (instruction.includes("PLACE")) {
      const newRobot = placeRobotInWorld(instruction);
      if (newRobot) {
        robot = newRobot;
      } else {
        break;
      }
    } else {
      if (!robot) {
        console.log("Robot not placed in world");
        break;
      }

      if (instruction === "MOVE") {
        robot?.move();
      } else if (instruction === "LEFT") {
        robot?.turnLeft();
      } else if (instruction === "RIGHT") {
        robot?.turnRight();
      } else if (instruction === "REPORT") {
        const currentReport = robot?.report();
        console.log(currentReport);
      } else {
        console.log("Invalid instruction: ", instruction);
        break;
      }
    }
  }
};

loadInstructions("../instructions.txt");
