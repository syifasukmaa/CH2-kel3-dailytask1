// Buatlah sebuah function untuk melakukan format sorting array di dalam kode Javascript.
// Bisa diskusi dengan teman kelompokmu ya!
let arr = [2, 3, 1, 5, , 8, 6, 4, 4, 5, 9, 7];

// 1. membuat function menggunakan algoritma quick sort
function quickSortAsc(arr) {
  // 2. base case untuk rekursif quicksort leftArr dan rightArr, jika array kurang atau sama dengan 1
  if (arr.length <= 1) {
    return arr;
  }

  // 3. mengambil pivot dari data array yg ada ditengah
  let pivot = arr[Math.floor(arr.length / 2)];

  // 4. membuat array kosong untuk menampung data baru
  let rightArr = [];
  let leftArr = [];
  let equal = [];

  // 5. melakukan mengecek satu per satu data array
  for (let i = 0; i < arr.length; i++) {
    // 6. jika angka lebih kecil dari pivot
    if (arr[i] < pivot) {
      // 7. masukan data ke array baru sebelah kiri
      leftArr.push(arr[i]);

      // 8. jika angka lebih besar dari pivot
    } else if (arr[i] > pivot) {
      // 9. masukan data ke array baru sebelah kanan
      rightArr.push(arr[i]);

      // 10. jika angka sama dengan pivot
    } else if (arr[i] === pivot) {
      // 11. masukan data ke array baru bagian tengah
      equal.push(arr[i]);
    }
  }

  // 12. melakukan rekursif untuk array baru sebelah kiri dan kanan dan menggunakan spread operator untuk mengelurkan data pada array dan digabungkan kembali leftArr, equalArr dan rightArr menjadi array
  return [...quickSortAsc(leftArr), ...equal, ...quickSortAsc(rightArr)];
}

// 1. membuat function menggunakan algoritma quick sort
function quickSortDesc(arr) {
  // 2. base case untuk rekursif quicksort leftArr dan rightArr, jika array kurang atau sama dengan 1
  if (arr.length <= 1) {
    return arr;
  }

  // 3. mengambil pivot dari data array yg ada ditengah
  let pivot = arr[Math.floor(arr.length / 2)];

  // 4. mengambil pivot dari data array yg ada ditengah
  let rightArr = [];
  let leftArr = [];
  let equal = [];

  // 5. melakukan mengecek satu per satu data array
  for (let i = 0; i < arr.length; i++) {
    // 6. jika angka lebih besar dari pivot
    if (arr[i] > pivot) {
      // 7. masukan data ke array baru sebelah kiri
      leftArr.push(arr[i]);

      // 8. jika angka lebih kecil dari pivot
    } else if (arr[i] < pivot) {
      // 9. masukan data ke array baru sebelah kanan
      rightArr.push(arr[i]);

      // 10. jika angka sama dengan pivot
    } else if (arr[i] === pivot) {
      // 11. masukan data ke array baru bagian tengah
      equal.push(arr[i]);
    }
  }

  // 12. melakukan rekursif untuk array baru sebelah kiri dan kanan dan menggunakan spread operator untuk mengelurkan data pada array dan digabungkan kembali leftArr, equalArr dan rightArr menjadi array
  return [...quickSortDesc(leftArr), ...equal, ...quickSortDesc(rightArr)];
}

console.log(quickSortAsc(arr));
console.log(quickSortDesc(arr));
