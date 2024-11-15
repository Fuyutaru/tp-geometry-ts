import AbstractGeometry from "./AbstractGeometry";
import Geometry from "./Geometry";
import GeometryCollection from "./GeometryCollection";
import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";

export default class WktVisitor implements GeometryVisitor{
    private buffer: String;

    constructor(){
        this.buffer = "";
    }

    visitPoint(point: Point) {
        let wkt = "";
        if (point.isEmpty()){
            wkt = "POINT EMPTY";
        }
        else{
            let x = point.x();
            let y = point.y();
            wkt = "POINT(" + x.toFixed(1) + " " + y.toFixed(1) + ")";
        }
        this.buffer += wkt; // TODO : test
    }

    visitLineString(linestring: LineString) {

        let wkt = "";
        if (linestring.isEmpty()){
            wkt = "LINESTRING EMPTY";
        }
        else{
            wkt = "LINESTRING(";
            for(let i = 0; i < linestring.getNumPoints(); i++){
                let x = linestring.getPointN(i).x();
                let y = linestring.getPointN(i).y();
                wkt += x.toFixed(1) + " " + y.toFixed(1);
                if (i == linestring.getNumPoints() - 1){
                    wkt += ")";
                }
                else{
                    wkt += ",";
                }

            }
        }
        this.buffer += wkt;
    }

    visitGeometryCollection(g: GeometryCollection) {
        if (g.isEmpty()){
            this.buffer += "GEOMETRYCOLLECTION EMPTY";
        }
        else{
            this.buffer += "GEOMETRYCOLLECTION(";
            for(let i = 0; i < g.getNumGeometries(); i++){
                if ( i != 0 ){
                    this.buffer += ",";
                }
                g.getGeometryN(i).accept(this);
            }
            this.buffer += ")";
        }

    }

    getResult(): String{
        return this.buffer;
    }


}