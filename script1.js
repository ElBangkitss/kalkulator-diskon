// Format angka otomatis (menambahkan titik ribuan)
function formatInput(el){
    let value = el.value.replace(/\D/g, ""); // hanya angka
    el.value = value.replace(/\B(?=(\d{3})+(?!\d))/g, "."); // format ribuan
}

function hitung(){
    let input = document.getElementById("total").value.replace(/\./g, ""); // hilangkan titik saat dihitung
    let total = parseInt(input);
    if(!total){
        document.getElementById("hasil").innerHTML = "<p style='color:#ffdddd;'>Masukkan angka valid!</p>";
        return;
    }

    let diskon = 0;
    if(total > 500000)       diskon = 20;
    else if(total > 300000)  diskon = 15;
    else if(total > 100000)  diskon = 10;

    let potongan = (diskon/100) * total;
    let bayar = total - potongan;

    document.getElementById("hasil").innerHTML =
    `<div class="card">
        <p>Diskon: <strong>${diskon}%</strong></p>
        <p>Potongan: <strong>Rp ${potongan.toLocaleString()}</strong></p>
        <p>Total Bayar: <strong>Rp ${bayar.toLocaleString()}</strong></p>
    </div>`;
}

// Tombol reset/clear
function resetForm(){
    document.getElementById("total").value = "";
    document.getElementById("hasil").innerHTML = "";
}