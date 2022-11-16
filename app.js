function showtime(){
    var date=new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    var session = "AM";
    //12 hours formatting
    if(h==0){
        h=12;
    }
    if(h>12){
        h=h-12;
        session="PM";    
    }
    if(h<10){
    h="0" +h ;
}
    if(m<10){
        m ="0" +m;
    }
 
    if(s<10){
        s ="0" +s ;
    }
    document.getElementById("digitalclock").innerHTML= h  +" : " + m + " : " + s + session;
    setTimeout(showtime,1000);
}
showtime();
