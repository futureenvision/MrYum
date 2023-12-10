import { World } from "./world";

export enum Direction {
  NORTH = "NORTH",
  EAST = "EAST",
  SOUTH = "SOUTH",
  WEST = "WEST",
}

export class Robot {
  public x = 0;
  public y = 0;
  public direction = Direction.NORTH;
  private world: World;

  constructor(world: World, x: number, y: number, direction: Direction) {
    this.world = world;
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  move(): void {
    let y = this.y;
    let x = this.x;

    switch (this.direction) {
      case "NORTH":
        y++;
        break;
      case "EAST":
        x++;
        break;
      case "SOUTH":
        y--;
        break;
      case "WEST":
        x--;
        break;
    }

    if (this.world.isObjectInWorld({ x, y })) {
      this.x = x;
      this.y = y;
    }
  }

  turnLeft(): void {
    switch (this.direction) {
      case "NORTH":
        this.direction = Direction.WEST;
        break;
      case "EAST":
        this.direction = Direction.NORTH;
        break;
      case "SOUTH":
        this.direction = Direction.EAST;
        break;
      case "WEST":
        this.direction = Direction.SOUTH;
        break;
    }
  }

  turnRight() : void {
    switch (this.direction) {
      case "NORTH":
        this.direction = Direction.EAST;
        break;
      case "EAST":
        this.direction = Direction.SOUTH;
        break;
      case "SOUTH":
        this.direction = Direction.WEST;
        break;
      case "WEST":
        this.direction = Direction.NORTH;
        break;
    }
  }

  report() {
    return `Output: ${this.x},${this.y},${this.direction}`;
  }
}
