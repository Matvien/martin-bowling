import { Scorer } from "./Scorer";

export class Game {
    constructor() {
        this._isFirstThrow = true;
        this._currentFrame = 0;
        this._scorer = new Scorer();
    }

    getScore() {
        return this.getScoreForFrame(this._currentFrame);
    }

    /**
     * @param {number} pins 
     */
    add(pins) {
        this._scorer.addThrow(pins);
        this._adjustCurrentFrame(pins);
    }

    /**
     * @param {number} pins 
     */
    _adjustCurrentFrame(pins) {
        if (this._lastBallInFrame(pins)) {
            this._isFirstThrow = true;
            this._advanceFrame();
        }
        else {
            this._isFirstThrow = false;
        }
    }

    _lastBallInFrame(pins) {
        return this._strike(pins) || !this._isFirstThrow;
    }

    _strike(pins) {
        return this._isFirstThrow && pins === 10;
    }

    _advanceFrame() {
        this._currentFrame++;

        if (this._currentFrame > 10) {
            this._currentFrame = 10;
        }
    }

    /**
     * @param {number} frame 
     */
    getScoreForFrame(frame) {
        return this._scorer.getScoreForFrame(frame);
    }
}
