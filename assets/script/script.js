import { openMenu, closeMenu } from "./modules/initializeMenu.js";
import { carouselComments } from "./modules/carouselComments.js";
import { toTop } from "./modules/toTop.js";
import { animations } from "./modules/animations.js";

document.addEventListener("DOMContentLoaded", () => {
  const functionsToCall = [
    { name: "openMenu", func: openMenu },
    { name: "closeMenu", func: closeMenu },
    { name: "carouselComments", func: carouselComments },
    { name: "toTop", func: toTop },
    { name: "animations", func: animations },
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
