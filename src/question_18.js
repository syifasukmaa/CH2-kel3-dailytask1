// Diberikan sebuah string alamat IP yang valid. Untuk setiap tanda . pada alamat IP gantilah menjadi tanda ()

// Petunjuk
// Loop string tersebut dan replace simbol yang di maksud.

function solution(str) {
  // 1. variabel untuk menampung data baru
  let result = '';
  // 2. melakukan perulangan untuk cek satu per satu string
  for (let i = 0; i < str.length; i++) {
    // 3. jika string sama dengan titik
    if (str[i] === '.') {
      // 4. masukkan () ke result
      result += '()';

      // 5. selain itu
    } else {
      // 6. masukkan string ke result
      result += str[i];
    }
  }

  // 7. kembalikan result sebagai hasil dari perulangan
  return result;
}

console.log(solution('1.1.1.1')); // expected output 1()1()1()1()
console.log(solution('192.168.1.1')); // expected output 192()268()1()1()
