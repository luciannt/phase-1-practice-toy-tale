let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
//Creates a new toy
function toyMaker(toys) {
  toys.forEach((toy) => {
    const collection = document.getElementById("toy-collection");

    const toyCard = document.createElement("div");
    const toyHeader = document.createElement("h2");
    const toyImage = document.createElement("img");
    const toyText = document.createElement("p");
    const toyButton = document.createElement("button");

    toyCard.className.add = "card";
    toyButton.className.add = "like-btn";

    toyImage.src = toy.image;
    toyButton.id = toy.id;

    toyHeader.textContent = toy.name;
    toyText.textContent = toy.likes + " " + "Likes";
    toyButton.textContent = "Like ❤️";

    collection.appendChild(toyCard);
    toyCard.appendChild(toyHeader);
    toyCard.appendChild(toyImage);
    toyCard.appendChild(toyText);
    toyCard.appendChild(toyButton);
  });
}

//Setting up fetch requests
fetch("http://localhost:3000/toys")
  .then((res) => res.json())
  .then((data) => {
    toyMaker(data);
  });

//fetch("http://localhost:3000/toys", {
//  method: "POST",
//  headers: {
//   "Content-Type": "application/json",
//    Accept: "application/json",
//  },
//  body: JSON.stringify(data),
//})
//  .then((res) => res.json)
//  .then((data) => console.log(data));

//Setting up toy likes event listener
//button.addEventListener("click", (e) => e.preventDefault());
