fetch("monsters.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((monsters) => {
    monsters.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
    });

    const ulElement = document.getElementById("monsters");
    monsters.forEach(({ imageUrl, name }) => {
      const liElement = document.createElement("li");
      const imgElement = document.createElement("img");
      imgElement.src = imageUrl;
      imgElement.alt = name;

      const nameSpan = document.createElement("span");
      nameSpan.textContent = name;

      liElement.appendChild(imgElement);
      liElement.appendChild(nameSpan);
      ulElement.appendChild(liElement);
    });
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
