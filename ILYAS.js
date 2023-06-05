var cmpt =0 ;
var cmpt2 =0 ;
var cmpt3 =0 ;
function menu(){
cmpt++;
const menuPhone = document.querySelector('#menu_telephone');
if(cmpt%2==1)  menuPhone.classList.add('show');
if(cmpt%2==0)  menuPhone.classList.remove('show');
}


function mode() {

    cmpt2++;
    var element2 = document.querySelector('.dynamic-txts');
    var element = document.querySelector('.static-txt');

    var elements = document.querySelectorAll('.wrapper');

    elements.forEach(function(element) {
        var dynamicTxts = element.querySelector('.dynamic-txts');
        dynamicTxts.classList.add('highlight');
        
        var staticTxt = element.querySelector('.static-txt');
        if (staticTxt) {
            staticTxt.style.color = "black";
        }
    });








    var body = document.querySelector("body");
    var bare=document.getElementById("bare");
    var menuPC=document.getElementsByClassName("menu");
    var menuPN=document.getElementsByClassName("menuP");
    var MenuPN=document.getElementById("menu_telephone");
    var barePHONE=document.getElementById("bare_Telephone");
    var description=document.getElementById("disc");
    var descriptionPN=document.getElementById("discP");
    var im = document.querySelector(".IMP .IM1P font");
    var modeIcon=document.getElementsByClassName("parametre");
    var modeIconPH=document.getElementById("modeIconePH");

    var tel_home=document.getElementById("Accueil_telephone");


    if(cmpt2%2==1){

        elements.forEach(function(element) {
            var dynamicTxts = element.querySelector('.dynamic-txts');
            dynamicTxts.classList.add('highlight');
            
            var staticTxt = element.querySelector('.static-txt');
            if (staticTxt) {
                staticTxt.style.color = "black";
            }
        });
       
      /*  element2.classList.add('highlight');
        
        if (element) {
            element.style.color="black";
                                }*/
        modeIcon[1].innerHTML = '<i class="fas fa-moon" style="color: #000000; font-size: 33px;"></i>';
        modeIconPH.innerHTML='<i class="fas fa-moon" style="color: #000000; font-size: 30px;"></i>';
for(let i=0 ; i<5;i++) {
    menuPC[i].style.color="black";
    if(i!=4)menuPN[i].style.color="black";
}
document.getElementsByClassName("menuPF")[0].style.color="black";
   // im.setAttribute("color", "black");
    description.style.color="black";
    descriptionPN.style.color="black";
    body.style.background = "rgb(181, 214, 228)";
    bare.style.background = "rgb(170, 210, 228)";
    barePHONE.style.background = "rgb(170, 210, 228)";
    MenuPN.style.background = "rgb(170, 210, 228)";
    barePHONE.style.color = "black ";
    tel_home.style.background = "rgb(181, 214, 228)";
}


    if(cmpt2%2==0){
        elements.forEach(function(element) {
            var dynamicTxts = element.querySelector('.dynamic-txts');
            dynamicTxts.classList.remove('highlight');
            
            var staticTxt = element.querySelector('.static-txt');
            if (staticTxt) {
                staticTxt.style.color = "white";
            }
        });
        modeIcon[1].innerHTML = ' <i class="fa-sharp fa-solid fa-sun" style="color: #ff0000; font-size: 33px;"></i>';
        modeIconPH.innerHTML=' <i class="fa-sharp fa-solid fa-sun" style="color: #ff0000; font-size: 25px;"></i>';
        for(let i=0 ; i<5;i++) {
            menuPC[i].style.color="white";
            if(i!=4)menuPN[i].style.color="white";
        }
        document.getElementsByClassName("menuPF")[0].style.color="white";
           // im.setAttribute("color", "white");
            description.style.color="white";
            descriptionPN.style.color="white";
            body.style.background = "rgb(22, 33, 49)";
            bare.style.background = "#15202B";
            barePHONE.style.background = "#15202B";
            MenuPN.style.background = "#15202B";
            barePHONE.style.color = "white";
            tel_home.style.background = "rgb(22, 33, 49)";
    }
}


