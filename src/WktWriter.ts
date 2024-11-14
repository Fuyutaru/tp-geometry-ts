import Geometry from "./Geometry";
import LineString from "./LineString";
import Point from "./Point";

export default class WktWriter{
    write(geometry: Geometry): string{
        let wkt = "";
        if ( geometry instanceof Point ){
            if (geometry.isEmpty()){
                wkt = "POINT EMPTY";
            }
            else{
                let x = geometry.x();
                let y = geometry.y();
                wkt = "POINT(" + x.toFixed(1) + " " + y.toFixed(1) + ")";
            }
        }else if ( geometry instanceof LineString ){
            if (geometry.isEmpty()){
                wkt = "LINESTRING EMPTY";
            }
            else{
                wkt = "LINESTRING(";
                for(let i = 0; i < geometry.getNumPoints(); i++){
                    let x = geometry.getPointN(i).x();
                    let y = geometry.getPointN(i).y();
                    wkt += x.toFixed(1) + " " + y.toFixed(1);
                    if (i == geometry.getNumPoints() - 1){
                        wkt += ")";
                    }
                    else{
                        wkt += ",";
                    }

                }
            }
        }else{
            throw new TypeError("geometry type not supported");
        }
        return wkt;
    }
}