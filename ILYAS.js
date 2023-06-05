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
    var body = document.querySelector("body");
    var bare=document.getElementById("bare");
    var menuPC=document.getElementsByClassName("menu");
    var menuPN=document.getElementsByClassName("menuP");
    var MenuPN=document.getElementById("menu_telephone");
    var barePHONE=document.getElementById("bare_Telephone");
    var description=document.getElementById("disc");
    var descriptionPN=document.getElementById("discP");
    var imPC = document.querySelector(".IM #IM1 font");
    var im = document.querySelector(".IMP .IM1P font");
    var modeIcon=document.getElementsByClassName("parametre");
    var modeIconPH=document.getElementById("modeIconePH");

    var tel_home=document.getElementById("Accueil_telephone");


    if(cmpt2%2==1){
        modeIcon[1].innerHTML = '<i class="fas fa-moon" style="color: #000000; font-size: 33px;"></i>';
        modeIconPH.innerHTML='<i class="fas fa-moon" style="color: #000000; font-size: 30px;"></i>';
for(let i=0 ; i<5;i++) {
    menuPC[i].style.color="black";
    if(i!=4)menuPN[i].style.color="black";
}
document.getElementsByClassName("menuPF")[0].style.color="black";
    im.setAttribute("color", "black");
    imPC.setAttribute("color", "black");
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
        modeIcon[1].innerHTML = ' <i class="fa-sharp fa-solid fa-sun" style="color: #ff0000; font-size: 33px;"></i>';
        modeIconPH.innerHTML=' <i class="fa-sharp fa-solid fa-sun" style="color: #ff0000; font-size: 25px;"></i>';
        for(let i=0 ; i<5;i++) {
            menuPC[i].style.color="white";
            if(i!=4)menuPN[i].style.color="white";
        }
        document.getElementsByClassName("menuPF")[0].style.color="white";
            im.setAttribute("color", "white");
            imPC.setAttribute("color", "white");
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
    var parametre=document.getElementsByClassName("parametre");
        var menuPC=document.getElementsByClassName("menu");
    var menuPN=document.getElementsByClassName("menuP");
    var description=document.getElementById("disc");
    var descriptionPN=document.getElementById("discP");
    var textElement = document.querySelector(".IM th#IM1");
    var textElementPN = document.querySelector(".IMP th.IM1P");
    var im = document.querySelector(".IMP .IM1P font");
    var modeIcon=document.getElementsByClassName("parametre");
    var modeIconPH=document.getElementById("modeIconePH");
    var CV =document.getElementsByClassName("cv");
    var langIcomPH=document.getElementById("langIconPN");


    if(cmpt3%2==1){
        parametre[0].innerHTML='<img src="ILYAS/france.png" width="30" height="30"></img>';
        langIcomPH.innerHTML='<img src="ILYAS/france.png" width="25" height="25"></img>';
        textElement.setAttribute("data-text", "I'm");
        textElementPN.setAttribute("data-text", "I'm");
    if(cmpt2%2==1){
    textElement.innerHTML = "<font color='black'>" + textElement.getAttribute("data-text") + "</font>";
    textElementPN.innerHTML = "<font color='black'>" + textElement.getAttribute("data-text") + "</font>";
    }
    if(cmpt2%2==0 || cmpt2==0){
        textElement.innerHTML = "<font color='white'>" + textElement.getAttribute("data-text") + "</font>";
        textElementPN.innerHTML = "<font color='white'>" + textElement.getAttribute("data-text") + "</font>";
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
        parametre[0].innerHTML='<img src="ILYAS/eng.png" width="30" height="30"></img>';
        
        langIcomPH.innerHTML='<img src="ILYAS/eng.png" width="25" height="25"></img>';
        textElement.setAttribute("data-text", "Je Suis");
        textElementPN.setAttribute("data-text", "Je Suis");
        if(cmpt2%2==1){
        textElement.innerHTML = "<font color='black'>" + textElement.getAttribute("data-text") + "</font>";
        textElementPN.innerHTML = "<font color='black'>" + textElement.getAttribute("data-text") + "</font>";
        }
        if(cmpt2%2==0 || cmpt2==0){
            textElement.innerHTML = "<font color='white'>" + textElement.getAttribute("data-text") + "</font>";
            textElementPN.innerHTML = "<font color='white'>" + textElement.getAttribute("data-text") + "</font>";
            }
        
    
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
