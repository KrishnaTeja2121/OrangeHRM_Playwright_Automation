import CryptoJS from 'crypto-js'

export default class CommonUtils {
    private secreKey: string;

    constructor() {
        this.secreKey = process.env.SECRET_KEY ? process.env.SECRET_KEY : '';

        if (process.env.SECRET_KEY) {
            this.secreKey = process.env.SECRET_KEY;
        } else {
            throw new Error('Please provide Secrey ket')
        }

    }
    public encryptData(data: string) {
        return CryptoJS.AES.encrypt(data, this.secreKey).toString();


    }
    public decryptData(encData: string) {
        return CryptoJS.AES.decrypt(encData, this.secreKey).toString(CryptoJS.enc.Utf8);

    }
}








