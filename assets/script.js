
  function createCharacter() {
    // Get the character information from the form
    const charName = document.getElementById("char-name").value;
    const charClass = document.getElementById("char-class").value;

    // Store the character information in local storage
    localStorage.setItem("charName", charName);
    localStorage.setItem("charClass", charClass);

    // Display the character information on the page
    const charInfo = document.getElementById("char-info");
    charInfo.innerHTML = `Name: ${charName}<br>Class: ${charClass}`;
  }

  const form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    createCharacter();
  });
