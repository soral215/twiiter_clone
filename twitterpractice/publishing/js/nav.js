const search = document.querySelector(".search"),
  searchInput = document.querySelector(".searchInput"),
  xbtn = document.querySelector(".xbtn"),
  magnifier = document.querySelector(".magnifier"),
  searchText = document.querySelector(".searchText");

const searchResultList = document.querySelector(".searchResultList"),
  searchResultSet = document.querySelector(".searchREsultSet");

function searchActive() {
  searchInput.value = "";
  const isActive = searchInput.classList.contains("active");
  magnifier.classList = isActive ? "magnifier" : "magnifier active";
  xbtn.classList = isActive ? "xbtn" : "xbtn active";
  search.classList = isActive ? "search" : "search active";
  searchInput.classList = isActive ? "searchInput" : "searchInput active";
}

function init() {
  searchInput.addEventListener("focus", searchActive);
  searchInput.addEventListener("blur", searchActive);
  searchInput.addEventListener("blur", cleanData);
  searchInput.addEventListener("keyup", searchId);
  xbtn.addEventListener("click", searchActive);
  xbtn.addEventListener("click", cleanData);
}

init();
