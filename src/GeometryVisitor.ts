import GeometryCollection from "./GeometryCollection";
import LineString from "./LineString";
import Point from "./Point";

export default interface GeometryVisitor{
    visitPoint(point: Point);
    visitLineString(linestring: LineString);
    visitGeometryCollection(g: GeometryCollection);
}