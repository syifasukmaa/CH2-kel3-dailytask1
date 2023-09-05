// tentukan user yang gender female dan ada berapa jumlah user nya

// 1. melakukan import data json
const data = require('../data.json');

// 2. membuat fungsi untuk menampung data dengan parameter array
let userGenderFemale = (arr) => {
  // 3. membuat array kosong untuk menampung data baru
  let result = [];

  // 4. melakukan perulangan satu persatu array
  for (let i = 0; i < arr.length; i++) {
    // 5. mengecek gender item saat itu sama dengan perempuan
    if (arr[i].gender === 'female') {
      // 6. jika iya masukkan item tersebut ke variabel result
      result.push(arr[i]);

    }
  }

  // 7. mengembalikan 2 nilai result yang dibuat menjadi sebuah object
  return {
    resultFemale: result,
    sumResultFemale: result.length,
  };
};

// 8. membuat variabel baru untuk menjalankan fungsi dengan parameter data dan key return yang telah dibuat di dalam fungsi
let resultFemale = userGenderFemale(data).resultFemale;
let sumResultFemale = userGenderFemale(data).sumResultFemale;

// 9. mencetak ke console
console.log(
  resultFemale,
  '\n ======= \n',
  'Jumlah gender female:',
  sumResultFemale
);
