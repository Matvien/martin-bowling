export class Scorer {
    constructor() {
        this._throws = [];
        this._currentThrow = 0;
        this._ball = 0;
    }

    addThrow(pins) {
        this._throws[this._currentThrow] = pins;
        this._currentThrow++;
    }

    /**
     * @param {number} frame 
     */
    getScoreForFrame(frame) {
        let res = 0;
        let currFrame = 0;
        this._ball = 0;

        while (currFrame < frame) {
            if (this._strike()) { 
                res += 10 + this._nextTwoBallsForStrike();
                this._ball++;
            }
            else if (this._spare()) {
                res += 10 + this._nextBallForSpare();
                this._ball += 2;
            }
            else {
                res += this._twoBallsInFrame();
                this._ball += 2;
            }
                
            currFrame++;
        }

        return res;
    }

    _nextTwoBallsForStrike() {
        return this._throws[this._ball + 1] + this._throws[this._ball + 2];
    }

    _nextBallForSpare() {
        return this._throws[this._ball + 2];
    }

    _strike() {
        return this._throws[this._ball] === 10;
    }

    _twoBallsInFrame() {
        return this._throws[this._ball] + this._throws[this._ball + 1];
    }

    _spare() {
        return this._throws[this._ball] + this._throws[this._ball + 1] === 10;
    }
}
