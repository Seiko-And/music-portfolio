/*---------------------------------------------------
    File name: menu.js
    Display the submenu and keeps it open for 1.5s 
    after the user moves the mouse out
----------------------------------------------------*/
// li elements that have submenus
const subMenus = document.querySelectorAll('li.submenu');
//  Screen size is less than 768px
let isMobile = window.innerWidth < 768; 
console.log(window.innerWidth);

function menuTimer(){

  for (let subMenu of subMenus) {

    let timer;
    let link = subMenu.querySelector('a');

    // Check if the screen width is less than 768px
    if (isMobile){
      // If it is the mobile size, use click event 
      link.addEventListener('click', function() {
        // Check if the submenu is opened
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
    } // If it is not mobile size, use mouseover event
    else{
      subMenu.addEventListener("mouseover", function() {
        clearTimeout(timer);  // Clear the timer
        subMenu.classList.add("open");  
        // If the submenu is opend
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

