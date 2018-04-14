/*document.querySelector('h1').addEventListener('click',()=>{
    document.body.style.background= 'green'
})
*/
//tomar el id


var centesimas = 0;
setInterval(CountTalleres,100);
function CountTalleres () {
    if (centesimas < 7) {
        centesimas++;
        Consultoria.innerHTML = centesimas+"+";
        
    }            
}
 
var centesimas1 = 0;
setInterval(CountTalleres1,5);    
function CountTalleres1 () {
    if (centesimas1 < 150) {
        centesimas1++;
        Consultoria1.innerHTML = centesimas1+"+";
        
    }
}

var centesimas2 = 0;
count2 = setInterval(CountTalleres2,10);    
function CountTalleres2 () {
    if (centesimas2 < 100) {
        centesimas2++;
        Consultoria2.innerHTML = centesimas2+"%";
        
    }
}

function estadistica(){
 
    var centesimas = 0;
    setInterval(CountTalleres,100);
    function CountTalleres () {
        if (centesimas < 7) {
            centesimas++;
            Consultoria.innerHTML = centesimas+"+";
            
        }            
    }
     
    var centesimas1 = 0;
    setInterval(CountTalleres1,5);    
    function CountTalleres1 () {
        if (centesimas1 < 150) {
            centesimas1++;
            Consultoria1.innerHTML = centesimas1+"+";
            
        }
    }
    
    var centesimas2 = 0;
    setInterval(CountTalleres2,10);    
    function CountTalleres2 () {
        if (centesimas2 < 100) {
            centesimas2++;
            Consultoria2.innerHTML = centesimas2+"%";
            
        }
    }
    
}



function pintar(e){
    
  // e.style.cssText = "background-color:pink;color:blue; border:border ";
    e.style.cssText="border: 2px solid #54bac2!important;color:  #54bac2!important";
   // e.style.cssText="border: 2px solid #DDDDDD!important";

}

function despintar(e){
    e.style.cssText="border: 2px solid #DDDDDD!important";
}

function pintarCurso(e){
    
  // e.style.cssText = "background-color:pink;color:blue; border:border ";
 // e.style.cssText="color:  #54bac2!important";

}

function curso1(){
    //e.style.cssText="color:  #DDDDDD";
    //window.location.assign("https://www.w3schools.com")
    location.href="curso1.html"
    
}

$(document).ready(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 500);
          return false;
        }
      }
    });
  });