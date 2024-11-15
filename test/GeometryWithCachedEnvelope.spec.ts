import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import GeometryWithCachedEnvelope from "../src/GeometryWithCachedEnvelope"
import Geometry from "../src/Geometry";
import WktVisitor from "../src/WktVisitor";

describe("test cache envelope", () => {
    it("test point", () => {
        let p: Geometry = new Point([3.0,4.0]);
        p = new GeometryWithCachedEnvelope(p);
        const a = p.getEnvelope();
        const b = p.getEnvelope();

        expect(a.getXmin()).to.equal(3.0);
        expect(a.getXmax()).to.equal(3.0);
        expect(a.getYmin()).to.equal(4.0);
        expect(a.getYmax()).to.equal(4.0);
        expect(a.isEmpty()).to.be.false;

        const out_a = "bottom left : " + 3.0 + " " + 4.0 + " top right : " + 3.0 + " " + 4.0;
        expect(a.toString()).to.equal(out_a);


        expect(b.getXmin()).to.equal(3.0);
        expect(b.getXmax()).to.equal(3.0);
        expect(b.getYmin()).to.equal(4.0);
        expect(b.getYmax()).to.equal(4.0);
        expect(b.isEmpty()).to.be.false;

        const out_b = "bottom left : " + 3.0 + " " + 4.0 + " top right : " + 3.0 + " " + 4.0;
        expect(b.toString()).to.equal(out_b);

        

        
    });


    it("test getType", () => {
        let p: Geometry = new Point();
        p = new GeometryWithCachedEnvelope(p);
        expect(p.isEmpty()).to.be.true;
        expect(p.getType()).to.equal("Point");
    });

    it("test clone", () => {
        let p: Geometry = new Point([3.0,4.0]);
        p = new GeometryWithCachedEnvelope(p);
        const copy = p.clone();
        p.translate(1.0, 1.0);

        const wkt_copy = copy.asText();
        expect(wkt_copy).to.equal("POINT(3.0 4.0)")
        
        const wkt = p.asText();
        expect(wkt).to.equal("POINT(4.0 5.0)")
    });


    it("test accept", () => {

        let p: Geometry = new Point([3.0,4.0]);
        p = new GeometryWithCachedEnvelope(p);
        const visitor = new WktVisitor();
        p.accept(visitor);

        const wkt = visitor.getResult();

        
        expect(wkt).to.equal("POINT(3.0 4.0)");
    });

    


});

