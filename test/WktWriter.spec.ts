import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import WktWriter from "../src/WktWriter";
import Geometry from "../src/Geometry";
import Envelope from "../src/Envelope";

describe("test WktWriter", () => {
    it("test zero point", () => {
        const p1 = new Point();
        const writer = new WktWriter();
        const wkt = writer.write(p1);

        expect(wkt).to.equal("POINT EMPTY");

    });

    it("test one point", () => {
        const p1 = new Point([1.0, 2.0]);
        const writer = new WktWriter();
        const wkt = writer.write(p1);

        expect(wkt).to.equal("POINT(1.0 2.0)");

    });

    it("test void linestring", () => {
        const l = new LineString();
        const writer = new WktWriter();
        const wkt = writer.write(l);

        expect(wkt).to.equal("LINESTRING EMPTY");
    });


    it("test linestring", () => {
        const p1 = new Point([1.0, 2.0]);
        const p2 = new Point([2.0, 3.0]);
        const l = new LineString([p1, p2]);

        const writer = new WktWriter();
        const wkt = writer.write(l);

        expect(wkt).to.equal("LINESTRING(1.0 2.0,2.0 3.0)");

    });


    it("test linestring", () => {
        class Rond implements Geometry{
            getType(): string {
                return "";
            }
            translate(dx: number, dy: number): void {
                
            }

            isEmpty(): boolean {
                return true;
            }

            clone(): Geometry {
                return new Rond();
            }

            getEnvelope(): Envelope {
                return new Envelope();
            }

        }

        const r = new Rond();

        const writer = new WktWriter();

        expect(()=>{
            writer.write(r)
        }).to.throw(TypeError, "geometry type not supported");

    });





});

