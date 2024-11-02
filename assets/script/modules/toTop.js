export const toTop = () => {
  const button = document.querySelector("#scrollToTopButton");

  if (!button) return;

  const handleTop = (event) => {
    if (event?.type === "touchstart") event.preventDefault();

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleButtonVisibility = () => {
    const shouldShowButton =
      document.body.scrollTop > 500 || document.documentElement.scrollTop > 500;

    button.classList.toggle("burger__button-visible", shouldShowButton);
  };

  ["touchstar", "click"].forEach((eventType) => {
    button.addEventListener(eventType, handleTop);
  });

  window.addEventListener("scroll", toggleButtonVisibility);
};
