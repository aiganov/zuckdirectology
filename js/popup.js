    var link = document.querySelectorAll(".callback");
    var popup = document.querySelector(".modal-content");
    var close = popup.querySelector(".modal-close");
    var overlay = document.querySelector(".modal-overlay");
    var form = popup.querySelector("form");

      link.forEach(function (entry) {
        entry.addEventListener("click", function (event){
          event.preventDefault();
          popup.classList.add("modal-content-show");
          overlay.classList.add("modal-overlay-show");
        });
      });


      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
        overlay.classList.remove("modal-overlay-show");
        popup.classList.remove("modal-error");
      });



      overlay.addEventListener("click", function() {
        overlay.classList.remove("modal-overlay-show");
        popup.classList.remove("modal-content-show");

      });
      



