function toggleMenu() {
   document.getElementById("navLinks").classList.add("active");
}

function toggleClose() {
   document.getElementById("navLinks").classList.remove("active");
}

const words = ["Web Developer", "Designer", "Freelancer"];
let i = 0, j = 0, current = "", deleting = false;

const type = () => {
   current = words[i];
   if (deleting) {
      j--
   } else {
      j++
   }

   document.getElementById('typing').innerText = current.slice(0, j);

   if (!deleting && j == current.length) {
      deleting = true;
      setTimeout(type, 1000);
      return
   }

   if (deleting && j == 0) {
      deleting = false;
      i = (i + 1) % words.length;
   }

   setTimeout(type, deleting ? 50 : 100);
}

type()


