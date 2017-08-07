var expect = require('chai').expect;
var dateModel = require('../date/dateModel/dateModel');

describe('return date object', function () {

    it('should work on natural Date String', function () {
        expect(dateModel('December 15, 2015')).to.deep.equal({
            unix: 1450137600,
            natural: 'December 15, 2015'
        });

        expect(dateModel('August 6, 1974')).to.deep.equal({
            unix: 144979200,
            natural: 'August 6, 1974'
        });

        expect(dateModel('June 17, 1970')).to.deep.equal({
            unix: 14428800,
            natural: 'June 17, 1970'
        });

        expect(dateModel('January 17, 1970')).to.deep.equal({
            unix: 1382400,
            natural: 'January 17, 1970'
        });

    });

    it('should work on unix Date string', function () {
        expect(dateModel('1450137600')).to.deep.equal({
            unix: 1450137600,
            natural: 'December 15, 2015'
        });

        expect(dateModel('145013760')).to.deep.equal({
            unix: 145013760,
            natural: 'August 6, 1974'
        });

        expect(dateModel('14501376')).to.deep.equal({
            unix: 14501376,
            natural: 'June 17, 1970'
        });

        expect(dateModel('1450137')).to.deep.equal({
            unix: 1450137,
            natural: 'January 17, 1970'
        });
    });

    it('should not work on non-related Date string', function () {
        expect(dateModel('does not work')).to.deep.equal({
            unix: null,
            natural: null
        })
    });

})
