// rubah setiap company user menjadi binar dan pada email setiap user berubah menjadi @binar.org, contoh = imam@fsw2.com menjadi imam@binar.org

// 1. melakukan import data json
const data = require('../data.json');
const sliceManual = require('./function');

// 2. membuat fungsi untuk menampung data dengan parameter array
const changeNameEmail = (arr) => {
  // 3. membuat array kosong untuk menampung data baru
  let result = [];

  // 4. melakukan perulangan satu persatu array
  for (let i = 0; i < arr.length; i++) {
    // 5. mengubah company user menjadi binar
    arr[i].company = 'binar';

    // 6. perulangan untuk mengecek satu per satu karakter email
    for (let j = 0; j < arr[i].email.length; j++) {
      // 7. variabel berisi nilai domain baru
      let domainBinar = '@binar.org';
      // 8. variabel yang berisi string kosng (secara default)
      let namaEmail = '';
      let emailBaru = '';

      // 9.jika karakter sama dengan @
      if (arr[i].email[j] === '@') {
        // 9. ubah nilai namaEmail hasil dari sliceManual yang dimulai dari index 0 sampai index sebelum tanda @
        namaEmail = sliceManual([arr[i].email], 0, j);
        // 10. ubah nilai emailBaru hasil dari penggabungan namaEmail dan domainBinar
        emailBaru = namaEmail + domainBinar;
        // 11. ubah nilai email user menjadi emailBaru
        arr[i].email = emailBaru;
        // 12. masukan data user ke variabel result
        result.push(arr[i]);

        // 13. hentikan perulangan
        break;
      }
    }
  }

  // 14. Kembalikan hasil data dengan nama yang telah ditukar
  return result;
};

// 15. mencetak hasil fungsi dengan parameter data
console.log(changeNameEmail(data));
