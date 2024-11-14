import Geometry from "./Geometry";
import Point from "./Point";

export default class LineString implements Geometry{
    private points?: Array<Point>;

    constructor(points?: Array<Point>) {
        this.points = points ? points : [];
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

      getNumPoints(): number{
        return this.isEmpty() ? 0 : this.points.length;
      }

      getPointN(n: number): Point{
        return this.isEmpty() ? new Point : this.points[n];
      }
}