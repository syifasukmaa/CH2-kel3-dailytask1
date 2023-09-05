// buat looping sehingga membuat angka 1 sampai dengan 100
// tapi setiap modulu 3, 5 dan 3 DAN 5 ada spesial nya spt penjelasan dibawah ini =

// Ada sebuah mantra yang mengeluarkan mantra Fizz Buzz dengan rule:

// Mantra “Fizz” akan keluar dengan nilai modulo 3
// Mantra “Buzz” akan keluar dengan nilai modulo 5
// Mantra akan “Fizz Buzz” akan keluar dengan nilai modulo 3 dan 5

// 1. Membuat fungsi dengan parameter number
const fizzBuzz = (number) => {
  // 2. melakukan perulangan untuk mengeluarkan nilai satu persatu dimulai dari 1 sampai kurang dari 100 atau sama dengan 100
  for (let i = 1; i <= number; i++) {
    // 3. jika item dibagi 3 sisa sama dengan 0 dan item dibagi 5 sisa sama dengan 0
    if (i % 3 === 0 && i % 5 === 0) {
      // 4. cetak Fizz Buzz
      console.log('Fizz Buzz');

      // 5. jika item dibagi 3 sisa sama dengan 0
    } else if (i % 3 === 0) {
      // 6. cetak Fizz
      console.log('Fizz');

      // 7. item dibagi 5 sisa sama dengan 0
    } else if (i % 5 === 0) {
      // 8. cetak Buzz
      console.log('Buzz');

      // 9. selain itu
    } else {
      // 10. cetak angka sebenarnya
      console.log(i);
    }
  }
};

// 11. panggil fungsi fizzBuzz dengan argumen 100
fizzBuzz(100);

// expected output :
// 1
// 2
// Fizz
// 3
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// dan seterus nya sampai dengan 100
