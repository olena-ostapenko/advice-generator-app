let butt = document.querySelector(".decor-circle")
on()

butt.addEventListener("click", function (e) {
  e.preventDefault();
  on();
  butt.classList.add("loading");
  setTimeout(() => {
    butt.classList.remove("loading");
  }, 1000);
})


function on() {
  fetch('https://api.adviceslip.com/advice')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let h = document.getElementById("advice")
      h.innerHTML = data.slip.advice
      let title = document.getElementById("title")
      title.innerHTML = ("advice# " + data.slip.id).toLocaleUpperCase()
        
    })
    .catch(function(error){
      console.log("error");
      let title = document.getElementById("title")
      title.innerHTML =  "Sorry, but service is not available"
    })
    .finally(()=> {
      // butt.classList.remove("loading");
    });
}

