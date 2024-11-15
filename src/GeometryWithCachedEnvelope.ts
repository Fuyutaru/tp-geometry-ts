import Envelope from "./Envelope";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";

export default class GeometryWithCachedEnvelope implements Geometry{

    private original: Geometry;
    private cachedEnvelope: Envelope;

    getType(): string {
        return this.original.getType();
    }
    isEmpty(): boolean {
        return this.original.isEmpty();
    }
    translate(dx: number, dy: number): void {
        this.cachedEnvelope = null;
        return this.original.translate(dx, dy);
    }
    clone(): Geometry {
        return this.original.clone();
    }

    accept(visitor: GeometryVisitor) {
        this.original.accept(visitor);
    }
    asText(): String {
        return this.original.asText();
    }

    getEnvelope(): Envelope {
        if (this.cachedEnvelope){
            return this.cachedEnvelope;
        }
        else{
            this.cachedEnvelope = this.original.getEnvelope();
            return this.cachedEnvelope;
        }

    }

    constructor(original: Geometry){
        this.original = original;
    }
}