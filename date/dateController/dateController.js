var dateModel = require('../dateModel/dateModel');

module.exports = {
    getDate: function (req, res, next) {

        var dateObj = dateModel(req.params.date);
        return res.status(200).send(dateObj);
    }
}
