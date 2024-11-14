import Coordinate from "./Coordinate";
import Geometry from "./Geometry";

export default class points implements Geometry{
  private coordinate?: Coordinate;

  constructor(coordinate?: Coordinate) {
    this.coordinate = coordinate ? coordinate : [Number.NaN, Number.NaN];
  }

  getType(): string {
    return "Point";
  }

  isEmpty(): boolean {
    return Number.isNaN(this.coordinate[0]) && Number.isNaN(this.coordinate[1]);
  }

  translate(dx: number, dy: number): void {
    this.coordinate[0] += dx;
    this.coordinate[1] += dy;
  }

  getCoordinate(): Coordinate {
    return this.coordinate;
  }

  x(): number {
    return this.isEmpty() ? Number.NaN : this.coordinate[0] ;
  }

  y(): number {
    return this.isEmpty() ? Number.NaN : this.coordinate[1] ;
  }

}
