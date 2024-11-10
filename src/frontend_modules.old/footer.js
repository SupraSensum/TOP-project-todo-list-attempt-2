import StyleVariables from "./style-variables.js";

export default function () {
   const footer = document.querySelector("footer");

   footer.style.backgroundColor = StyleVariables.celadon;

   console.log('footer');
}