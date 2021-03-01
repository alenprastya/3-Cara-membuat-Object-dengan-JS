// membuat Object Literal
var mhs = {
    nama: "alen prastya",
    kelas: "11 mm 2",
    npm: "183112706450003"
}
var mhs2 = {
    nama: "ajun",
    kelas: "11 mm 2",
    npm: "183112706450003"
};

// function Deklaration

function datamahasiswa(nama, email, npm) {
    var mhs = {};
    mhs.nama = nama;
    mhs, email = email;
    mhs.npm = npm;
    return mhs;
}
var data1 = datamahasiswa("Alen prastya", "alenprastya@gmail.com", "183112706450003")
console.log(data1)

// contruktor 

function datamahasiswa(nama, jurusan, npm) {
    this.nama = nama;
    this.jurusan = jurusan;
    this.npm = npm;
}
var data2 = new datamahasiswa('Alen Prastya', 'informatika', '181311706450003');