// Generic type for world objects e.g robot
interface IWorldObject {
  x: number;
  y: number;
}

export class World {
  private xMinLength = 0;
  private yMinLength = 0;
  private xMaxLength = 4;
  private yMaxLength = 4;

  constructor(xMaxLength: number, yMaxLength: number) {
    this.xMaxLength = xMaxLength;
    this.yMaxLength = yMaxLength;
  }

  public isObjectInWorld(object: IWorldObject) : boolean {
    if (object.x < this.xMinLength || object.x > this.xMaxLength) {
      return false;
    }
    if (object.y < this.yMinLength || object.y > this.yMaxLength) {
      return false;
    }
    return true;
  }
}
