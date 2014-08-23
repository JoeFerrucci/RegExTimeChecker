/* Regex Date Checker */
var regex = /^([0-1]\d):([0-5]\d)\s*(?:AM|PM)?$/i;
function testDateRegex(rx) {
    return regex.test(rx);
}


/* Example 1 */
var isThisTimeValid = '06:30PM';
if ( testDateRegex(isThisTimeValid) )
    alert('The time ' + isThisTimeValid + ' is valid!');
