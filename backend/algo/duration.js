const dateFns = require('date-fns');

function getDaysAgo(before) {
    let today = new Date();
    let daysAgo = dateFns.differenceInDays(today, before);
    return daysAgo;
}

function getFormated(before) {
    let today = new Date();
    let formated = dateFns.formatDistance(today, before);
    return formated;
}

module.exports = { getDaysAgo, getFormated };