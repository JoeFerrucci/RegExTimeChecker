/* Regex Date Checker */
var regex = /^([0-1]\d):([0-5]\d)\s*(?:AM|PM)?$/i;

/* Example 1 */
var isThisTimeValid = '06:30PM';
if ( regex.test(isThisTimeValid) )
    alert('The time ' + isThisTimeValid + ' is valid!');
