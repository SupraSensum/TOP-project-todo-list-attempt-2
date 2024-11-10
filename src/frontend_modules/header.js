import StyleVariables from "./style-variables.js";

export default function () {
   const header = document.querySelector("header");

   header.style.backgroundColor = StyleVariables.celadon;

   console.log('header');
}