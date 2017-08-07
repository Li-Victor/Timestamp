var expect = require('chai').expect;
var dateModel = require('../date/dateModel/dateModel');

describe('test date object', function () {
    it('should return test date object', function () {
        expect(dateModel('s')).to.deep.equal({
            unix: 'unix',
            natural: 'natural'
        });
    })
})
