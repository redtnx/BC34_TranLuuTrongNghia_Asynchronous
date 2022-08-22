/* 
Diện tích hình thang: a + b * h /2
*/

// Callback function
function theFirst(callback) {
  setTimeout(function () {
    console.log("the First");
    callback();
  }, 5000);
}

function theSecond() {
  console.log("the Second");
}

theFirst(theSecond);
