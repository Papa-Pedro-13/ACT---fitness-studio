/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
// import AOS from 'aos'
// import Swiper, { Navigation, Pagination } from 'swiper';


import BaseHelpers from './helpers/BaseHelpers.js';
import PopupManager from './modules/PopupManager';
import BurgerMenu from './modules/BurgerMenu';
import Tabs from './modules/Tabs';
import Accordion from './modules/Accordion.js';

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager();

/**
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**
 * Параллакс мышей
 * */
// new MousePRLX();

window.onload = () => {

	const swiperRelax = new Swiper(".relax__slider", {
		autoplay: {
			delay: 2500,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		}
	});

	const swiper = new Swiper(".gallery__slider", {
		slidesPerView: "auto",
		spaceBetween: 25,
		grabCursor: true,
		autoplay: {
			delay: 2500,
		},
		breakpoints: {
			830: {
				spaceBetween: 50,
			},
		},
	});



	const isHoverableDevice = window.matchMedia('(hover: hover) and (pointer: fine)')
	let eventMouse = isHoverableDevice ? "mouseenter" : 'click';
	let dropdownBtn = document.querySelector(".header__dropdown");

	if (isHoverableDevice) {
		dropdownBtn.addEventListener("mouseleave", () => {
			dropdownBtn.classList.remove("active")
		})
	}
	dropdownBtn.addEventListener(eventMouse, () => {
		dropdownBtn.classList.toggle("active")
	})
}

// new Tabs('tabs-example', {
// 	onChange: (data) => {
// 		console.log(data);
// 	},
// });

// new Accordion('.accordion', {
// 	shouldOpenAll: false, // true
// 	defaultOpen: [], // [0,1]
// 	collapsedClass: 'open',
// });