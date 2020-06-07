function izpisi(){
    var dolzina=document.getElementById("vnos").value;
    let gumb=document.getElementById("gumb").getAttribute("name");
    if(!(dolzina=="")){
        var rez= makeid(dolzina);
        document.getElementById("izpis").value=rez; 
    }else{
        alert("Pritisnite gumb "+gumb);
    }
}
function pobrisi(){
    var vsebina=document.getElementById("izpis").value;
    let prazno="";
   if(!(vsebina=="")){
        document.getElementById("izpis").value=prazno;
        document.getElementById("vnos").value=prazno;
        alert("Vsebina " +vsebina+" je pobrisana!!");   
    }else{
        alert("Pritisnite gumb");
    }
}
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }