const techBtn = document.querySelectorAll(".next p");
const techMachines = ["LAUNCH-VEHICLE", "SPACEPORT", "SPACE-CAPSULE"];
const chosenTech = ["LAUNCH-VEHICLE"];
const destinations = document.querySelectorAll("main");

techBtn.forEach((tech) => {
  tech.addEventListener("click", () => {
    Technology(tech.id);
  });
});

let element;
function Technology(clickedTech) {
  for (let i = 0; i < techMachines.length; i++) {
    element = techMachines[i];

    if (clickedTech === element) {
      chosenTech.push(clickedTech);
    }
  }

  if (chosenTech.length === 2) {
    document
      .querySelector(`.${chosenTech[chosenTech.length - 2]}`)
      .classList.add("previous-tech");

    document
      .querySelector(`.${chosenTech[chosenTech.length - 1]}`)
      .classList.add("chosen-tech");
  } else {
    document
      .querySelector(`.${chosenTech[chosenTech.length - 2]}`)
      .classList.remove("chosen-tech");

    document
      .querySelector(`.${chosenTech[chosenTech.length - 2]}`)
      .classList.add("previous-tech");

    document
      .querySelector(`.${chosenTech[chosenTech.length - 1]}`)
      .classList.remove("previous-tech");
  }

  document
    .querySelector(`.${chosenTech[chosenTech.length - 1]}`)
    .classList.add("chosen-tech");
}
