import GeometryCollection from "./GeometryCollection";
import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";

export default class LogGeometryVisitor implements GeometryVisitor{
    constructor(private log = console.log){

    }
    


    visitPoint(point: Point) {
        if (point.isEmpty()){
            this.log("Je suis un point vide.");
        }
        else{
            const x = point.x();
            const y = point.y();
            const output = "Je suis un point avec x=" + x.toFixed(1) + " et y=" + y.toFixed(1) + ".";
            this.log(output);
        }
    }

    visitLineString(linestring: LineString) {
        if (linestring.isEmpty()){
            this.log("Je suis une polyligne vide.");
        }

        else{
            const n = linestring.getNumPoints();
            if (n > 1){
                this.log("Je suis une polyligne définie par " + n + " points.");
            }
            else{
                this.log("Je suis une polyligne définie par " + n + " point.");
            }
        }
    }


    visitGeometryCollection(g: GeometryCollection) {
        if (g.isEmpty()){
            this.log("Je suis une collection vide.");
        }

        else{
            const n = g.getNumGeometries();
            if (n > 1){
                this.log("Je suis une collection définie par " + n + " géométries.");
            }
            else{
                this.log("Je suis une collection définie par " + n + " géométrie.");
            }
        }
    }


}