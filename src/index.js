function generateTravelDestination(event) {
  event.preventDefault();

  new Typewriter("#travel-destinations", {
    strings: `<strong>New York City:</strong> The bustling metropolis with iconic landmarks and
          diverse neighborhoods.`,
    autoStart: true,
    cursor: "",
    delay: 10,
  });
}

let travelDestFormElement = document.querySelector(
  "#travel-destinations-generator"
);
travelDestFormElement.addEventListener("submit", generateTravelDestination);
