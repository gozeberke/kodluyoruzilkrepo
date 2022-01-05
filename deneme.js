function ConsonantCount(str) { 
  var sayac=0;
  var newStr=str.toLowerCase();
  
  for(var i=0;i<str.length;i++){
    if(newStr[i]!="a"&& newStr[i]!="e"&& newStr[i]!="i"&& newStr[i]!="u"
    &&newStr[i]!="o"&&newStr[i]!=" "){
      sayac+=1;
    }
    
  }

  // code goes here  
  return sayac; 

}
   
// keep this function call here 
console.log(ConsonantCount(readline()));
//asal sayi 
/*function PrimeTime(num) { 
  for(let i=2;i<num;i++){

    if(num%i==0){
      
      return 'false';
      }
        
    }
      return 'true';
  }

  // code goes here  



   
// keep this function call here 
console.log(PrimeTime(readline()));*/