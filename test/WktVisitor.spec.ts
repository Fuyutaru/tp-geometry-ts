import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import WktVisitor from "../src/WktVisitor";

describe("test WktVisitor", () => {
    it("test point", () => {
        const visitor = new WktVisitor();
        const geometry = new Point();
        geometry.accept(visitor);
        const wkt = visitor.getResult();

        expect(wkt).to.equal("POINT EMPTY");

    });


    it("test point", () => {
        const visitor = new WktVisitor();
        const geometry = new Point([3.0,4.0]);
        geometry.accept(visitor);
        const wkt = visitor.getResult();

        expect(wkt).to.equal("POINT(3.0 4.0)");

    });

    
    it("test linestring vide", () => {
        const visitor = new WktVisitor();
        const geometry = new LineString();
        geometry.accept(visitor);
        const wkt = visitor.getResult();

        expect(wkt).to.equal("LINESTRING EMPTY");

    });

    it("test linestring vide", () => {
        const visitor = new WktVisitor();
        const p1 = new Point([1.0, 2.0]);
        const p2 = new Point([2.0, 3.0]);
        const geometry = new LineString([p1, p2]);
        geometry.accept(visitor);
        const wkt = visitor.getResult();

        expect(wkt).to.equal("LINESTRING(1.0 2.0,2.0 3.0)");

    });




});

