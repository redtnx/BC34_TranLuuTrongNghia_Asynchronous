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

async function tinhDTHT(a, b, h) {
  var ab = await cong(a, b);
  var abh = await nhan(ab, h);
  var abh2 = await chia(abh, 2);

  console.log("DTHT là: " + abh2);
}

tinhDTHT(2, 3, 2);
