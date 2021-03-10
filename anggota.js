var btn = document.getElementById("btn");

btn.addEventListener("click",validasi);



function validasinama(){
    var ceknama = /^[A-Za-z]+$/;
    if(document.getElementById("nama").value == ""){
        var textnama1='Nama harus diisi !';
        document.getElementById("komen1").innerHTML = textnama1;
        return false;

    }
    else{

        if(document.getElementById("nama").value.match(ceknama)){
            var textnama3 ='';
            document.getElementById("komen1").innerHTML = textnama3;
            return true;
        }
        else{
            var textnama2 ='Nama harus huruf semua !';
            document.getElementById("komen1").innerHTML = textnama2;
            return false;
        }
    }
}

function validasitelp(){
    var cektelp = /^[0-9]+$/;
    if(document.getElementById("telp").value == ""){
        var texttelp1='Nomor telepon harus diisi';
        document.getElementById("komen2").innerHTML = texttelp1;
        return false
    }
    else{

        if(document.getElementById("telp").value.match(cektelp)){
            var texttelp3 ="";
            document.getElementById("komen2").innerHTML = texttelp3;
            return true;
        }
        else{
            var texttelp2 ="Nomor telepon harus angka semua !";
            document.getElementById("komen2").innerHTML = texttelp2;
            return false;
        }
        
    }
}
function validasiemail(){
    var cekemail = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    if(document.getElementById("email").value == ""){
        var textemail1 ="Email tidak boleh kosong !";
        document.getElementById("komen3").innerHTML = textemail1;
        return false;
    }
    else{

        
        if(document.getElementById("email").value.match(cekemail)){
            var textemail3 ="";
        document.getElementById("komen3").innerHTML = textemail3;
            return true;
        }
        else{
            var textemail2 ="Email tidak sesuai format !";
            document.getElementById("komen3").innerHTML = textemail2;
            return false;
        }
    }
}

function validasipass(){

    if(document.getElementById("sandi").value == ""){
        var textsandi1 ="Kata sandi tidak boleh kosong !";
        document.getElementById("komen4").innerHTML = textsandi1;
        return false;
    }
    else{

        if(document.getElementById("sandi").value.length>=8){
            var textsandi3 ="";
        document.getElementById("komen4").innerHTML = textsandi3;
            return true;
        }
        else{
            var textsandi2 ="Kata sandi minimal 8 karakter !";
            document.getElementById("komen4").innerHTML = textsandi2;
            return false;
        }
    }
}

function validasikonfirmasi(){
    p1 = document.getElementById("sandi").value;
    if(document.getElementById("konfirmasi").value==p1){
        var textkonfirmasi2 ="";
        document.getElementById("komen5").innerHTML = textkonfirmasi2;
        return true;
    }
    else{
        var textkonfirmasi1 ="Sandi tidak sama !";
        document.getElementById("komen5").innerHTML = textkonfirmasi1;
        return false;
    }

}

function validasialamat(){

    if(document.getElementById("alamat").value == ""){
        var textalamat1 ="Alamat tidak boleh kosong !";
        document.getElementById("komen6").innerHTML = textalamat1;

        return false;
    }

    else{

        
        if(document.getElementById("alamat").value.length>3){
            var textalamat3 ="";
            document.getElementById("komen6").innerHTML = textalamat3;
            return true;
        }
        else{
            var textalamat2 ="Alamat minimal 4 karakter !";
            document.getElementById("komen6").innerHTML = textalamat2;

            return false;
        }
        
    }
}

function validasijeniskelamin(){

    if(document.getElementById("jeniskelamin").value != "pilih"){
        var textjeniskelamin2 ="";
        document.getElementById("komen7").innerHTML = textjeniskelamin2;
        return true;
    }
    else{

        var textjeniskelamin1 ="Jenis kelamin belum dipilih !";
        document.getElementById("komen7").innerHTML = textjeniskelamin1;

        return false;
    }

}


function validasitanggal(){

    if(document.getElementById("tanggal").value != ""){
        var texttanggal2 ="";
        document.getElementById("komen8").innerHTML = texttanggal2;
        return true;
    }
    else{
        var texttanggal1 ="Tanggal tidak boleh kosong !";
        document.getElementById("komen8").innerHTML = texttanggal1;

        return false;
    }

}

function validasi(){

    validasinama();
    validasitelp();
    validasiemail();
    validasipass();
    validasikonfirmasi();
    validasialamat();
    validasijeniskelamin();    
    validasitanggal();

    var reset = document.getElementById('reset');
    
    if(validasinama() == true && validasitelp() == true && validasiemail() == true&& validasipass() == true && validasikonfirmasi() == true && validasialamat() == true && validasijeniskelamin() == true && validasitanggal() == true){
        alert("Terima kasih sudah mengisi formulir pendaftaran. Registrasi Anda berhasil !");
         reset.click();
    }
    
}
