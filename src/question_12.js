// tentukan user yang mempunyai nama kurang dari 10 karakter dan umur nya diatas 30 atau gender nya Male dan eyeColor nya brown

// 1. melakukan import data json
const data = require('../data.json');

// 2. membuat fungsi untuk menampung data dengan parameter array
const userAge30GenderMaleAndEyeBrown = (arr) => {
  // 3. membuat array kosong untuk menampung data baru
  let result = [];

  // 4. melakukan perulangan satu persatu array
  for (let i = 0; i < arr.length; i++) {
    // 5. variabel berisi nama, umur, gender dan eye color dari user
    let name = arr[i].name;
    let age = arr[i].age;
    let gender = arr[i].gender;
    let eye = arr[i].eyeColor;

    // 6. untuk menampung nama tanpa spacing
    let nameWOSpace = '';

    // 7. melakukan perulangan untuk mengecek satu persatu karakter name
    for (let j = 0; j < name.length; j++) {
      // 8. jika bertemu karakter spasi
      if (name[j] === ' ') {
        // 9. lewatkan spasi
        continue;
      }

      // 10. selain itu masukan karakter nama ke variabel nameWOSpace
      nameWOSpace += name[j];
    }

    // 11. jika panjang nama user kurang dari 10 dan umurnya kurang dari 30 atau gender user sama dengan male dan eyecolornya berwarna coklat
    if (
      (nameWOSpace.length < 10 && age > 30) ||
      (gender === 'male' && eye === 'brown')
    ) {
      // 12. jika benar masukkan item tersebut ke variabel result
      result.push(arr[i]);
    }
  }

  // 13. mengembalikan 2 nilai result yang dibuat menjadi sebuah object
  return {
    result: result,
    sumResult: result.length,
  };
};

// 14. mencetak ke console result dan sumResult
console.log(userAge30GenderMaleAndEyeBrown(data).result);
console.log(userAge30GenderMaleAndEyeBrown(data).sumResult);
