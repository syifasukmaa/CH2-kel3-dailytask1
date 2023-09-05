// rubah user yang gender female address nya menjadi laut, dan user yang gender male address nya gunung

// 1. melakukan import data json
const data = require('../data.json');

// 2. membuat fungsi untuk menampung data dengan parameter array
const changeAddress = (arr) => {
  // 3. Buat salinan data parameter agar tidak mengubah data asli
  let result = [...arr];

  // 4. melakukan perulangan satu persatu array

  for (let i = 0; i < result.length; i++) {
    // 5. untuk menampung nilai gender pada setiap user
    let gender = result[i].gender;

    // 6. jika gendernya perempuan
    if (gender === 'female') {
      // 7. ubah alamat user jadi laut
      result[i].address = 'laut';

      // 8. jika gendernya laki laki
    } else if (gender === 'male') {
      // 9. ubah alamat user jadi laut
      result[i].address = 'gunung';
    }
  }

  // 10. kembalikan nilai result
  return result;
};

// 11. cetak fungsi dengan parameter data
console.log(changeAddress(data));
