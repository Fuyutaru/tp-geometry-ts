import "mocha";
import { expect } from "chai";
import LineString from "../src/LineString";
import Point from "../src/Point";
import GeometryCollection from "../src/GeometryCollection";

describe("test GeometryCollection", () => {
    it("test default constructor", () => {
        const g = new GeometryCollection();
        expect(g.getNumGeometries()).to.equal(0);
        expect(g.getGeometryN(0)).to.deep.equal(new Point);
        g.translate(1.0,1.0);
        expect(g.getNumGeometries()).to.equal(0);
        expect(g.getGeometryN(0)).to.deep.equal(new Point);

    });
    it("test constructor with elements", () => {
        const p1 = new Point([1.0, 2.0]);
        const p2 = new Point([2.0, 3.0]);
        const l = new LineString([p1, p2]);
        const g = new GeometryCollection([p1, p2, l]);

        expect(g.getNumGeometries()).to.equal(3);
        expect(g.getGeometryN(0)).to.deep.equal(p1);
        expect(g.getGeometryN(1)).to.deep.equal(p2);
        expect(g.getGeometryN(2)).to.deep.equal(l);

        g.translate(1.0, 1.0);
        l.translate(1.0,1.0);
        p1.translate(1.0, 1.0);
        p2.translate(1.0, 1.0);

        expect(g.getGeometryN(0)).to.deep.equal(p1);
        expect(g.getGeometryN(1)).to.deep.equal(p2);
        expect(g.getGeometryN(2)).to.deep.equal(l);

    });
    it("test getType", () => {
        const g = new GeometryCollection();
        expect(g.getType()).to.equal("GeometryCollection");
    });

    it("test clone", () => {
        const p1 = new Point([1.0, 2.0]);
        const p2 = new Point([2.0, 3.0]);
        const l = new LineString([p1, p2]);
        const g = new GeometryCollection([p1, p2, l]);
        expect(g.getNumGeometries()).to.equal(3);
        expect(g.getGeometryN(0)).to.deep.equal(p1);
        expect(g.getGeometryN(1)).to.deep.equal(p2);
        expect(g.getGeometryN(2)).to.deep.equal(l);

        const copy = g.clone();
        const cp_pt1 = p1.clone();
        const cp_pt2 = p2.clone();
        const copy_l = l.clone();

        g.translate(1.0, 1.0);
        l.translate(1.0,1.0);
        p1.translate(1.0, 1.0);
        p2.translate(1.0, 1.0);

        expect(copy.getGeometryN(0)).to.deep.equal(cp_pt1);
        expect(copy.getGeometryN(1)).to.deep.equal(cp_pt2);
        expect(copy.getGeometryN(2)).to.deep.equal(copy_l);
        expect(g.getGeometryN(0)).to.deep.equal(p1);
        expect(g.getGeometryN(1)).to.deep.equal(p2);
        expect(g.getGeometryN(2)).to.deep.equal(l);
    });


    it("test envelope", () => {
        const p1 = new Point([1.0, 2.0]);
        const p2 = new Point([2.0, 3.0]);
        const l = new LineString([p1, p2]);
        const g = new GeometryCollection([p1, p2, l]);
        const env = g.getEnvelope();

        expect(env.getXmin()).to.equal(1.0);
        expect(env.getXmax()).to.equal(2.0);
        expect(env.getYmin()).to.equal(2.0);
        expect(env.getYmax()).to.equal(3.0);
        expect(env.isEmpty()).to.equal(false);

        const out = "bottom left : " + 1.0 + " " + 2.0 + " top right : " + 2.0 + " " + 3.0;
        expect(env.toString()).to.equal(out);
    });


    it("test asText", () => {
        const p1 = new Point([1.0, 2.0]);
        const p2 = new Point([2.0, 3.0]);
        const l = new LineString([p1, p2]);
        const g = new GeometryCollection([p1, p2, l]);
        const wkt = g.asText();

        expect(wkt).to.equal("GEOMETRYCOLLECTION(POINT(1.0 2.0),POINT(2.0 3.0),LINESTRING(1.0 2.0,2.0 3.0))");

    });


});