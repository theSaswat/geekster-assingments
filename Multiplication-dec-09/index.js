function mul(a) {
    return function (b){
        return function (c){
            return a*b*c;
         }
     }
 }
let btn= document.getElementById('btn');
btn.addEventListener('click', fn );

     function fn(){
        let a= document.getElementById('num1').value;
        let b= document.getElementById('num2').value;
        let c= document.getElementById('num3').value;

        let d = mul(a)(b)(c);
        console.log(d);

        let y= document.getElementById('s1');
        y.innerHTML= d;
}
