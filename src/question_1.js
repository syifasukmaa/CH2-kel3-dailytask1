// tentukan user yang mempunyai buah favorit dia nya banana

// 1. melakukan import data json
const data = require('../data.json');

// 2. membuat fungsi untuk menampung data dengan parameter array
let userLikeBanana = (arr) => {
  // 3. membuat array kosong untuk menampung data baru
  let result = [];

  // 4. melakukan perulangan satu persatu array
  for (let i = 0; i < arr.length; i++) {
    // 5. mengecek buah favorit item saat itu banana
    if (arr[i].favoriteFruit === 'banana') {
      // 6. jika iya masukkan item tersebut ke variabel result
      result.push(arr[i]);
    }
  }
  // 7. mengembalikan variabel result
  return result;
};

// 8. mencetak ke console fungsi userLikeBanana dengan argumen data
console.log(userLikeBanana(data));
