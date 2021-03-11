var navMenu = document.getElementsByClassName("navMenu");

function handleClick(event) {
  console.log(event.target);
  console.log(event.target.classList[1]);

  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
  } else if (event.target.classList[1] !== "clicked") {
    for (var i = 0; i < navMenu.length; i++) {
      navMenu[i].classList.remove("clicked");
    }

    event.target.classList.add("clicked");
  }
}

function init() {
  for (var i = 0; i < navMenu.length; i++) {
    navMenu[i].addEventListener("click", handleClick);
  }
}

init();
