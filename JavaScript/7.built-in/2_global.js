/**
 * 최상위 객체인 Window 객체가 가지고 있는 메소드
 * - paseInt(), alert(), confirm() ...
 */

let a = "123.456";

console.log(parseInt(a));
console.log(parseFloat(a));

// encodeURI, decodeURI Global object
const uri = "https://mozilla.org/?x=홍길동";
const encoded = encodeURI(uri);
console.log(encoded);
// Expected output: "https://mozilla.org/?x=%ED%99%8D%EA%B8%B8%EB%8F%99"

try {
  console.log(decodeURI(encoded));
  // Expected output: "https://mozilla.org/?x=홍길동"
} catch (e) {
  // Catches a malformed URI
  console.error(e);
}