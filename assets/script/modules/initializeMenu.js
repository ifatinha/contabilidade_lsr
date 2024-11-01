import { updateAriaAttributes } from "../util/ariaAttributesUtils.js";

const getElements = () => ({
  modal: document.querySelector("#modal"),
  openButton: document.querySelector("#navbarOpenButton"),
  navbar: document.querySelector("#headerNav"),
  closeButton: document.querySelector("#navbarCloseButton"),
});

const handleToggle = (event) => {
  if (event?.type === "touchstart") event.preventDefault();

  const { modal, openButton, navbar } = getElements();

  if (!modal || !openButton) {
    console.warn("Elementos não encontrados.");
    return;
  }

  [modal, openButton, navbar].forEach((element, idx) => {
    const classNames = [
      "js-open-modal",
      "burger__active",
      "navibar__activated",
    ];
    element.classList.toggle(classNames[idx]);
  });

  const isOpenMenu = openButton.classList.contains("burger__active");
  updateAriaAttributes(isOpenMenu, openButton);
  navbar.setAttribute("tabindex", "-1");
};

//Função que abre o menu
export const openMenu = () => {
  const { openButton } = getElements();

  if (!openButton) {
    console.warn("Elemento não encontrado.");
  }

  ["click", "touchstart"].forEach((eventType) => {
    openButton.addEventListener(eventType, handleToggle);
  });
};

const setupCloseMenuListeners = (element) => {
  ["click", "touchstart"].forEach((eventType) => {
    element.addEventListener(eventType, handleToggle);
  });
};

//Função que fecha o modal clicando fora dele
export const closeMenu = () => {
  const { modal, closeButton } = getElements();

  if (!modal || !closeButton) {
    console.log("Elemento não encontrado.");
    return;
  }

  setupCloseMenuListeners(modal);
  setupCloseMenuListeners(closeButton);
  closeButton.focus();
};

// Lógica para manter o foco dentro do modal
// const trapFocus = (event) => {
//   const focusableElements = navbar.querySelectorAll(
//     'button, [href], input, [tabindex]:not([tabindex="-1"])'
//   );
//   const firstElement = focusableElements[0];
//   const lastElement = focusableElements[focusableElements.length - 1];

//   if (event.key === "Tab") {
//     if (event.shiftKey) {
//       // Shift + Tab
//       if (document.activeElement === firstElement) {
//         lastElement.focus();
//         event.preventDefault();
//       }
//     } else {
//       // Tab
//       if (document.activeElement === lastElement) {
//         firstElement.focus();
//         event.preventDefault();
//       }
//     }
//   }
// };

// navbar.addEventListener("keydown", trapFocus);
