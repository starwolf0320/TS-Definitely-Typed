import Abs = require('abs');

// $ExpectType strings
Abs('/foo');

// $ExpectError
1 + 1;

// $ExpectError
Abs(1);
