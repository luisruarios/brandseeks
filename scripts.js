// Sidebar
const btns = document.querySelectorAll(".mobile-menu-button");
const sidebar = document.querySelector(".side-bar");
const el_parent = document.getElementById('parent');

// add our event listener for the click
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    sidebar.classList.toggle("translate-x-full");
    sidebar.classList.contains("bg-black") ? sidebar.classList.remove("bg-black") : setTimeout(() => {
      sidebar.classList.add("bg-black");
      sidebar.classList.add("bg-opacity-80");
    }, 110)


  })
});


// To click just the black background and ignore the white child //
el_parent.addEventListener('click', () => {
  sidebar.classList.toggle("translate-x-full");
  sidebar.classList.contains("bg-black") ? sidebar.classList.remove("bg-black") : setTimeout(() => {
    sidebar.classList.add("bg-black");
    sidebar.classList.add("bg-opacity-80");
  }, 110)
  document.getElementById('child').addEventListener('click', e => e.stopPropagation());
});

