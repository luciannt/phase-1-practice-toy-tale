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

function toyMaker(toys) {
  toys.forEach((toy) => {
    const collection = document.getElementById("toy-collection");

    const toyCard = document.createElement("div");
    const toyHeader = document.createElement("h2");
    const toyImage = document.createElement("img");
    const toyText = document.createElement("p");
    const toyButton = document.createElement("button");

    toyCard.className = "card";
    toyButton.className = "like-btn";

    toyImage.src = toy.image;
    toyButton.id = toy.id;

    toyHeader.textContent = "[input-text]";
    toyText.textContent = toy[likes] + " " + "Likes";
    toyButton.textContent = "Like ❤️";

    collection.appendChild(toyCard);
    toyCard.appendChild(toyHeader);
    toyCard.appendChild(toyImage);
    toyCard.appendChild(toyText);
    toyCard.appendChild(toyButton);
  });
}

fetch("http://localhost:3000/toys")
  .then((res) => res.json)
  .then((data) => {
    console.log(data);
  });
