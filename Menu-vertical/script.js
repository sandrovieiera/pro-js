function acao(){


   let menu = document.getElementById('menu');

   if(menu.className === 'menu'){

    menu.className += ' menu-mobile'
   }
   else {
    menu.className = 'menu'
   }
}