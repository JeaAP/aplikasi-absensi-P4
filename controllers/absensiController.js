const absensiModel = require('../models/absensiModel');
const ruanganModel = require('../models/ruanganModel');

exports.getAbsensi = async (req, res) => {
    const absensi = await absensiModel.getAbsensi();
    const rooms = await ruanganModel.getroom(); // Mengambil data ruangan
    res.render('absensi/list', { absensi, rooms }); // Mengirimkan data absensi dan ruangan ke view
};

exports.getAbsensiForm = async (req, res) => {
    const absensi_id = req.params.absensi_id; // Ambil absensi_id jika ada
    const room_id = req.query.room_id; // Ambil room_id dari query parameter
    const rooms = await ruanganModel.getroom(); // Ambil semua ruangan

    let absensi = null;
    if (absensi_id) {
        absensi = await absensiModel.getAbsensiById(absensi_id); // Ambil data absensi jika edit
    }

    // Kirim data ke template
    res.render('absensi/form', { absensi, rooms, room_id });
};



// Menyimpan Absensi Baru
exports.createAbsensi = async (req, res) => {
    const { room_id, nama_tamu, waktu_masuk, waktu_keluar, keperluan } = req.body;
    await absensiModel.createAbsensi(room_id, nama_tamu, waktu_masuk, waktu_keluar, keperluan);
    res.redirect('/absensi');
};

// Mengupdate Absensi
exports.updateAbsensi = async (req, res) => {
    const { room_id, nama_tamu, waktu_masuk, waktu_keluar, keperluan } = req.body;
    const absensi_id = req.params.absensi_id;
    await absensiModel.updateAbsensi(absensi_id, room_id, nama_tamu, waktu_masuk, waktu_keluar, keperluan);
    res.redirect('/absensi');
};

// Menghapus Absensi
exports.deleteAbsensi = async (req, res) => {
    const absensi_id = req.params.absensi_id;
    await absensiModel.deleteAbsensi(absensi_id);
    res.redirect('/absensi');
};
