window.onload = clock24(24), day();
window.addEventListener("resize", (event) => {
  day();
  console.log("test")
});
var timer;
function clock24(h){
    
    if (h == 24) {
    const date = new Date();
    document.getElementById("clock").innerHTML = date.toLocaleTimeString();
    console.log("fr");
    timer = setTimeout(function() {clock24(h)}, 1000);
    document.getElementById("24hour").style = 'color: #00FF97';
    }
    else{
        clearTimeout(timer);
        document.getElementById("24hour").style = 'color: #8A8A8A';
        return;
    }
}

function clock12(t){
    if (t == 12){
    const date = new Date();
    document.getElementById("clock").innerHTML = date.toLocaleTimeString('en-US');
    console.log("us");
    timer = setTimeout(function() {clock12(t)}, 1000); 
    document.getElementById("12hour").style = ' color: #00FF97';
    }
    else {
        clearTimeout(timer);
        document.getElementById("12hour").style = 'color: #8A8A8A';
        return;
    }
}

 function day(){
    const date = new Date();
    let day;
    switch(date.getDay()){
        case 0:
            day = "sunday";
            break;
          case 1:
            day = "monday";
            break;
          case 2:
             day = "tuesday";
            break;
          case 3:
            day = "wednesday";
            break;
          case 4:
            day = "thursday";
            break;
          case 5:
            day = "friday";
            break;
          case 6:
            day = "saturday";
    }
    let text = document.getElementById("day");
    if (screen.width > 420){
      text.innerHTML = "sunday monday tuesday wednesday thursday friday saturday";
       text.innerHTML = text.innerHTML.replace(day, '<span class="today">'+day+'</span>');
    }
    else if (screen.width <= 420){text.innerHTML = day; }
    
   /*  document.getElementById("day").innerHTML = day;  */
}