const toggleButton = document.getElementById("themetoggle");
const icon = toggleButton.querySelector("i");

toggleButton.addEventListener("click", function ()  {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
   icon.classList.remove("fa-toggle-off");
   icon.classList.add("fa-toggle-on");

   
  } else {
    icon.classList.remove("fa-toggle-on");
   icon.classList.add("fa-toggle-off");
   
  }
});
