import AbstractGeometry from "./AbstractGeometry";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";

export default class LineString extends AbstractGeometry{
  private points: Array<Point>;

  constructor(points?: Array<Point>) {
    super();
    this.points = points || [];
  }

  getType(): string {
    return "LineString";
  }

  isEmpty(): boolean {
    return this.points.length == 0;
  }

  translate(dx: number, dy: number): void {
    for (let i = 0; i < this.points.length; i++){
      this.points[i].translate(dx, dy);
    }
  }

  clone(): LineString {
    const copy = new LineString;
    let cp_pt = new Point;
    for (let i = 0; i < this.points.length; i++){
        cp_pt = this.points[i].clone();
        copy.points.push(cp_pt);
      }
    return copy;
  }


  accept(visitor: GeometryVisitor) {
    visitor.visitLineString(this);
  }

  getNumPoints(): number{
    return this.points.length;
  }

  getPointN(n: number): Point{
    return this.isEmpty() ? new Point : this.points[n];
  }
}