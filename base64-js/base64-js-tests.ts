import * as base64js from "base64-js";

// $ExpectType number
base64js.byteLength("");

// $ExpectType Uint8Array
base64js.toByteArray("");

// $ExpectType string
base64js.fromByteArray(new Uint8Array(0));
