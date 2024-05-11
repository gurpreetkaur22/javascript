const accountId = 144
let accountEmail = "gurpreet@gmail.com"
var accountPassword = "123"
accountName = "gurpreet"
let accountCity;

// accountId = 111
accountEmail = "gopi@gmail.com"
accountPassword = "987"
accountName = "Gopi"

/*
use only let
prefer not to use var
because of block scope problem
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountName, accountCity]);