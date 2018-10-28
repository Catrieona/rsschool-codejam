const assert = require('assert');
const sumOfOther = require('../sumOfOther');
const make = require('../make');

describe('Function tests', () => {
    describe('sumOfOther', () => {

        it('test 1', () => {
            assert.deepStrictEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
        });

        it('test 2', () => {
            assert.deepStrictEqual(sumOfOther([10, 30, 90, 100, 250, 600, 1000]), [2070, 2050, 1990, 1980, 1830, 1480, 1080]);
        });

        it('test 3', () => {
            assert.deepStrictEqual(sumOfOther([2000, 3000, 4000, 0, 250]), [7250, 6250, 5250, 9250, 9000]);
        });

    });


    describe('make', () => {
        function sum(a, b) {
          return a + b;
        }
        it('test 1', () => {
            assert.strictEqual(make(15)(34, 21, 666)(41)(sum), 777);
          });

        it('test 2', () => {
        assert.strictEqual(make(30)(10)(40)(10)(30)(sum), 120);
        });

        it('test 3', () => {
            assert.strictEqual(make(30, 20, 15, 55)(22)(30)(sum), 172);
        });

    });
   
});