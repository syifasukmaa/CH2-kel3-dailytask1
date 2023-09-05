// tentukan user yang eyeColor nya blue dan ada berapa jumlah nya

// 1. melakukan import data json
const data = require('../data.json');

// 2. membuat fungsi untuk menampung data dengan parameter array
const checkEyeColor = (arr) => {
  // 3. membuat array kosong untuk menampung data baru
  let result = [];

  // 4. melakukan perulangan satu persatu array
  for (let i = 0; i < arr.length; i++) {
    // 5. memeriksa apakah warna mata item sama dengan biru
    if (arr[i].eyeColor === 'blue') {
      // 6. jika benar masukkan item tersebut ke variabel result
      result.push(arr[i]);
    }
  }

  // 7. mengembalikan 2 nilai result yang dibuat menjadi sebuah object
  return {
    resultBlueEye: result,
    sumResultBlueEye: result.length,
  };
};

// 8. membuat variabel baru untuk menjalankan fungsi dengan parameter data dan key return yang telah dibuat di dalam fungsi
let resultBlueEye = checkEyeColor(data).resultBlueEye;
let sumResultBlueEye = checkEyeColor(data).sumResultBlueEye;

// 9. mencetak ke console
console.log(
  resultBlueEye,
  '\n ======= \n',
  'Jumlah yang mempunyai mata biru:',
  sumResultBlueEye
);
