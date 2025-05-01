// function huruf kapital
function firstCap(text) {
    return text.trim().toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// logika welcome user
const userName = prompt("Mohon masukan nama Anda disini!");
const welcomeUser = document.getElementById("welcomeUser");
    if (userName == '') {
        welcomeUser.innerHTML = "Guest";
    }

    else {
        welcomeUser.innerHTML = firstCap(userName);
    }

// logika celsius ke farenheit
function validateForm() {

    const celsius = document.getElementById("konversi-input").value;

    if(!celsius){
        alert("Masukan Angka!");
        return;
    }
    if(isNaN(celsius)) {
        alert("Masukan Hanya Boleh Angka!")
        return;
    }

    const hasilFarenheit = celsius * (9/5) + 32;
    document.getElementById("hasil-input").innerHTML = `${hasilFarenheit}&deg;F `;
    document.getElementById("calculate-detail").innerHTML = `${parseFloat(celsius)}&deg;C x (9/5) + 32 = ${hasilFarenheit}&deg;F`;
}

// logika farenheit ke celsius
function reverseForm() {
    const farenheit = document.getElementById("konversi-input").value;

    if(!farenheit || isNaN(farenheit)){
        alert("masukan harus diisi dan hanya boleh angka")
    }

    const hasilCelsius = (farenheit - 32) * 9/5;
    document.getElementById("hasil-input").innerHTML = `${hasilCelsius}&deg;C`;
    document.getElementById("calculate-detail").innerHTML = `(${parseFloat(farenheit)}&deg;F - 32) x 9/5 = ${hasilCelsius}&deg;C`
}

// const userName = prompt("Mohon masukan nama Anda disini!");
// const welcomeUser = document.getElementById("welcomeUser");
//     if (userName == '') {
//         welcomeUser.innerHTML = "Guest";
//     }

//     else {
//         welcomeUser.innerHTML = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
//     }

// const userName = prompt("Mohon masukan nama Anda disini!");
// const welcomeUser = document.getElementById("welcomeUser");
//     if (userName == '') {
//         welcomeUser.innerHTML = "Guest";
//     }

//     else {
//         welcomeUser.innerHTML = userName.trim().toLowerCase().split(' ').map(kata => kata.charAt(0).toUpperCase() + kata.slice(1)).join(' ');
//     }
