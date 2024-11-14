import "mocha";
import { expect } from "chai";
import EnvelopeBuilder from "../src/EnvelopeBuilder";


describe("test EnvelopeBuilder", () => {
    it("test no point", () => {
        const builder = new EnvelopeBuilder();
        const result = builder.build();
        expect(Number.isNaN(result.getXmin()));
        expect(Number.isNaN(result.getXmax()));
        expect(Number.isNaN(result.getYmin()));
        expect(Number.isNaN(result.getYmax()));
        expect(result.isEmpty()).to.equal(true);

        const out = "bottom left : " + Number.NaN + " " + Number.NaN + " top right : " + Number.NaN + " " + Number.NaN;
        expect(result.toString()).to.equal(out);
    });

    it("test one point", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([0.0,1.0]);
        const result = builder.build();
        expect(result.getXmin()).to.equal(0.0);
        expect(result.getXmax()).to.equal(0.0);
        expect(result.getYmin()).to.equal(1.0);
        expect(result.getYmax()).to.equal(1.0);
        expect(result.isEmpty()).to.equal(false);

        const out = "bottom left : " + 0.0 + " " + 1.0 + " top right : " + 0.0 + " " + 1.0;
        expect(result.toString()).to.equal(out);


    });


    it("test two point", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([0.0,0.0]);
        builder.insert([1.0,1.0]);
        const result = builder.build();
        expect(result.getXmin()).to.equal(0.0);
        expect(result.getXmax()).to.equal(1.0);
        expect(result.getYmin()).to.equal(0.0);
        expect(result.getYmax()).to.equal(1.0);
        expect(result.isEmpty()).to.equal(false);

        const out = "bottom left : " + 0.0 + " " + 0.0 + " top right : " + 1.0 + " " + 1.0;
        expect(result.toString()).to.equal(out);

    });


    it("test two point reverse", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([1.0,1.0]);
        builder.insert([0.0,0.0]);
        const result = builder.build();
        expect(result.getXmin()).to.equal(0.0);
        expect(result.getXmax()).to.equal(1.0);
        expect(result.getYmin()).to.equal(0.0);
        expect(result.getYmax()).to.equal(1.0);
        expect(result.isEmpty()).to.equal(false);

        const out = "bottom left : " + 0.0 + " " + 0.0 + " top right : " + 1.0 + " " + 1.0;
        expect(result.toString()).to.equal(out);

    });


    it("test three point", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([0.0,0.0]);
        builder.insert([1.0,1.0]);
        builder.insert([0.0,3.0]);
        const result = builder.build();
        expect(result.getXmin()).to.equal(0.0);
        expect(result.getXmax()).to.equal(1.0);
        expect(result.getYmin()).to.equal(0.0);
        expect(result.getYmax()).to.equal(3.0);
        expect(result.isEmpty()).to.equal(false);

        const out = "bottom left : " + 0.0 + " " + 0.0 + " top right : " + 1.0 + " " + 3.0;
        expect(result.toString()).to.equal(out);
    });


});