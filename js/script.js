//import { getData } from './getData.js';


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

        if(targetElement.classList.contains('products__more')) {
            getProducts(targetElement);
            e.preventDefault();
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

    // header

    const headerElem = document.querySelector('.header');

    const callback = function(entries,observer) {
        if(entries[0].isIntersecting) {
            headerElem.classList.add('_scroll');
            }
    };

    const headerObserver = new IntersectionObserver(callback);
    headerObserver.observe(headerElem);

    /*---------- получение данных из json файла----------;*/

    async function getProducts(button) {
        if(!button.classList.contains('_hold')) {
            button.classList.add('_hold');
            const file = "json/products.json";
            let response = await fetch(file, {
                method: "GET"
            });
            if(response.ok) {
                let result = await response.json();
                loadProducts(result);
                button.classList.remove('_hold');
                button.remove();
            } else {
                alert("Ошибка");
            }
        }
    }

    function loadProducts(data) {
        const productsItems = document.querySelector('.products__items');

        data.products.forEach(item => {
            const productId = item.id;
            const productUrl = item.url;
            const productImage = item.image;
            const productTitle = item.title;
            const productText = item.text;
            const productPrice = item.price;
            const productOldPrice = item.priceOld;
            const productShareUrl = item.shareUrl;
            const productLikeUrl = item.likeUrl;
            const productLabels = item.labels;

            let productTemplateStart = `<article data-pid="${productId}" class="products__item item-product">`;
			let productTemplateEnd = `</article>`;

			let productTemplateLabels = '';
			if (productLabels) {
				let productTemplateLabelsStart = `<div class="item-product__labels">`;
				let productTemplateLabelsEnd = `</div>`;
				let productTemplateLabelsContent = '';

				productLabels.forEach(labelItem => {
					productTemplateLabelsContent += `<div class="item-product__label item-product__label_${labelItem.type}">${labelItem.value}</div>`;
				});

				productTemplateLabels += productTemplateLabelsStart;
				productTemplateLabels += productTemplateLabelsContent;
				productTemplateLabels += productTemplateLabelsEnd;
			}

			let productTemplateImage = `
		<a href="${productUrl}" class="item-product__image _ibg">
			<img src="img/products/${productImage}" alt="${productTitle}">
		</a>
	`;

			let productTemplateBodyStart = `<div class="item-product__body">`;
			let productTemplateBodyEnd = `</div>`;

			let productTemplateContent = `
		<div class="item-product__content">
			<h3 class="item-product__title">${productTitle}</h3>
			<div class="item-product__text">${productText}</div>
		</div>
	`;

			let productTemplatePrices = '';
			let productTemplatePricesStart = `<div class="item-product__prices">`;
			let productTemplatePricesCurrent = `<div class="item-product__price">Rp ${productPrice}</div>`;
			let productTemplatePricesOld = `<div class="item-product__price item-product__price_old">Rp ${productOldPrice}</div>`;
			let productTemplatePricesEnd = `</div>`;

			productTemplatePrices = productTemplatePricesStart;
			productTemplatePrices += productTemplatePricesCurrent;
			if (productOldPrice) {
				productTemplatePrices += productTemplatePricesOld;
			}
			productTemplatePrices += productTemplatePricesEnd;

			let productTemplateActions = `
		<div class="item-product__actions actions-product">
			<div class="actions-product__body">
				<a href="" class="actions-product__button btn btn_white">Add to cart</a>
				<a href="${productShareUrl}" class="actions-product__link _icon-share">Share</a>
				<a href="${productLikeUrl}" class="actions-product__link _icon-favorite">Like</a>
			</div>
		</div>
	`;

			let productTemplateBody = '';
			productTemplateBody += productTemplateBodyStart;
			productTemplateBody += productTemplateContent;
			productTemplateBody += productTemplatePrices;
			productTemplateBody += productTemplateActions;
			productTemplateBody += productTemplateBodyEnd;

			let productTemplate = '';
			productTemplate += productTemplateStart;
			productTemplate += productTemplateLabels;
			productTemplate += productTemplateImage;
			productTemplate += productTemplateBody;
			productTemplate += productTemplateEnd;

            productsItems.insertAdjacentHTML('beforeend', productTemplate);
        })
    }

    /*var requestURL = 'json/products.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var products = request.response;
        itemsList(products);
        showHeroes(products);
      }

      function itemsList(jsonObj) {
        console.log(jsonObj['products']);
      }
    
      function showHeroes(jsonObj) {
        var heroes = jsonObj['products'];
        for (var i = 0; i < heroes.length; i++) {
            console.log(heroes[i].id);
            var superPowers = heroes[i].labels;
            for (var j = 0; j < superPowers.length; j++) {
                console.log(superPowers[j].type);
            }
        }
      }*/

    

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
