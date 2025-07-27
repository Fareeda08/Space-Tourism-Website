const agbaDiv = document.querySelector(".agba-div");
const htmlCode = `   <main class="MOON">
        <img src="../IMAGES/destination/image-moon.png" alt="" />

        <div class="destinations-intro">
          <div class="destinations">
            <p class="current-planet" id="moon">MOON</p>
            <p id="mars">MARS</p>
            <p id="europa">EUROPA</p>
            <p id="titan">TITAN</p>
          </div>

          <p class="current-destination">MOON</p>

          <p class="page-intro">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>

          <hr />

          <div class="distance_and_time">
            <div>
              <p class="distance">AVG. DISTANCE</p>
              <p class="distance_number">384,400 KM</p>
            </div>
            <div>
              <p class="time">EST. TRAVEL TIME</p>
              <p class="time_number">3 DAYS</p>
            </div>
          </div>
        </div>
      </main>

      <main class="MARS">
        <img src="../IMAGES/destination/image-mars.png" alt="" />

        <div class="destinations-intro">
          <div class="destinations">
            <p id="moon">MOON</p>
            <p class="current-planet" id="mars">MARS</p>
            <p id="europa">EUROPA</p>
            <p id="titan">TITAN</p>
          </div>

          <p class="current-destination">MARS</p>

          <p class="page-intro">
            Don’t forget to pack your hiking boots. You’ll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It’s two and a half times the size of Everest!
          </p>

          <hr />

          <div class="distance_and_time">
            <div>
              <p class="distance">AVG. DISTANCE</p>
              <p class="distance_number">225 MIL. KM</p>
            </div>
            <div>
              <p class="time">EST. TRAVEL TIME</p>
              <p class="time_number">9 MONTHS</p>
            </div>
          </div>
        </div>
      </main>

      <main class="EUROPA">
        <img src="../IMAGES/destination/image-europa.png" alt="" />

        <div class="destinations-intro">
          <div class="destinations">
            <p id="moon">MOON</p>
            <p id="mars">MARS</p>
            <p class="current-planet" id="europa">EUROPA</p>
            <p id="titan">TITAN</p>
          </div>

          <p class="current-destination">EUROPA</p>

          <p class="page-intro">
            The smallest of the four Galilean moons orbiting Jupiter, Europa is
            a winter lover’s dream. With an icy surface, it’s perfect for a bit
            of ice skating, curling, hockey, or simple relaxation in your snug
            wintery cabin.
          </p>

          <hr />

          <div class="distance_and_time">
            <div>
              <p class="distance">AVG. DISTANCE</p>
              <p class="distance_number">628 MIL. KM</p>
            </div>
            <div>
              <p class="time">EST. TRAVEL TIME</p>
              <p class="time_number">3 YEARS</p>
            </div>
          </div>
        </div>
      </main>

      <main class="TITAN">
        <img src="../IMAGES/destination/image-titan.png" alt="" />

        <div class="destinations-intro">
          <div class="destinations">
            <p id="moon">MOON</p>
            <p id="mars">MARS</p>
            <p id="europa">EUROPA</p>
            <p class="current-planet" id="titan">TITAN</p>
          </div>

          <p class="current-destination">TITAN</p>

          <p class="page-intro">
            The only moon known to have a dense atmosphere other than Earth,
            Titan is a home away from home (just a few hundred degrees colder!).
            As a bonus, you get striking views of the Rings of Saturn.
          </p>

          <hr />

          <div class="distance_and_time">
            <div>
              <p class="distance">AVG. DISTANCE</p>
              <p class="distance_number">1.6 BIL. KM</p>
            </div>
            <div>
              <p class="time">EST. TRAVEL TIME</p>
              <p class="time_number">7 YEARS</p>
            </div>
          </div>
        </div>
      </main>`;

agbaDiv.insertAdjacentHTML("beforebegin", htmlCode);

const destinationsBtn = document.querySelectorAll(".destinations p");
const destinations = ["MOON", "MARS", "EUROPA", "TITAN"];
const chosenDestination = ["MOON"];

destinationsBtn.forEach((destinationBtn) => {
  destinationBtn.addEventListener("click", () => {
    Destination(destinationBtn.textContent);
  });
});

let element;
function Destination(clickedDestination) {
  for (let i = 0; i < destinations.length; i++) {
    element = destinations[i];
    if (clickedDestination === element) {
      chosenDestination.push(clickedDestination);
    }
  }

  if (chosenDestination.length === 2) {
    document
      .querySelector(`.${chosenDestination[chosenDestination.length - 2]}`)
      .classList.add("previous-destination");

    document
      .querySelector(`.${chosenDestination[chosenDestination.length - 1]}`)
      .classList.add("chosen-destination");
  } else {
    document
      .querySelector(`.${chosenDestination[chosenDestination.length - 2]}`)
      .classList.remove("chosen-destination");

    document
      .querySelector(`.${chosenDestination[chosenDestination.length - 2]}`)
      .classList.add("previous-destination");

    document
      .querySelector(`.${chosenDestination[chosenDestination.length - 1]}`)
      .classList.remove("previous-destination");

    document
      .querySelector(`.${chosenDestination[chosenDestination.length - 1]}`)
      .classList.add("chosen-destination");
  }
}

function delayDisplay() {}
