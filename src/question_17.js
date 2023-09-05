// Nilai ujian mahasiswa dikategorikan sebagai berikut :
// - A : 91 - 100
// - B : 81 - 90
// - C : 71 - 80
// - D : 61 - 70
// - E : <= 60
// Diberikan sebuah nilai ujian, tentukan kategori dari nilai tersebut

// Petunjuk
// Check input dan cocokan dengan kategori yang telah dibuat.

function solution(n) {
  // 1. jika nilai lebih besar dari 90 dan nilai kurang dari 100
  if (n > 90 && n < 100) {
    // 2. kembalikan nilai A
    return 'A';

    // 3. jika nilai lebih besar dari 80
  } else if (n > 80) {
    // 4. kembalikan nilai B
    return 'B';

    // 5. jika nilai lebih besar dari 70
  } else if (n > 70) {
    // 6. kembalikan nilai C
    return 'C';

    // 7. jika nilai lebih besar dari 60
  } else if (n > 60) {
    // 8. kembalikan nilai D
    return 'D';

    // 9. jika nilai selain diatas
  } else {
    // 10. kembalikan nilai E
    return 'E';
  }
}

console.log(solution(95)); // expected output A
console.log(solution(76)); // expected output C
