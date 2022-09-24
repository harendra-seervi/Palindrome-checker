let txt=document.querySelector(".outputtext");
    function ispalindrome(curr){
        let name=curr.previousElementSibling.value;
        let newMsg=document.createElement('h3');
        let revname= name;
        if(name==rev(revname)){
            txt.textContent= `"${name}"  is an palindrome 😊`;
            txt.style.color="Green";
            txt.style.display="block";
        }
        else{
            txt.textContent= `"${name}" is not an palindrome 🥺`;
            txt.style.color="red";
            txt.style.display="block";
        }
    }
    function rev(revname){
        let str="";
        for(var i=revname.length-1;i>=0;i--){
            str+=revname[i];
        }
        return str;
    }
