// Yudi ingin menarik uang sebanyak X rupiah dari ATM. Mesin ATM hanya akan menerima transaksi jika X kelipatan 5 dan saldo rekening Yudi memiliki cukup uang untuk melakukan transaksi penarikan (termasuk biaya bank). Untuk setiap penarikan yang berhasil, bank mengenakan biaya 0,5 rupiah.
// Diberikan X adalah uang yang ingin yudi tarik dan Y adalah jumlah uang dalam rekening Yudi. Ayo hitung saldo akun Yudi setelah melakukan transaksi!

// Petunjuk
// Cukup lakukan operasi aritmatika biasa.

function solution(x, y) {
  // 1. biaya admin setiap penarikan bank
  let biayaAdmin = 0.5;

  // 2. jika uang yudi sama dengan kelipatan 5 dan jumlah rekening lebih besar dari uang yang ingin ditarik ditambah biaya bank
  if (x % 5 === 0 && y > x + biayaAdmin) {
    // 3. menghitung sisa saldo
    let sisaSaldo = y - x - biayaAdmin;
    // 4. jika sudah kembalikan sisa saldo
    return sisaSaldo;
  }
  // 5. jika tidak kelipatan 5, kembalikan jumlah uang rekening yudi
  return y;
}

console.log(solution(30, 100)); // expected output 89.5
console.log(solution(42, 100)); // expected output 100
