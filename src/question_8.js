// tentukan user yang company huruf depan nya berawal L dan ada berapa jumlah user nya

// 1. melakukan import data json
const data = require('../data.json');

// 2. membuat fungsi untuk menampung data dengan parameter array
const checkFirstNameCompany = (arr) => {
  // 3. membuat array kosong untuk menampung data baru
  let result = [];

  // 4. melakukan perulangan satu persatu array
  for (const item of arr) {
    // 5. variabel yang berisi item key company huruf pertama
    let firstLetter = item.company[0];
    
    // 6. jika huruf pertama sama dengan huruf T
    if (firstLetter === 'L') {
      // 7. jika benar masukkan item tersebut ke variabel result
      result.push(item);
    }
  }

  // 8. mengembalikan 2 nilai result yang dibuat menjadi sebuah object
  return {
    resultNameCompany: result,
    sumResultNameCompany: result.length,
  };
};

// 9. membuat variabel baru untuk menjalankan fungsi dengan parameter data dan key return yang telah dibuat di dalam fungsi
let resultNameCompany = checkFirstNameCompany(data).resultNameCompany;
let sumResultNameCompany = checkFirstNameCompany(data).sumResultNameCompany;

// 10. mencetak ke console
console.log(resultNameCompany, '\n ======= \n', 'Jumlah perusahaan dengan huruf depan L:', sumResultNameCompany);
