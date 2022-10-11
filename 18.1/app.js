let elems1 = document.body.getElementsByTagName("*");
console.log(elems1);
let elems2 = document.querySelectorAll( 'body *' );
console.log(elems2);
document.querySelectorAll('input')
    .forEach((input) => {
         console.log(input);
 });
document.getElementById('input')
    .forEach((input) => {
        console.log(input);
});