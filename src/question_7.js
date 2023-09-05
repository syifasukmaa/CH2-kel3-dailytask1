// tentukan user yang tidak mempunyai teman bernama Irfi dan Adella dan ada berapa jumlah nya

// 1. melakukan import data json
const data = require('../data.json');

// 2. membuat fungsi untuk menampung data dengan parameter array
let searchFriend = (arr) => {
  // 3. membuat array kosong untuk menampung data baru
  const result = [];

  // 4. melakukan perulangan satu persatu array
  for (let i = 0; i < arr.length; i++) {
    // 5. variabel yang berisi object dari data arr
    const user = arr[i];
    // 6. variabel yang berisi data boolean false
    let hasIrfiAdellaFriends = false;

    // 7. melakukan nested loop untuk mengecek satu persatu array pada key friends
    for (let j = 0; j < user.friends.length; j++) {
      // 8. variabel yang berisi setiap object dari data user dengan key friends
      const friend = user.friends[j];
      // 9. jika nama teman sama dengan Irfi atau Adella
      if (friend.name === 'Irfi' || friend.name === 'Adella') {
        // 10. ubah variabel menjadi true
        hasIrfiAdellaFriends = true;
        // 11. berhentikan perulangan
        break;
      }
    }

    // 12. jika tidak mempunyai teman irfi dan adella
    if (!hasIrfiAdellaFriends) {
      // 13. jika benar masukkan item tersebut ke variabel result
      result.push(user);
    }
  }
  // 14. mengembalikan 2 nilai result yang dibuat menjadi sebuah object
  return {
    resultFriend: result,
    sumResultFriend: result.length,
  };
};

// 14. membuat variabel baru untuk menjalankan fungsi dengan parameter data dan key return yang telah dibuat di dalam fungsi
let resultFriend = searchFriend(data).resultFriend;
let sumResultFriend = searchFriend(data).sumResultFriend;

// 15. mencetak ke console
console.log(resultFriend, '\n ======= \n', 'Jumlah yang tidak mempunyai teman Irfi dan Adella', sumResultFriend);
