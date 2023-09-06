// setiap nama dari user tukar nama belakang dan depan nya, contoh = "imam taufiq" menjadi "taufiq imam"

// 1. melakukan import data json
const sliceManual = require('./function.js');
const data = require('../data.json');

// 2. function untuk tukar nama
const changePositionName = (arr) => {
  // 3. membuat array kosong untuk menampung data baru
  const result = [];

  // 4. lakukan looping untuk cek data satu persatu
  for (let i = 0; i < arr.length; i++) {
    // 5. variabel yang berisi panjang nama user
    let nameLen = arr[i].name.length;

    // 6. melakukan perulangan satu per satu karakter nama
    for (let j = 0; j < nameLen; j++) {
      // 7. membuat variabel berisi string kosong (secara default)
      let namaDepan = '';
      let namaBelakang = '';

      // 8.jika karakter sama dengan spasi
      if (arr[i].name[j] === ' ') {
        // 9. ubah nilai namaDepan hasil dari sliceManual yang dimulai dari index 0 sampai index sebelum spasi
        namaDepan = sliceManual([arr[i].name], 0, j);

        // 10. ubah nilai namaBelakang hasi dari sliceManual yang dimulai setelah spasi sampai index akhir nama
        namaBelakang = sliceManual([arr[i].name], j + 1, nameLen);

        // 11. tuker posisi namaBelakang jadi ada didepan dan namaDepan ada di belakang
        let namaTukar = `${namaBelakang} ${namaDepan}`;
        // 12. ubah nilai nama user menjadi namaTukar
        arr[i].name = namaTukar;

        // 13. masukan data user ke variabel result
        result.push(arr[i]);

        // 14. hentikan perulangan
        break;
      }
    }
  }
  // 15. Kembalikan hasil data dengan nama yang telah ditukar
  return result;
};

// 16. mencetak hasil fungsi dengan parameter data
console.log(changePositionName(data));
