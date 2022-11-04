<<<<<<< HEAD
import initTabNav from "./modules/tab.js";
import initAccordion from "./modules/accordion.js";
import initScrollSuave from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";
import initModal from "./modules/modal.js";
import initToolTipBox from "./modules/tooltip.js";
=======
import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tab.js";
import Modal from "./modules/modal.js";
import ToolTipBox from "./modules/tooltip.js";
>>>>>>> 0962e3ea0ab15abdcd1edae78986d447fb06a8db
import initDropDownMenu from "./modules/dropdown.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
<<<<<<< HEAD

initTabNav();
initAccordion();
initScrollSuave();
initAnimacaoScroll();
initModal();
initToolTipBox();
=======
import initAnimacaoScroll from "./modules/scroll-animacao.js";

const scrollSuave = new ScrollSuave("[data-menu='suave'] a[href^='#']");
scrollSuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new ToolTipBox("[data-tooltip]");
tooltip.init();

>>>>>>> 0962e3ea0ab15abdcd1edae78986d447fb06a8db
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
<<<<<<< HEAD
=======
initAnimacaoScroll();
>>>>>>> 0962e3ea0ab15abdcd1edae78986d447fb06a8db
