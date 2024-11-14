import Coordinate from "./Coordinate";

export default class Envelope{
    private bottomLeft?: Coordinate;
    private topRight?: Coordinate;

    constructor(bottomLeft?: Coordinate, topRight?: Coordinate) {
        this.bottomLeft = bottomLeft;
        this.topRight = topRight;
      }

    isEmpty(): boolean {
      return Number.isNaN(this.bottomLeft[0]) && Number.isNaN(this.topRight[0]);
    }

    getXmin(): number{
      return this.bottomLeft[0];
    }

    getYmin(): number{
      return this.bottomLeft[1];
    }

    getXmax(): number{
      return this.topRight[0];
    }

    getYmax(): number{
      return this.topRight[1];
    }

    toString(): String{
      return "bottom left : " + this.getXmin() + " " + this.getYmin() + " top right : " + this.getXmax() + " " + this.getYmax();
    }


}