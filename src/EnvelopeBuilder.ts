import Coordinate from "./Coordinate";
import Envelope from "./Envelope";

export default class EnvelopeBuilder{

    private xMin?: number;
    private xMax?: number;
    private yMin?: number;
    private yMax?: number;

    constructor(){
        this.xMin = Number.NaN;
        this.xMax = Number.NaN;
        this.yMin = Number.NaN;
        this.yMax = Number.NaN;
    }

    insert(coordinate: Coordinate){
        const x = coordinate[0];
        const y = coordinate[1];
        this.xMin = Number.isNaN(this.xMin) ? x : (x < this.xMin ? x : this.xMin);
        this.xMax = Number.isNaN(this.xMax) ? x : (x > this.xMax ? x : this.xMax);
        this.yMin = Number.isNaN(this.yMin) ? y : (y < this.yMin ? y : this.yMin);
        this.yMax = Number.isNaN(this.yMax) ? y : (y > this.yMax ? y : this.yMax);
    }

    build(): Envelope{
        return new Envelope([this.xMin, this.yMin], [this.xMax, this.yMax]);
    }
}