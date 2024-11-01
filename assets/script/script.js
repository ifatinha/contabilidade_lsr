import { openMenu, closeMenu } from "./modules/initializeMenu.js";

document.addEventListener("DOMContentLoaded", () => {
  const functionsToCall = [
    { name: "openMenu", func: openMenu },
    { name: "closeMenu", func: closeMenu },
  ];

  functionsToCall.forEach(({ name, func }) => {
    if (typeof func === "function") {
      try {
        func();
      } catch (error) {
        console.log(`Erro ao executar ${name}: `, error);
      }
    } else {
      console.error(`${name} não é uma função válida.`);
    }
  });
});
