// Ada sebuah potongan array seperti di bawah.

// Buatlah perhitungan untuk menentukan dari nilai kelulusan dari siswa dengan aturan:
// Nilai di bawah 50 maka tidak lulus
// Nilai di atas 50 dan di bawah 70 maka remedial
// Nilai di atas 70 maka lulus

const students = [
  { name: 'Peter', score: 30 },
  { name: 'Parker', score: 50 },
  { name: 'Harry', score: 70 },
  { name: 'Eva', score: 79 },
  { name: 'Justin', score: 60 },
  { name: 'Bieber', score: 90 },
  { name: 'Evan', score: 55 },
  { name: 'Rowling', score: 90 },
];

// membuat fungsi dengan parameter arr
const studentGrades = (arr) => {
  // 1. melakukan perulangan untuk memeriksa satu persatu data pada arr
  for (const student of arr) {
    // 2. variabel yang berisi student dengan key score
    let score = student.score;

    // 3. variabel untuk menampung nilai Grade
    let grade = '';

    // 4. untuk melakukan pengkondisian jika benar
    switch (true) {
      // 5. jika case nilai siswa lebih atau sama dengan 0 dan nilai siswa kurang dari 50
      case score >= 0 && score < 50:
        // 6. nilai grade berubah menjadi tidak lulus
        grade = 'Tidak Lulus';
        // 7. hentikan pengkondisian
        break;

      // 8. jika case nilai siswa lebih atau sama dengan 50 dan nilai siswa kurang atau sama dengan 70
      case score >= 50 && score <= 70:
        // 9. nilai grade berubah menjadi remedial
        grade = 'Remedial';
        // 10. hentikan pengkondisian
        break;

      // 9. jika case nilai siswa lebih dari 70
      case score > 70:
        // 10. nilai grade berubah menjadi lulus
        grade = 'Lulus';
        // 11. hentikan pengkondisian
        break;

      // 12. selai itu secara default
      default:
        // 13. nilai grade berubah menjadi nilai salah
        grade = 'Nilai Salah';
    }

    // 14. kembalikan nilai grade
    return grade;
  }
};

// 15. cetak fungsi
console.log(studentGrades(students));

// Bisa diskusi dengan kelompokmu ya!
