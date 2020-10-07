import CryptoJS from 'crypto-js';

const util = {};

util.Encrypt = (word) => {
    const key = CryptoJS.enc.Utf8.parse('jksd78I^(fjgHI54'); // 十六位十六进制数作为密钥
    const srcs = CryptoJS.enc.Utf8.parse(word);
    const encrypted = CryptoJS.AES.encrypt(srcs, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
    return encrypted.toString();
}

export default util;
