function returnNaturalUTCDate(UTCYear, UTCMonth, UTCDate) {
    var month = getMonth(UTCMonth);
    return `${month} ${UTCDate}, ${UTCYear}`;

}

function getMonth(UTCMonth) {
    switch (UTCMonth) {
        case 0:
            return 'January';

        case 1:
            return 'February';

        case 2:
            return 'March';

        case 3:
            return 'April';

        case 4:
            return 'May';

        case 5:
            return 'June';

        case 6:
            return 'July';

        case 7:
            return 'August';

        case 8:
            return 'September';

        case 9:
            return 'October';

        case 10:
            return 'November';

        case 11:
            return 'December';

        default:
            throw new Error('Month is not in between 0 and 11');
    }
}

function getUTCInfo(date) {
    return {
        UTCYear: date.getUTCFullYear(),
        UTCMonth: date.getUTCMonth(),
        UTCDate: date.getUTCDate()
    };
}

module.exports = function (dateParams) {

    var date = new Date(dateParams);

    //for numbers in params string
    if(Number(dateParams)) {
        date = new Date(Number(dateParams) * 1000);

        var utcInfo = getUTCInfo(date);
        return {
            unix: date.getTime() / 1000,
            natural: returnNaturalUTCDate(utcInfo.UTCYear, utcInfo.UTCMonth, utcInfo.UTCDate)
        };

    }


    //for natural date strings
    var utcInfo = getUTCInfo(date);

    var UTC_Date = Date.UTC(utcInfo.UTCYear, utcInfo.UTCMonth, utcInfo.UTCDate);

    if(Number.isNaN(UTC_Date)) {
        return {
            unix: null,
            natural: null
        }
    } else {
        return {
            unix: UTC_Date / 1000,
            natural: returnNaturalUTCDate(utcInfo.UTCYear, utcInfo.UTCMonth, utcInfo.UTCDate)
        }
    }

};
