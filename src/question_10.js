// tentukan user yang berumur dibawah 30 dan registered sesudah tahun 2018 dan berapa jumlah nya

// 1. melakukan import data json
const data = require('../data.json');

// 2. membuat fungsi untuk menampung data dengan parameter array
const userUnder30AndRegisteredAfter2018 = (arr) => {
  // 3. membuat array kosong untuk menampung data baru
  let result = [];

  // 4. melakukan perulangan satu persatu array
  for (let i = 0; i < arr.length; i++) {
    // 5. jika umur user kurang dari 30 dan user melakukan register setelah tahun 2018
    if (arr[i].age < 30 && arr[i].registered > '2018') {
      // 6. jika benar masukkan item tersebut ke variabel result
      result.push(arr[i]);
    }
  }

  // 7. mengembalikan 2 nilai result yang dibuat menjadi sebuah object
  return {
    resultAgeAndYear: result,
    sumResultAgeAndYear: result.length,
  };
};

// 8. membuat variabel baru untuk menjalankan fungsi dengan parameter data dan key return yang telah dibuat di dalam fungsi
let resultAgeAndYear = userUnder30AndRegisteredAfter2018(data).resultAgeAndYear;
let sumResultAgeAndYear =
  userUnder30AndRegisteredAfter2018(data).sumResultAgeAndYear;

// 9. mencetak ke console
console.log(
  resultAgeAndYear,
  '\n ======= \n',
  'Jumlah perusahaan dengan huruf akhir E:',
  sumResultAgeAndYear
);
