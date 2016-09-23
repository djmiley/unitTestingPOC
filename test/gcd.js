// For running in browser;
// var loadedChai = chai;
// For npm test
var loadedChai = require("chai");
// var gcd = require("../js/gcd").gcd;

var expect = loadedChai.expect;
var should = loadedChai.should;

describe('Optimised Counters Solution', function() {

    describe('gcd(x, y)', function() {

        it('should return null for any string parameter', function() {
            expect(gcd("string", "string")).to.be.null;
            expect(gcd(1, "string")).to.be.null;
            expect(gcd("string", 1)).to.be.null;
        });

        it('should return null for any boolean parameter', function() {
            expect(gcd(true, true)).to.be.null;
            expect(gcd(1, false)).to.be.null;
            expect(gcd(false, 1)).to.be.null;
        });

        it('should return null for any null parameter', function() {
            expect(gcd(null, null)).to.be.null;
            expect(gcd(1, null)).to.be.null;
            expect(gcd(null, 1)).to.be.null;
        });

        it('should return null for any undefined parameter', function() {
            expect(gcd(undefined, undefined)).to.be.null;
            expect(gcd(1, undefined)).to.be.null;
            expect(gcd(undefined, 1)).to.be.null;
        });

        it('should return 0 if there is one 0 parameter and one positive integer parameter', function() {
            expect(gcd(0, 1)).to.equal(0);
            expect(gcd(0, 1345)).to.equal(0);
        });

        it('should return the numeric value for one natural integer parameter', function() {
            expect(gcd(0)).to.equal(0);
            expect(gcd(1)).to.equal(1);
            expect(gcd(345)).to.equal(345);
        });

        it('should return an error message for non-integer number parameters', function() {
            expect(gcd(0.5, 0.5)).to.equal("Error. Non-integer parameters");
            expect(gcd(0.5, 5)).to.equal("Error. Non-integer parameters");
            expect(gcd(5, 0.5)).to.equal("Error. Non-integer parameters");
        });;

        it('should return an error message for negative integer parameters', function() {
            expect(gcd(-5, -5)).to.equal("Error. Negative parameters");
            expect(gcd(-5, 5)).to.equal("Error. Negative parameters");
            expect(gcd(5, -5)).to.equal("Error. Negative parameters");
        });

        it('should return the correct value for the gcd of two positive integers', function() {
            expect(gcd(13, 169)).to.equal(13);
            expect(gcd(1, 7)).to.equal(1);
            expect(gcd(6, 15)).to.equal(3);
        });

    });

});