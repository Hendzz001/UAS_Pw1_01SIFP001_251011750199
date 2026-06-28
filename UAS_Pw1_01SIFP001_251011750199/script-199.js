document.addEventListener("DOMContentLoaded", function () {

    // =========================================================
    // 1. LOGIKA TRANSAKSI (Form Input ke dalam Tabel)
    // =========================================================
    const btnSimpan = document.getElementById("btnSimpan");
    let nomorUrut = 1; // Variabel untuk membuat nomor urut otomatis di tabel

    // Memastikan tombol simpan ada di halaman yang sedang dibuka
    if (btnSimpan) {
        btnSimpan.addEventListener("click", function () {
            // Ambil nilai dari inputan HTML
            const nama = document.getElementById("namaPembeli").value.trim();
            const paket = document.getElementById("paketSelect");
            const namaPaket = paket.options[paket.selectedIndex].text.split(" - ")[0]; 
            const hargaPaket = parseInt(paket.value);
            const durasi = parseInt(document.getElementById("durasi").value);

            // Validasi: Jika nama kosong atau durasi tidak valid
            if (nama === "" || isNaN(durasi) || durasi < 1) {
                alert("Peringatan: Nama Pembeli dan Durasi harus diisi dengan benar!");
                return; // Hentikan proses jika kosong
            }

            // Hitung total harga
            const totalHarga = hargaPaket * durasi;
            
            // Masukkan data tersebut ke dalam tabel html (Syarat UAS B.5)
            const tbody = document.getElementById("isiTabel");
            const tr = document.createElement("tr");
            tr.style.borderBottom = "1px solid #2c2c2e";

            tr.innerHTML = `
                <td style="padding: 10px;">${nomorUrut}</td>
                <td style="padding: 10px;">${nama}</td>
                <td style="padding: 10px;">${namaPaket}</td>
                <td style="padding: 10px;">${durasi} Bulan</td>
                <td style="padding: 10px; color: #1db954; font-weight: bold;">Rp ${totalHarga.toLocaleString("id-ID")}</td>
            `;

            tbody.appendChild(tr); // Tambahkan baris ke tabel
            nomorUrut++; // Tambah nomor urut untuk data selanjutnya

            // Reset form input agar kembali kosong setelah disimpan
            document.getElementById("transaksiForm").reset();
        });
    }

    // =========================================================
    // 2. LOGIKA VALIDASI FORM LOGIN (Syarat UAS Poin B.6)
    // =========================================================
    const loginForm = document.getElementById("loginForm");
    
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Mencegah browser reload halaman
            
            // Ambil nilai username dan password
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            // Validasi jika inputan kosong
            if (username === "" || password === "") {
                alert("GAGAL: Username dan Password tidak boleh kosong!");
            } else {
                alert(`Selamat Datang, ${username}! Anda berhasil masuk ke HendzStream.`);
                // Mengarahkan ke halaman home setelah berhasil login
                window.location.href = "index.html"; 
            }
        });
    }

});