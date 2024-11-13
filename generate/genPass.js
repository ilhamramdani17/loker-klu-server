import hash from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const genCode = (length) => {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var code = "";
    for (var i = 0; i <= length; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    code += chars.substring(randomNumber, randomNumber +1);
    }
    return code;
 }

export const genPass = (password) => {
    let salt = hash.genSaltSync();
    let hashPassword = hash.hashSync(password,salt);
    return hashPassword;
}

export const generatePrimes = ()=> {
    function isPrime(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        for (let i = 3; i * i <= num; i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }  
    function generatePrimes(limit) {
        let primes = [];
        for (let i = 2; i <= limit; i++) {
            if (isPrime(i)) {
                primes.push(i);
            }
        }
        return primes;
    }
    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const limit = 1000;
    const primes = generatePrimes(limit);
    return primes[generateRandomNumber(1,primes.length)];
}

export const modExp = (base, exponent, modulus) => {
    let result = 1;  // Hasil awal (base^0 % modulus)
    base = base % modulus;  // Mengurangi base dalam batas modulus

    while (exponent > 0) {
        // Jika eksponen ganjil, kalikan result dengan base
        if (exponent % 2 === 1) {
            result = (result * base) % modulus;
        }
        // Update exponent dan base
        exponent = Math.floor(exponent / 2);  // Eksponen dibagi dua (eksponen setengah)
        base = (base * base) % modulus;  // Basis diperbesar menjadi kuadratnya
    }

    return result;
}

export const verifyPass = (hashPass,reqPass) => {
    const secure = hash.compareSync(reqPass,hashPass) 
    if (secure) {
        return true;
    } else {
        return false;
    }
}

export const genToken = (_id,pass) => { 
    let secret = process.env.SECRET;
    let token = jwt.sign({id: _id,password: pass,time: new Date().getTime()},secret,{expiresIn: "7 days"});
    return token;
} 

export const genFactoryToken = (_id,pass) => { 
    let secret = process.env.SECRET;
    let token = jwt.sign({id: _id,password: pass,time: new Date().getTime()},secret,{expiresIn: "5m"});
    return token;
}

export const verifyJwtToken = (token) => {
    let secret = process.env.SECRET;
    let isValidToken
    jwt.verify(token,secret,(err,decode) => {
        if (err) isValidToken = false
        else isValidToken = decode
    })
    return isValidToken
}
