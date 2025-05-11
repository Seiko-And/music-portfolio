// --------------- SUB MENU TIMER ---------------------
const subMenus = document.querySelectorAll('li.submenu');

for (let subMenu of subMenus) {
  let timer;
  let link = subMenu.querySelector('a');

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

};

