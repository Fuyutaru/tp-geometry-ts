import "mocha";
import { expect } from "chai";
import Point from "../src/Point";

describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.deep.equal([Number.NaN, Number.NaN]);
        expect(p.isEmpty()).to.equal(true);
        expect(Number.isNaN(p.x()));
        expect(Number.isNaN(p.y()));
        p.translate(1.0,1.0);
        expect(p.getCoordinate()).to.deep.equal([Number.NaN, Number.NaN]);

    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0,4.0]);
        expect(p.isEmpty()).to.equal(false);
        expect(p.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
        p.translate(1.0, 1.0);
        expect(p.getCoordinate()).to.deep.equal([4.0, 5.0]);
    });
    it("test getType", () => {
        const p = new Point();
        expect(p.getType()).to.equal("Point");
    });

    it("test clone", () => {
        const p = new Point([3.0,4.0]);
        const copy = p.clone();
        p.translate(1.0, 1.0);
        expect(copy.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p.getCoordinate()).to.deep.equal([4.0,5.0]);

        copy.translate(10.0,10.0);
        expect(copy.getCoordinate()).to.deep.equal([13.0,14.0]);
        expect(p.getCoordinate()).to.deep.equal([4.0,5.0]);
    });

    it("test envelope", () => {
        const p = new Point([3.0,4.0]);
        const env = p.getEnvelope();

        expect(env.getXmin()).to.equal(3.0);
        expect(env.getXmax()).to.equal(3.0);
        expect(env.getYmin()).to.equal(4.0);
        expect(env.getYmax()).to.equal(4.0);
        expect(env.isEmpty()).to.equal(false);

        const out = "bottom left : " + 3.0 + " " + 4.0 + " top right : " + 3.0 + " " + 4.0;
        expect(env.toString()).to.equal(out);
    });

    it("test astext", () => {
        const p = new Point([3.0,4.0]);

        const wkt = p.asText();

        
        expect(wkt).to.equal("POINT(3.0 4.0)");
    });

    


});

