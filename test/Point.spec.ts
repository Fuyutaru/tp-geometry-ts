import "mocha";
import { expect } from "chai";
import Point from "../src/Point";

describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.deep.equal([]);
        expect(p.isEmpty()).to.equal(true);
        expect(Number.isNaN(p.x()));
        expect(Number.isNaN(p.y()));
    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0,4.0]);
        expect(p.isEmpty()).to.equal(false);
        expect(p.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
    });
    it("test getType", () => {
        const p = new Point();
        expect(p.getType()).to.equal("Point");
    });
});

