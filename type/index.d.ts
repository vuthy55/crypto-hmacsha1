declare function SHA1(key:string, message:string):string;
declare function HmacSHA1(key:string, message:string):string;

declare namespace CryptoJS {
    function SHA1(key:string, message:string):string;
    function HmacSHA1(key:string, message:string):string;
}
