// --------------- SUB MENU TIMER ---------------------
const subMenus = document.querySelectorAll('li.submenu');
//  Screen size is less than 600px
let isMobile = window.innerWidth < 600; 
console.log(isMobile);

function menuTimer(){

  for (let subMenu of subMenus) {

    let timer;
    let link = subMenu.querySelector('a');
   
    if (isMobile){
      link.addEventListener('click', function() {
        console.log(link);
        console.log(subMenu);
        const isOpen = subMenu.classList.contains('open');
        if (isOpen){
          link.parentNode.classList.remove('open');
          link.setAttribute('aria-expanded', 'false');
        }
        else if (!isOpen){
          link.parentNode.classList.add('open');
          link.setAttribute('aria-expanded', 'true');
        }
      });
    }
    else{
      subMenu.addEventListener("mouseover", function() {
        clearTimeout(timer);
        subMenu.classList.add("open");
    
        if (link.parentNode.className == 'submenu open'){
          link.setAttribute('aria-expanded', 'true');
        }
      });
    
      subMenu.addEventListener("mouseout", function(){
        timer = setTimeout(function(){
          document.querySelector(".submenu.open").className = "submenu";
          if(link.parentNode.className == 'submenu'){
            link.setAttribute('aria-expanded', 'false');
          }
        }, 1500);
      
      });
    }
  
  };

}
menuTimer();

