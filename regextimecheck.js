/* Regex Date Checker */
var regex = /^([0-1]\d):([0-5]\d)\s*(?:AM|PM)?$/i;
function testDateRegex(rx) {
    return regex.test(rx);
}
