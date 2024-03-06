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
      const anchorElement = document.createElement("a");
      anchorElement.href = `https://www.google.com/search?q=mhr+${encodeURIComponent(name)}`;
      anchorElement.target = "_blank";

      const liElement = document.createElement("li");
      const imgElement = document.createElement("img");
      imgElement.src = imageUrl;
      imgElement.alt = name;

      const nameSpan = document.createElement("span");
      nameSpan.textContent = name;

      ulElement.appendChild(liElement);
      liElement.appendChild(anchorElement);
      anchorElement.appendChild(imgElement);
      anchorElement.appendChild(nameSpan);
    });
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
