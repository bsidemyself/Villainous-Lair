
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