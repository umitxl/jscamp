//Asal Sayı Bulma 

function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {

        let sayac = 0
        for (let j = 2; j < numbers[i]; j++) {
            if (numbers[i] % j == 0) {
                sayac++;
            }
        }
        if (numbers[i] == 1) {
            console.log(numbers[i] + " " + "Asal Sayı Değildir")
        }
        else if (numbers[i] > 1, sayac == 0) {
            console.log(numbers[i] + " " + "Asal Sayıdır")
        }
        else (console.log(numbers[i] + " " + "Asal Sayı Değildir"))
    }

}

findPrime(1, 2, 5, 8, 21, 17, 25, 31, 11, 13, 135, 23423469)


//Arkadaş Sayı Bulma

function friendlyNumbers(number1, number2) {
    let friendNumber = 0;
    let friendNumber2 = 0;


    for (let i = 0; i < number1; i++) {
        if (number1 % i == 0) {
            friendNumber += i;
        }
    }
    for (let i = 0; i < number2; i++) {
        if (number2 % i == 0) {
            friendNumber2 += i;
        }
    }
    if (number1 == friendNumber2) {
        console.log("Arkadaş Sayılardır")
    }
    else if (number2 == friendNumber) {
        console.log("Arkadaş Sayılardır")
    }
    else {
        console.log("Arkadaş Sayı Değildir")
    }


}
friendlyNumbers(17296, 18416)
friendlyNumbers(5, 30)


//Mükemmel Sayılar

function perfectNumbers() {
    let perfectNumber = 1
    for (let perfectNumber=1; perfectNumber <=1000; perfectNumber++) {
        let total = 0;
        for (let i = 1; i < perfectNumber; i++) {
            if (perfectNumber %i == 0) {
                total += i;
            }

        }
        if (total == perfectNumber) {
            console.log(perfectNumber + " " + "Mükemmel Sayıdır")
        }

    }
}

perfectNumbers()
//1000'e kadar olan Asal Sayılar

function asalSayilar() {
    let asalSayi = 0
    for (let asalSayi = 2; asalSayi < 1000; asalSayi++) {
        let counter = 0; 
        for (let i = 2; i < asalSayi; i++) {
            if (asalSayi%i == 0) {
                counter ++;
            }
            
        }
        if (counter == 0) {
            console.log(asalSayi + " " + "Asal Sayıdır")
        }
        
        
    }
}

asalSayilar()

