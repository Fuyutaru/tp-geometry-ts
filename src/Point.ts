import AbstractGeometry from "./AbstractGeometry";
import Coordinate from "./Coordinate";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";

export default class Point extends AbstractGeometry{
  private coordinate: Coordinate;

  constructor(coordinate?: Coordinate) {
    super();
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
    // return new Points([...this.coordinate]);
    return c;
  }

  getEnvelope(): Envelope {
    const builder = new EnvelopeBuilder();
    builder.insert(this.coordinate);
    return builder.build();
  }


  accept(visitor: GeometryVisitor) {
    visitor.visitPoint(this);
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
