// tentukan user yang gender female ATAU user yang eyeColor nya brown dan ada berapa jumlah user nya

// 1. melakukan import data json
const data = require('../data.json');

// 2. membuat fungsi untuk menampung data dengan parameter array
const eyeColorAndGender = (arr) => {
  // 3. membuat array kosong untuk menampung data baru
  let result = [];

  // 4. melakukan perulangan satu persatu array
  for (let i = 0; i < arr.length; i++) {
    // 5. memeriksa apakah gender item sama dengan female atau warna mata item sama dengan coklat
    if (arr[i].gender === 'female' || arr[i].eyeColor === 'brown') {
      // 6. jika benar masukkan item tersebut ke variabel result
      result.push(arr[i]);
    }
  }

  // 7. mengembalikan 2 nilai result yang dibuat menjadi sebuah object
  return {
    resultbrownEyeFemale: result,
    sumResultbrownEyeFemale: result.length,
  };
};

// 8. membuat variabel baru untuk menjalankan fungsi dengan parameter data dan key return yang telah dibuat di dalam fungsi
let resultbrownEyeFemale = eyeColorAndGender(data).resultbrownEyeFemale;
let sumResultbrownEyeFemale = eyeColorAndGender(data).sumResultbrownEyeFemale;

// 9. mencetak ke console
console.log(
  resultbrownEyeFemale,
  '\n ======= \n',
  'Jumlah yang mempunyai mata biru:',
  sumResultbrownEyeFemale
);
