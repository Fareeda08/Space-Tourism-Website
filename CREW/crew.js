const crewBtn = document.querySelectorAll(".next button");
const crewMembers = [
  "COMMANDER",
  "PILOT",
  "MISSION-SPECIALIST",
  "FLIGHT-ENGINEER",
];

const chosenCrew = ["COMMANDER"];
crewBtn.forEach((crew) => {
  crew.addEventListener("click", () => {
    Crew(crew.className.slice(0, crew.className.length - 4));
  });
});

let element;
function Crew(clickedCrew) {
  for (let i = 0; i < crewMembers.length; i++) {
    element = crewMembers[i];

    if (clickedCrew === element) {
      chosenCrew.push(clickedCrew);
    }
  }

  if (chosenCrew.length === 2) {
    document
      .querySelector(`.${chosenCrew[chosenCrew.length - 2]}`)
      .classList.add("previous-crew");

    document
      .querySelector(`.${chosenCrew[chosenCrew.length - 1]}`)
      .classList.add("chosen-crew");
  } else {
    document
      .querySelector(`.${chosenCrew[chosenCrew.length - 2]}`)
      .classList.remove("chosen-crew");

    document
      .querySelector(`.${chosenCrew[chosenCrew.length - 2]}`)
      .classList.add("previous-crew");

    document
      .querySelector(`.${chosenCrew[chosenCrew.length - 1]}`)
      .classList.remove("previous-crew");
  }

  document
    .querySelector(`.${chosenCrew[chosenCrew.length - 1]}`)
    .classList.add("chosen-crew");
}
