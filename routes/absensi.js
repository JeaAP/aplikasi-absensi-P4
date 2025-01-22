const express = require('express');
const router = express.Router();
const absensiController = require('../controllers/absensiController');

// READ
router.get('/', absensiController.getAbsensi);

// CREATE
router.get('/tambah/', absensiController.getAbsensiForm);
router.post('/tambah', absensiController.createAbsensi);

// UPDATE
router.get('/:absensi_id/edit', absensiController.getAbsensiForm);
router.post('/:absensi_id/edit', absensiController.updateAbsensi);

// DELETE
router.get('/:absensi_id/delete', absensiController.deleteAbsensi);

module.exports = router;
