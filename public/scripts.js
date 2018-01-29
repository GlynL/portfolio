const modals = document.querySelector("#modals");
const portfolioHydrohealth = document.querySelector("#portfolio-hydrohealth");
const modalClose = document.querySelector(".modal__close");

handlePortfolioClick = e => {
  modals.classList.remove("hide");
  modalClose.addEventListener("click", () => modals.classList.add("hide"));
  window.addEventListener("click", e => {
    if (e.target.id === "modals") modals.classList.add("hide");
  });
};

portfolioHydrohealth.addEventListener("click", handlePortfolioClick);
