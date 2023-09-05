// tentukan user yang mempunyai teman bernama Grace dan favorit fruit nya apple atau banana

// 1. melakukan import data json
const data = require('../data.json');

// 2. membuat fungsi untuk menampung data dengan parameter array
const checkFrientAndFruit = (arr) => {
  // 3. membuat array kosong untuk menampung data baru
  let result = [];

  // 4. melakukan perulangan satu persatu array
  for (const user of arr) {
    // 5. variabel yang berisi user dengan key friends
    let friends = user.friends;

    // 6. melakukan perulang kembali cek satu persatu array friends
    for (const friend of friends) {
      // 7. memeriksa apakah terdapat teman Grace dan favorit buahnya apple atau banana
      if (friend.name === 'Grace' && (user.favoriteFruit === 'apple' || user.favoriteFruit === 'banana')) {
        // 8. jika benar masukkan item tersebut ke variabel result
        result.push(user);
      }
    }
  }

  // 9. mengembalikan 2 nilai result yang dibuat menjadi sebuah object
  return {
    resultAgeAndFruit: result,
    sumResultAgeAndFruit: result.length,
  };
};

// 10. membuat variabel baru untuk menjalankan fungsi dengan parameter data dan key return yang telah dibuat di dalam fungsi
let resultAgeAndFruit = checkFrientAndFruit(data).resultAgeAndFruit;
let sumResultAgeAndFruit = checkFrientAndFruit(data).sumResultAgeAndFruit;

// 11. mencetak ke console
console.log(resultAgeAndFruit, '\n ======= \n', 'Jumlah yang mempunyai teman grace dan menyukai apple atau banana:', sumResultAgeAndFruit);