function langues(){
    cmpt3++;
    var elements = document.querySelectorAll('.static-txt');


    var  wrappers = document.querySelectorAll('.wrapper');



    var parametre=document.getElementsByClassName("parametre");
        var menuPC=document.getElementsByClassName("menu");
    var menuPN=document.getElementsByClassName("menuP");
    var description=document.getElementById("disc");
    var descriptionPN=document.getElementById("discP");
    //var textElement = document.querySelector(".IM th#IM1");
    var textElementPN = document.querySelector(".IMP th.IM1P");
    var im = document.querySelector(".IMP .IM1P font");
    var modeIcon=document.getElementsByClassName("parametre");
    var modeIconPH=document.getElementById("modeIconePH");
    var CV =document.getElementsByClassName("cv");
    var langIcomPH=document.getElementById("langIconPN");


    if(cmpt3%2==1){
//--------------------------------------
/*ar translationMap = {
    'Ilyas': "ILYAS",
    'Développeur': 'Developer',
    'Makhloul': 'MAKHLOUL',
    'Programmeur': 'Programmer'
  };
  
  var spans = document.querySelectorAll('.dynamic-txts li span');
  spans.forEach(function(span) {
    var frenchText = span.textContent.trim();
    var translatedText = translationMap[frenchText];
    if (translatedText) {
      span.innerHTML = "<strong>" + translatedText + "</strong>";
    }
  });*/

  wrappers.forEach(function(wrapper) {
    var translationMap = {
      'Ilyas': "ILYAS",
      'Développeur': 'Developer',
      'Makhloul': 'MAKHLOUL',
      'Programmeur': 'Programmer'
    };

    var spans = wrapper.querySelectorAll('.dynamic-txts li span');
    spans.forEach(function(span) {
      var frenchText = span.textContent.trim();
      var translatedText = translationMap[frenchText];
      if (translatedText) {
        span.innerHTML = "<strong>" + translatedText + "</strong>";
      }
    });
  });
          //--------------------------------------
        parametre[0].innerHTML='<img src="C:/Users/pc/Desktop/ILYAS/france.png" width="30" height="30"></img>';
        langIcomPH.innerHTML='<img src="C:/Users/pc/Desktop/ILYAS/france.png" width="25" height="25"></img>';
        //--------------------
        elements.forEach(function(element) {
            element.innerHTML = "<strong>I'm</strong>";
          });
          //--------------------------
    if(cmpt2%2==1){
    //textElement.innerHTML = "<font color='black'>" + textElement.getAttribute("data-text") + "</font>";
    //textElementPN.innerHTML = "<font color='black'>" + textElement.getAttribute("data-text") + "</font>";
    }
    if(cmpt2%2==0 || cmpt2==0){
       /// textElement.innerHTML = "<font color='white'>" + textElement.getAttribute("data-text") + "</font>";
       // textElementPN.innerHTML = "<font color='white'>" + textElement.getAttribute("data-text") + "</font>";
        }
    
   

    var tel_home=document.getElementById("Accueil_telephone");

    menuPC[0].innerHTML='Home <i class="fa-solid fa-home-user " style="color: #ff0000;"></i>' ;
    menuPC[1].innerHTML='About me <i class="fa-solid fa-user " style="color: #ff0000;"></i>';
    menuPC[2].innerHTML=' Professional <i class="fa-solid fa-user-tie " style="color: #ff0000;"></i> ';
    menuPC[4].innerHTML='All <i class="fa-solid fa-reply-all " style="color: #ff0000;"></i>';

    menuPN[0].innerHTML='Home<i class="fa-solid fa-house-user" style="color: #ff0000;"></i>';
    menuPN[1].innerHTML='About me <i class="fa-solid fa-user " style="color: #ff0000;"></i>';

 
    menuPN[2].innerHTML='Professional <i class="fa-solid fa-user-tie " style="color: #ff0000;"></i> ';
    document.getElementsByClassName("menuPF")[0].innerHTML='All<i class="fa-solid fa-reply-all " style="color: #ff0000;"></i> '
    description.innerHTML='Computer <strong>engineering student</strong><br> National School of Applied Science Fez'
    descriptionPN.innerHTML='Computer <strong>engineering student</strong><br> National School of Applied Science Fez'
    CV[0].innerHTML='<strong>Download CV</strong>';
    CV[1].innerHTML='<strong>Download CV</strong>';
    }



    if(cmpt3%2==0){
//--------------------------------------

  
  wrappers.forEach(function(wrapper) {
    var translationMap = {
        "ILYAS":'Ilyas',
        'Developer':'Développeur',
        'MAKHLOUL':'Makhloul',
        'Programmer':'Programmeur'
    };

    var spans = wrapper.querySelectorAll('.dynamic-txts li span');
    spans.forEach(function(span) {
      var frenchText = span.textContent.trim();
      var translatedText = translationMap[frenchText];
      if (translatedText) {
        span.innerHTML = "<strong>" + translatedText + "</strong>";
      }
    });
  });
          //--------------------------------------



        
        parametre[0].innerHTML='<img src="C:/Users/pc/Desktop/ILYAS/eng.png" width="30" height="30"></img>';
        //-------------------------
        elements.forEach(function(element) {
            element.innerHTML = "<strong>Je Suis</strong>";
          });
          //----------------------------
        langIcomPH.innerHTML='<img src="C:/Users/pc/Desktop/ILYAS/eng.png" width="25" height="25"></img>';
      
        
      
        
    
        var tel_home=document.getElementById("Accueil_telephone");
    
        menuPC[0].innerHTML='Accueil <i class="fa-solid fa-home-user " style="color: #ff0000;"></i>' ;
        menuPC[1].innerHTML='Personnel<i class="fa-solid fa-user " style="color: #ff0000;"></i>';
        menuPC[2].innerHTML=' Professionnel <i class="fa-solid fa-user-tie " style="color: #ff0000;"></i> ';
        menuPC[4].innerHTML='Tous <i class="fa-solid fa-reply-all " style="color: #ff0000;"></i>';
    
        menuPN[0].innerHTML='Accueil <i class="fa-solid fa-house-user" style="color: #ff0000;"></i>';
        menuPN[1].innerHTML='Personnel <i class="fa-solid fa-user " style="color: #ff0000;"></i>';
    
     
        menuPN[2].innerHTML='Professionnel<i class="fa-solid fa-user-tie " style="color: #ff0000;"></i> ';
        document.getElementsByClassName("menuPF")[0].innerHTML='Tous<i class="fa-solid fa-reply-all " style="color: #ff0000;"></i> '
        description.innerHTML='<strong>Etudiant Ingénieur</strong> en Génie Informatique <br>   Ecole Nationale de Science Appliquée Fés'
        descriptionPN.innerHTML='<strong>Etudiant Ingénieur</strong> en Génie Informatique <br>   Ecole Nationale de Science Appliquée Fés'
        CV[0].innerHTML='<strong>Télécharger CV</strong>';
        CV[1].innerHTML='<strong>Télécharger CV</strong>';
        }
}



function Accueil(){

    var menuPC=document.getElementsByClassName("menu");
    var menuPN=document.getElementsByClassName("menuP");
    var Accueil=document.getElementById("accueil");
    var Personnel=document.getElementById("personnel");
    menuPC[0].style.borderBottom = "3px solid red";
    menuPN[0].style.borderLeft = "4px solid red";


    for(let i=0;i<5;i++){
        if(i!=0){
            menuPC[i].style.borderBottom = "none"; 
            if(i!=4){
                menuPN[i].style.borderBottom = "none"; 
            }
        }
    }
    Accueil.style.display="flex";
    Personnel.style.display="none";


}


function Personnel(){

    var menuPC=document.getElementsByClassName("menu");
    var menuPN=document.getElementsByClassName("menuP");
    var Accueil=document.getElementById("accueil");
    var Personnel=document.getElementById("personnel");
    menuPC[1].style.borderBottom = "3px solid red";
    menuPN[1].style.borderLeft = "4px solid red";


    for(let i=0;i<5;i++){
        if(i!=1){
            menuPC[i].style.borderBottom = "none"; 
            if(i!=4){
                menuPN[i].style.borderBottom = "none"; 
            }
        }
    }
    Accueil.style.display="none";
    Personnel.style.display="block";


}
