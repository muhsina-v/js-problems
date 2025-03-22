const adress=function(ip){
     return ip.replaceAll('.','[.]')
}
console.log(adress('11.11.11.1'));
