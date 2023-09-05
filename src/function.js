// function untuk melakukan slice kata dengan 3 parameter
const sliceManual = (data, startIndex, LastIndex) => {
  // variabel untuk menampung hasil perulangan
  let result = '';
  // melakukan perulangan untuk memotong kata sesuai dengan start index dan last indexnya
  for (let i = startIndex; i < LastIndex; i++) {
    // masukkan ke variabel result nilai kata dengan index 0 untuk nilai data dan index ke dua untuk nilai perkarakter
    result += data[0][i];
  }
  //kembalikan nilai result
  return result;
};

// melakukan export fungsi
module.exports = sliceManual;
