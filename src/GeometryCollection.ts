import AbstractGeometry from "./AbstractGeometry";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";

export default class GeometryCollection extends AbstractGeometry{
    geometries: Array<Geometry>;

    constructor(geometries?: Array<Geometry>){
        super();
        this.geometries = geometries || [];
    }

    getType(): string {
        return "GeometryCollection";
    }
    isEmpty(): boolean {
        return this.geometries.length == 0;
    }
    translate(dx: number, dy: number): void {
        for (let geom of this.geometries){
            geom.translate(dx, dy);
        }
    }
    clone(): GeometryCollection {
        const copy = new GeometryCollection();
        for (let i = 0; i < this.geometries.length; i++){
            copy.geometries.push(this.geometries[i].clone());
          }
        return copy;
    }
    accept(visitor: GeometryVisitor) {
        visitor.visitGeometryCollection(this);
    }

    getNumGeometries(): number{
        return this.geometries.length;
    }

    getGeometryN(n: number): Geometry{
        return this.isEmpty() ? new Point : this.geometries[n];
    }

    
}