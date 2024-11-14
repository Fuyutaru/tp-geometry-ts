import Geometry from "./Geometry";
import Point from "./Point";

export default class LineString implements Geometry{
    private points?: Array<Point>;

    constructor(points?: Array<Point>) {
        this.points = points ;
      }

      getType(): string {
        return "LineString";
      }

      getNumPoints(): number{
        if (this.points == undefined){
            return 0;
        }
        return this.points.length;
      }

      getPointN(n: number): Point{
        return this.points[n];
      }
}