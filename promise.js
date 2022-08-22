function cong(a, b) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(a + b);
    }, 1000);
  });
}

function nhan(a, b) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(a * b);
    }, 1000);
  });
}

function chia(a, b) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(a / b);
    }, 1000);
  });
}

function tinhDTHT(a, b, h) {
  return cong(a, b)
    .then(function (result) {
      return nhan(result, h);
    })
    .then(function (result) {
      return chia(result, 2);
    });
}

tinhDTHT(2, 3, 2).then(function (result) {
  console.log("DTHT là: " + result);
});
