// tentukan user yang mempunya friend bernama Imam dan ada berapa jumlah user nya

// 1. melakukan import data json
const data = require('../data.json');

// 2. membuat fungsi untuk menampung data dengan parameter array
let searchFriend = (arr) => {
  // 3. membuat array kosong untuk menampung data baru
  let result = [];

  // 4. melakukan perulangan satu persatu array
  for (const item of arr) {
    // 5. membuat untuk mencari item dengan key friends
    let friends = item.friends;
    // 6. melakukan perulangan kembali satu persatu array pada key friends
    for (const friend of friends) {
      // 7. jika pada friend dengan key name terdapat Imam
      if (friend.name === 'Imam') {
        // 8. jika benar masukkan item tersebut ke variabel result
        result.push(item);
      }
    }
  }

  // 9. mengembalikan 2 nilai result yang dibuat menjadi sebuah object
  return {
    resultFriend: result,
    sumResultFriend: result.length,
  };
};

// 10. membuat variabel baru untuk menjalankan fungsi dengan parameter data dan key return yang telah dibuat di dalam fungsi
let resultFriend = searchFriend(data).resultFriend;
let sumResultFriend = searchFriend(data).sumResultFriend;

// 11. mencetak ke console
console.log(
  resultFriend,
  '\n ======= \n',
  'Jumlah yang mempunyai teman imam:',
  sumResultFriend
);
