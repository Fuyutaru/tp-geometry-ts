import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";

export default class LogGeometryVisitor implements GeometryVisitor{
    visitPoint(point: Point) {
        if (point.isEmpty()){
            console.log("Je suis un point vide.");
        }
        else{
            const x = point.x();
            const y = point.y();
            const output = "Je suis un point avec x=" + x.toFixed(1) + " et y=" + y.toFixed(1) + ".";
            console.log(output);
        }
    }

    visitLineString(linestring: LineString) {
        if (linestring.isEmpty()){
            console.log("Je suis une polyligne vide.");
        }

        else{
            const n = linestring.getNumPoints();
            if (n > 1){
                console.log("Je suis une polyligne définie par " + n + " points.");
            }
            else{
                console.log("Je suis une polyligne définie par " + n + " point.");
            }
        }
    }
}