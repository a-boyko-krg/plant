let acc = document.getElementsByClassName('faq__accordion');

for (let i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.display === "block") {
         panel.style.display = "none";
      } else {
         panel.style.display = "block";
      }
   });
}

let activeArticle = document.querySelectorAll('.articles__card');
activeArticle.forEach((item) => {
   item.addEventListener("click", function () {
      item.classList.toggle("active");
   });
});






