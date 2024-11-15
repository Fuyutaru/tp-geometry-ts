import Coordinate from "./Coordinate";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import Geometry from "./Geometry";

export default class Point implements Geometry{
  private coordinate: Coordinate;

  constructor(coordinate?: Coordinate) {
    this.coordinate = coordinate || [Number.NaN, Number.NaN];
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

  clone(): Point {
    let x = this.x();
    let y = this.y();
    const c = new Point([x,y]);
    return c;
  }

  getEnvelope(): Envelope {
    const builder = new EnvelopeBuilder();
    builder.insert(this.coordinate);
    return builder.build();
  }

  getCoordinate(): Coordinate {
    return this.coordinate;
  }

  x(): number {
    return this.coordinate[0] ;
  }

  y(): number {
    return this.coordinate[1] ;
  }

}
