var cmpt =0 ;
function menu(){
cmpt++;
const menuPhone = document.querySelector('#menu_telephone');
if(cmpt%2==1)  menuPhone.classList.add('show');
if(cmpt%2==0)  menuPhone.classList.remove('show');
}
