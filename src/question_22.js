// Buat sebuah function yang bisa melakukan fungsi dari fibonacci number di dalam kode Javascript.
// Bisa diskusi dengan teman kelompokmu ya!

// REKURSIF
// 1. membuat fungsi dengan parameter number
// const fibonacci = (number) => {
//   // 2. jika number kurang dari atau sama dengan 2
//   if (number <= 2) {
//     // 3. kembalikan number
//     return number;
//   } else {
//     // 4. jika lain maka kembalikan rekursif fibonacci dengan argumen number dikurang 1 + rekursi fibonacci dengan argumen number dikurang 2
//     return fibonacci(number - 1) + fibonacci(number - 2);
//   }
// };

// ================

// PERULANGAN
// 1. membuat fungsi dengan parameter number
const fibonacci = (number) => {
  // 2. variabel yang berisi angka pertama
  let n1 = 1;

  // 3. variabel yang berisi angka kedua
  let n2 = 2;

  // 4. variabel untuk menyimpan penjumlahan angka pertama dan kedua
  let next = 0;

  // 5. melakukan perulangan sesuai jumlah parameter
  for (let i = 1; i < number; i++) {
    //console.log(n2)

    // 6. next untuk menyimpan angka pertama dan kedua
    next = n1 + n2;
    // 7. n1 berisi angka kedua
    n1 = n2;
    // 8. n2 berisi angka hasil next
    n2 = next;
  }

  // 9. mengembalikan hasil perulangan
  return n1;
};

// mencetak fungsi fibonacci dengan argumen 5
console.log(fibonacci(5));
