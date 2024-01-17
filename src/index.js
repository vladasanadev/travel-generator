function displayTravelDestinations(response) {
  new Typewriter("#travel-destinations", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 10,
  });
}

function generateTravelDestination(event) {
  event.preventDefault();
  let instructionsInputElement = document.querySelector("#instructions");
  let travelDestElement = document.querySelector("#travel-destinations");
  travelDestElement.innerHTML = `<div class="generating">⏳ Generating travel destinations for ${instructionsInputElement.value} 💟</div>`;

  let apiKey = "f3bca34ct89oa34003327040cfb10a10";
  let context =
    "You are an intelligent AI assistant who knows about the world. Please provide an answer in HTML format. Each answer in number form and one sentence detail for each. Answer in this form:<p>1. <strong>New York - </strong> details </p>.Don't include the title";
  let prompt = `What are the must-visit travel destinations in ${instructionsInputElement.value}?`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayTravelDestinations);
}

let travelDestFormElement = document.querySelector(
  "#travel-destinations-generator"
);
travelDestFormElement.addEventListener("submit", generateTravelDestination);
