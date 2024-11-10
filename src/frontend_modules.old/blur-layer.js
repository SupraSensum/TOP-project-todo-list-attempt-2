import "./blur-layer.css";

export default class BlurLayer {
   constructor() {
      
   }
   
   static create(zIndex = 9998, id = "overlay") {
      if (!document.getElementById(id)) {
         const overlay = document.createElement('div');
         overlay.id = id;
         overlay.style.zIndex = zIndex;
         document.body.appendChild(overlay);
      
      } else {
         console.log('blur layer already exists');
      }
   }

   static remove(id = "overlay") {
      const overlay = document.getElementById(id);
      if (overlay) {
         overlay.remove();
      } else {
         console.log('blur layer does not exist');
      }
   }
}

