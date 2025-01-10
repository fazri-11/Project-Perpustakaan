document.getElementById('transaksiForm').addEventListener('submit', function (e) {
    const nama = document.getElementById('nama').value.trim();
    const buku = document.getElementById('buku').value.trim();
    const tanggal = document.getElementById('tanggal').value.trim();

    if (nama === '' || buku === '' || tanggal === '') {
        e.preventDefault();
        alert('Semua field harus diisi!');
        return;
    }

    const tanggalObj = new Date(tanggal);
    if (isNaN(tanggalObj.getTime())) {
        e.preventDefault(); 
        alert('Tanggal tidak valid!');
        return;
    }

    alert('Transaksi berhasil disimpan untuk ${nama} dengan buku "${buku}" pada tanggal ${tanggalObj.toLocaleDateString()}!');
});