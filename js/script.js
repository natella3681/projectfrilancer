
window.onload = function() {
    document.addEventListener('click', documentActions);

    // Actions(делегирование события click)

    function documentActions(e) {
        const targetElement = e.target;
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const menuItemHover = document.querySelectorAll('.menu__item._hover');

        if(window.innerWidth > 768 && isMobile) {
            if(targetElement.classList.contains('menu__arrow')) {
                targetElement.closest('.menu__item').classList.toggle('_hover');
            }
            if(!targetElement.closest('.menu__item') && menuItemHover.length > 0) {
                for(let i = 0; i < menuItemHover.length; i++) {
                    menuItemHover[i].classList.remove('_hover');
                }
            }
        }
        if(targetElement.classList.contains('search-form__icon')) {
            document.querySelector('.search-form').classList.toggle('_active');
        } else if(!targetElement.closest('.search-form') && document.querySelector('.search-form._active')) {
            document.querySelector('.search-form').classList.remove('_active');
        }
    }

    // бургер меню
    const iconMenu = document.querySelector('.icon-menu');
    const menuBody = document.querySelector('.menu__body');
    
    const handlerMenu = e => {
        const target = e.target;
        if (target.matches('.menu__link')) {
            toggleMenu();
        }
    }

    const toggleMenu = () => {
        menuBody.classList.toggle('_active');
        iconMenu.classList.toggle('_active');
    
        if (menuBody.classList.contains('_active')) {
            document.body.addEventListener('click', handlerMenu)
        } else {
            document.body.removeEventListener('click', handlerMenu)
        }
    };

    iconMenu.addEventListener('click', toggleMenu);
    // бургер меню кончилось

    // делаю чтобы пункты меню подвала при определенном разрешении открывались по нажатию кнопки

    const btns = document.querySelectorAll(".menu-footer__title");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const list = e.target.closest(".menu-footer__column").querySelector(".menu-footer__list");
     if(document.body.offsetWidth <= 760) {
       list.classList.toggle("active");
     }
  });
});
    /*const footerTitleBtns = document.querySelectorAll('.menu-footer__title');
    const footerLists = document.querySelectorAll('.menu-footer__list');
    const menuList = document.querySelector('.menu__list');

    footerTitleBtns.forEach(footerTitleBtn => {
        footerTitleBtn.addEventListener('click', (e) => {
          const target = e.target;
          if(target && document.body.offsetWidth <= 760) {
              console.log('work!');

          footerLists.forEach((footerList) => {
              if(getComputedStyle(footerList).display === 'none') {
                footerList.classList.add('active');
              } else {
                footerList.classList.remove('active');
              }
            })
          }
         })
       })

    // подпункты меню
    /*const menuItems = document.querySelectorAll('.menu__item');
    const menuSubLists = document.querySelectorAll('.menu__sub-list');

    menuItems.forEach((btn,index) => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('_active')) {
                btn.classList.remove('_active');
                menuSubLists[index].classList.add('_hidden');
            } else {
                menuSubLists.forEach((featureSubList) => {
                    featureSubList.classList.add('_hidden');
                })
                menuItems.forEach((menuItem) => {
                    menuItem.classList.remove('_active');
                })
                menuSubLists[index].classList.remove('_hidden');
                btn.classList.add('_active');
            }
        })
    })*/
    
    


}
