// Diberikan sebuah angka n, jumlahkanlah masing - masing digit pada angka tersebut.

// Petunjuk
// Gunakan operator modulus untuk mengambil setiap digit dari angka tersebut

function solution(n) {
  // 1. variabel yang berisi angka dari argumen n diubah menjadi string
  let numStr = n.toString();
  // 3. variabel yang berguna untuk menyimpan nilai penjumlahan
  let sum = 0;

  // 3. untuk melakukan perulangan satu per satu angka
  for (let i = 0; i < numStr.length; i++) {
    // 4. mengubah value dari perulangan menjadi integer kembali
    let num = parseInt(numStr[i]);
    // 5. untuk menambahkan num pada setiap iterasinya ke sum
    sum += num;
  }

  // 6. mengembalikan variabel sum
  return sum;
}

console.log(solution(2022)); // expected output 6
console.log(solution(1001)); // expected output 2
