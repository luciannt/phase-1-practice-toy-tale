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

function toyCreator(toys) {
  const collection = document.getElementById("toy-collection");

  toys.forEach((toy) => {
    const card = document.createElement("div");
    const cardHeader = document.createElement("h2");
    const cardImage = document.createElement("img");
    const cardText = document.createElement("p");
    const cardButton = document.createElement("button");

    card.classList.add("card");
    cardImage.classList.add("toy-avatar");
    cardButton.classList.add("like-btn");

    cardButton.id = toy.id;
    cardImage.src = toy.image;

    cardHeader.textContent = toy.name;
    cardText.textContent = toy.likes;
    cardButton.textContent = "Like ❤️";
    console.log(collection);
    collection.appendChild(cardHeader);
    card.appendChild(cardImage);
    card.appendChild(cardText);
    card.appendChild(cardButton);
    collection.appendChild(card);
  });
}

fetch("http://localhost:3000/toys")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    toyCreator(data);
  });

function postToy() {
  const data = {
    name: document.querySelector('input[name="name"]').value,
    image: document.querySelector('input[name="image"]').value,
    likes: 0,
  };

  fetch("http://localhost:3000/toys", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  }).then(() => {
    toyCreator([data]);
  });
}

document
  .querySelector('input[type="submit"]')
  .addEventListener("click", postToy);

function toyLikes(e) {
  const data = {
    likes: 0,
  };

  const id = e.target.id;

  fetch("http://localhost:3000/toys", {
    method: "PATCH",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  }).then(() => {
    toyCreator([data]);
  });
}
