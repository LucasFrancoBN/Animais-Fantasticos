import ScrollSuave from "./modules/scroll-suave.js";
import initTabNav from "./modules/tab.js";
import initAccordion from "./modules/accordion.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";
import initModal from "./modules/modal.js";
import initToolTipBox from "./modules/tooltip.js";
import initDropDownMenu from "./modules/dropdown.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave("[data-menu='suave'] a[href^='#']");
scrollSuave.init();

initTabNav();
initAccordion();
initAnimacaoScroll();
initModal();
initToolTipBox();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
