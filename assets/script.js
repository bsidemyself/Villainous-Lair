
  function createCharacter() {

    // Get the character information from the form
    const charName = document.getElementById("char-name").value;
    const charRace = document.getElementById("char-race").value;
    const charClass = document.getElementById("char-class").value;
    const charLevel = document.getElementById("char-level").value;
    const charAlignment = document.getElementById("char-alignment").value;


    // Store the character information in local storage
    localStorage.setItem("charName", charName);
    localStorage.setItem("charRace", charRace);
    localStorage.setItem("charClass", charClass);
    localStorage.setItem("charLevel", charLevel);
    localStorage.setItem("charAlignment", charAlignment);

    // Display the character information on the page and returns an alert if there is nothing in the name or level.
    // The syntax ${} evaluates the value and inserts it into the innerHTML
    const charCard = document.getElementById("char-card");
    if (charName === '' && charLevel === '') {
        window.alert("Please enter a name and level.");
      } else if (charName === '') {
        window.alert("Please enter a name.");
      } else if (charLevel === '') {
        window.alert("Please enter a level.");
      } else {
        charCard.innerHTML = `
          <p>Name: <label id="char-name">${charName}</label></p>
          <p>Race: <label id="char-race">${charRace}</label></p>
          <p>Class: <label id="char-class">${charClass}</label></p>
          <p>Level: <label id="char-level">${charLevel}</label></p>
          <p>Alignment: <label id="char-alignment">${charAlignment}</label></p>
        `;
      }
    }
    // Displays the character information in the card when you click submit.
  const form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    createCharacter();
    
  });

