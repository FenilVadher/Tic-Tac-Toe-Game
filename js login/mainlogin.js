function btns(){
    var onebtn=document.getElementById("onebtn").value;
    var twobtn=document.getElementById("twobtn").value;
    if(onebtn=="" || twobtn==""){
        window.alert("enter players name");
        return false
    }
    else{
        window.location.href='./index.html';
        }
}
