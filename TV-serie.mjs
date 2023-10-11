import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let locatie = "";

function plaatsTVSerie(serie) {
  switch (serie) {
    case "Thuis":
      locatie = "Ternat";
      break;
    case "Friends":
      locatie = "NY";
      break;
    default:
      console.log("Sorry, ik weet niet waar de serie " + serie + " zich afspeelt");
      break;
  }
  return locatie;
}

let serie = await userInput.question("Geef een TV-serie: ");

plaatsTVSerie(serie);

if (locatie != "") {
  console.log("Je gekozen TV-serie vind in " + locatie + " plaats.");
}

process.exit();
