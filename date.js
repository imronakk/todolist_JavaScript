module.exports = getDate;

function getDate() {
    let today = new Date();
    var options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };
    let dwo = today.toLocaleDateString("en-US", options);
    return dwo;
}