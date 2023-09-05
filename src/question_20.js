// Diberikan sebuah string s. Tentukan apakah terdapat karakter `a` dan `b` yang jarak  `a ke b` atau `b ke a` yang memiliki jarak minimal 3 karakter.
// Return "YES" jika ya dan "NO" jika tidak.

// Petunjuk
// Check tiap karakter kemudian check 4 karakter setelahnya.

function solution(str) {
  // 1. membuat variabel yang berisi nilai default NO
  let result = 'NO';

  // 2. melakukan perulangan satu per satu string
  for (let i = 0; i < str.length; i++) {
    // 3. jika karakter string sama dengan a atu karakter string sama dengan b
    if (str[i] === 'a' || str[i] === 'b') {
      // 4. lakukan perulangan yang dimulai dari 4 setelah karakter saat ini
      for (let j = i + 4; j < str.length; j++) {
        // 5. jika karakter pada index i sama dengan a dan karakter pada index j sama dengan b atau sebaliknya
        if (
          (str[i] === 'a' && str[j] === 'b') ||
          (str[i] === 'b' && str[j] === 'a')
        ) {
          // 6. ubah nilai variabel result menjadi YES
          result = 'YES';
        }
      }
    }
  }

  // 7. kembalikan nilai result
  return result;
}

console.log(solution('acdebae')); // expected output YES
console.log(solution('cdaecba')); // expected output NO
