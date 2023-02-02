
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


  function CreateDiceRoller () {
    const button = document.getElementById("#roll").value

    localStorage.setItem("button", button);

  }
button.addEventListener('click', function(event){
    event.URL
});

const url = new URL(
    "https://dddice.com/api/1.0/roll"
);

const headers = {
    "Authorization": "Bearer {fAUODjw7EwBEVxtorbf0qTICaSmZ6Xfc5KLkWPyS}",
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "dice": [
        {
            "type": "D20",
            "theme": "dddice-red"
        },
        {
            "type": "D20",
            "theme": "dddice-red"
        }
    ],
    "external_id": "pariatur",
    "operator": {
        "k": "\"h2\"",
        "p": "suscipit",
        "rr": "aut",
        "ro": "et",
        "ra": "magni",
        "e": "rerum",
        "mi": 1633244.09,
        "ma": 58.63
    },
    "label": "\"Longbow damage with Hunter's Mark\"",
    "room": "HvvOlTl",
    "whisper": [
        213207.481552
    ]
};

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response => response.json());

