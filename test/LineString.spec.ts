import "mocha";
import { expect } from "chai";
import LineString from "../src/LineString";
import Point from "../src/Point";

describe("test LineString", () => {
    it("test default constructor", () => {
        const l = new LineString();
        expect(l.getNumPoints()).to.equal(0);
        expect(l.getPointN(0)).to.deep.equal(new Point);
        l.translate(1.0,1.0);
        expect(l.getNumPoints()).to.equal(0);
        expect(l.getPointN(0)).to.deep.equal(new Point);

    });
    it("test constructor with points", () => {
        const p1 = new Point([1.0, 2.0]);
        const p2 = new Point([2.0, 3.0]);
        const l = new LineString([p1, p2]);
        expect(l.getNumPoints()).to.equal(2);
        expect(l.getPointN(0)).to.deep.equal(p1);
        expect(l.getPointN(1)).to.deep.equal(p2);

        l.translate(1.0,1.0);
        p1.translate(1.0, 1.0)
        p2.translate(1.0, 1.0)

        expect(l.getPointN(0)).to.deep.equal(p1);
        expect(l.getPointN(1)).to.deep.equal(p2);


    });
    it("test getType", () => {
        const l = new LineString();
        expect(l.getType()).to.equal("LineString");
    });

    it("test getType", () => {
        const p1 = new Point([1.0, 2.0]);
        const p2 = new Point([2.0, 3.0]);
        const l = new LineString([p1, p2]);
        expect(l.getNumPoints()).to.equal(2);
        expect(l.getPointN(0)).to.deep.equal(p1);
        expect(l.getPointN(1)).to.deep.equal(p2);

        const copy = l.clone();
        const cp_pt1 = p1.clone();
        const cp_pt2 = p2.clone();

        l.translate(1.0,1.0);
        p1.translate(1.0, 1.0)
        p2.translate(1.0, 1.0)

        expect(copy.getPointN(0)).to.deep.equal(cp_pt1);
        expect(copy.getPointN(1)).to.deep.equal(cp_pt2);
        expect(l.getPointN(0)).to.deep.equal(p1);
        expect(l.getPointN(1)).to.deep.equal(p2);
    });
});