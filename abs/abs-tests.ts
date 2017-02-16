import Abs = require('abs');

// $ExpectType stringsss
Abs('/foo');

// $ExpectError
1 + 1

// $ExpectError
Abs(1);
