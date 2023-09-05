// tentukan user yang registered pada tahun 2014 sampai dengan 2018 dan ada berapa jumlah user nya

// 1. melakukan import data json
const data = require('../data.json');

// 2. membuat fungsi untuk menampung data dengan parameter array
let checkUserRegistered = (arr) => {
  // 3. membuat array kosong untuk menampung data baru
  let result = [];

  // 4. melakukan perulangan satu persatu array
  for (const item of arr) {
    // 5. membuat untuk mencari item dengan key registered
    let dateTime = item.registered;

    // 6. memeriksa apakah tahun item lebih besar atau sama dengan dengan 2014 dan tahun lebih kecil atau sama dengan 2018
    if (dateTime > '2013' && dateTime <= '2019') {
      // 7. jika benar masukkan item tersebut ke variabel result
      result.push(item);
    }
  }

  // 8. mengembalikan 2 nilai result yang dibuat menjadi sebuah object
  return {
    resultYear: result,
    sumResultYear: result.length,
  };
};

// 9. membuat variabel baru untuk menjalankan fungsi dengan parameter data dan key return yang telah dibuat di dalam fungsi
let resultYear = checkUserRegistered(data).resultYear;
let sumResultYear = checkUserRegistered(data).sumResultYear;

// 10. mencetak ke console
console.log(
  resultYear,
  '\n ======= \n',
  'Jumlah register 2014 - 2018:',
  sumResultYear
);
