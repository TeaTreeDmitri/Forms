

// const form = document.querySelector("#cardForm");
// const cardNo = document.querySelector("#cardNumber");
// const month = document.querySelector("#cardMonth");
// const year = document.querySelector("#cardYear");
// const submit = document.querySelector("#submit");

const f = document.querySelector("form");
const rating = document.querySelector("#rating")

//global eventlistenings
rating.addEventListener("input", ratingFeedback)


//*validation
// cardNo.addEventListener("input", validateNumber)

// function validateNumber() {
//     console.log("validateNumber");
//     if (cardNo.value.length > 15) {
//         parseInt(cardNo.value);
//         month.focus();
//     } 
//     month.addEventListener("input", validateMonth);
// }

// function validateMonth() {
//     console.log("validateDate");
//     if (month.value.length > 1) {
//         parseInt(month.value);
//         year.focus();
//     }
//     year.addEventListener("input", validateYear); 
// }

// function validateYear() {
//     console.log("validateYear");
//     if (year.value.length > 1) {
//         parseInt(year.value);
//         submit.focus();
//     }
// }

//* rating feedback

function ratingFeedback() {
    document.querySelector("#ratingFeedback").textContent = rating.value;
}


//* data submission

const url= "https://gvjlzorydcthfymfoodj.supabase.co/rest/v1/TV_Shows"

const headers = {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2amx6b3J5ZGN0aGZ5bWZvb2RqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MDQsImV4cCI6MTk4MjE3NDcwNH0.cX9zyqXQySDF_AGlZcYstZJJ2IiN6neRgv_98dLPCjw",
      Authorization: "Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2amx6b3J5ZGN0aGZ5bWZvb2RqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjU5ODcwNCwiZXhwIjoxOTgyMTc0NzA0fQ.uaQ2WR7QdjG2c8KbUcOOtd8IzPruYyy6iReusOFDtZ4",
      "Content-Type": "application/json",
      Prefer: "return=representation",
  };

  function addShow(newShow) {
    const options = {
        method: "POST",
        headers: headers, 
        body: JSON.stringify(newShow),
    
    };
        console.log("show sent: ", newShow)
    fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
            console.log("show recieved: ", data);
        });
  }




f.addEventListener("submit", (e) => {
    e.preventDefault();
    let ongoing = false;
    if (f.elements.ongoing.value === "yes") {
        ongoing = true;
    }

    let genresArr = f.elements.genre.value.split(",");

    const newObject = {
        genres: genresArr,
        name: f.elements.name.value,
         seasons: f.elements.seasons.value,
         rating: f.elements.rating.value,
         ongoing: ongoing,
         director: f.elements.director


    };
    addShow(newObject)
})

// 	{
// 		"genres": [
// 			"Horror",
// 			"Romance"
// 		],
// 		"name": "Twilight",
// 		"seasons": 1,
// 		"rating": 5,
// 		"ongoing": false,
// 		"director": "Ed Sheeran"
// 	}