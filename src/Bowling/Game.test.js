import { Game } from "./Game";

/**
 * @type {Game}
 */
let game;

beforeEach(() => {
    game = new Game();
})

test('TwoThrowsNoMark', () => {
    game.add(5);
    game.add(4);
    expect(game.getScore()).toBe(9);
})

test('FourThrowsNoMark', () => {
    game.add(5);
    game.add(4);
    game.add(7);
    game.add(2);
    expect(game.getScore()).toBe(18);
    expect(game.getScoreForFrame(1)).toBe(9);
    expect(game.getScoreForFrame(2)).toBe(18);
})

test('SimpleSpare', () => {
    game.add(3);
    game.add(7);
    game.add(3);
    expect(game.getScoreForFrame(1)).toBe(13);
})

test('SimpleFrameAfterSpare', () => {
    game.add(3);
    game.add(7);
    game.add(3);
    game.add(2);
    expect(game.getScoreForFrame(1)).toBe(13);
    expect(game.getScoreForFrame(2)).toBe(18);
    expect(game.getScore()).toBe(18);
})

test('SimpleStrike', () => {
    game.add(10);
    game.add(3);
    game.add(6);
    expect(game.getScoreForFrame(1)).toBe(19);
    expect(game.getScore()).toBe(28);
})

test('PerfectGame', () => {
    for (let index = 0; index < 12; index++) {
        game.add(10);
    }
    expect(game.getScore()).toBe(300);
})

test('EndOfArray', () => {
    for (let index = 0; index < 9; index++) {
        game.add(0)
    }
    game.add(2);
    game.add(8); // 10th frame spare
    game.add(10); // Strike in last position of array.
    expect(game.getScore()).toBe(20);
})

test('sampleGame', () => {
    game.add(1);
    game.add(4);
    game.add(4);
    game.add(5);
    game.add(6);
    game.add(4);
    game.add(5);
    game.add(5);
    game.add(10);
    game.add(0);
    game.add(1);
    game.add(7);
    game.add(3);
    game.add(6);
    game.add(4);
    game.add(10);
    game.add(2);
    game.add(8);
    game.add(6);
    expect(game.getScore()).toBe(133);
})

test('heartBreak', () => {
    for (let i = 0; i < 11; i++) {
        game.add(10);
    }
    game.add(9);
    expect(game.getScore()).toBe(299);
})

test('tenthFrameSpare', () => {
    for (let i = 0; i < 9; i++) {
        game.add(10);
    }
    game.add(9);
    game.add(1);
    game.add(1);
    expect(game.getScore()).toBe(270);
})
