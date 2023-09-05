// tentukan user yang company huruf belakang nya berawal E dan ada berapa jumlah user nya

// 1. melakukan import data json
const data = require('../data.json');

// 2. membuat fungsi untuk menampung data dengan parameter array
const checkLastNameCompany = (arr) => {
  // 3. membuat array kosong untuk menampung data baru
  let result = [];

  // 4. melakukan perulangan satu persatu array
  for (const item of arr) {
    // 5. variabel yang berisi item dengan key company
    let company = item.company;
    // 6. variabel yang berisi item dengan key company huruf terakhir
    let lastLetter = company[company.length - 1];

    // 7. jika huruf terakhir sama dengan huruf E
    if (lastLetter === 'E') {
      // 8. jika benar masukkan item tersebut ke variabel result
      result.push(item);
    }
  }

  // 9. mengembalikan 2 nilai result yang dibuat menjadi sebuah object
  return {
    resultNameCompany: result,
    sumResultNameCompany: result.length,
  };
};

// 10. membuat variabel baru untuk menjalankan fungsi dengan parameter data dan key return yang telah dibuat di dalam fungsi
let resultNameCompany = checkLastNameCompany(data).resultNameCompany;
let sumResultNameCompany = checkLastNameCompany(data).sumResultNameCompany;

// 11. mencetak ke console
console.log(resultNameCompany, '\n ======= \n', 'Jumlah perusahaan dengan huruf akhir E:', sumResultNameCompany);
