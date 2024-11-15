import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import LogGeometryVisitor from "../src/LogGeometryVisitor";

describe("test WktVisitor", () => {
    it("test point", () => {
        let result = "";
        const visitor = new LogGeometryVisitor((message) => {
            result = message;
        });
        const geometry = new Point();
        geometry.accept(visitor);

        expect(result).to.equal("Je suis un point vide.");

    });


    it("test point", () => {
        let result = "";
        const visitor = new LogGeometryVisitor((message) => {
            result = message;
        });
        const geometry = new Point([3.0,4.0]);
        geometry.accept(visitor);

        expect(result).to.equal("Je suis un point avec x=3.0 et y=4.0.");

    });

    
    it("test linestring vide", () => {
        let result = "";
        const visitor = new LogGeometryVisitor((message) => {
            result = message;
        });
        const geometry = new LineString();
        geometry.accept(visitor);

        expect(result).to.equal("Je suis une polyligne vide.");

    });

    it("test linestring avec 1 point", () => {
        let result = "";
        const visitor = new LogGeometryVisitor((message) => {
            result = message;
        });
        const p1 = new Point([1.0, 2.0]);
        const geometry = new LineString([p1]);
        geometry.accept(visitor);

        expect(result).to.equal("Je suis une polyligne définie par 1 point.");

    });

    it("test linestring avec 2 points", () => {
        let result = "";
        const visitor = new LogGeometryVisitor((message) => {
            result = message;
        });
        const p1 = new Point([1.0, 2.0]);
        const p2 = new Point([2.0, 3.0]);
        const geometry = new LineString([p1, p2]);
        geometry.accept(visitor);

        expect(result).to.equal("Je suis une polyligne définie par 2 points.");

    });




});
