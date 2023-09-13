const search_footballer = () => {
  const Input = document.querySelector("input").value.toUpperCase(),
    footballer_profile = document.querySelectorAll(".cont");
  for (let index = 0; index < footballer_profile.length; index++) {
    const footballer_name = footballer_profile[index].innerText;
    if (footballer_name.toUpperCase().indexOf(Input) > -1)
      footballer_profile[index].style.display = "";
    else footballer_profile[index].style.display = "none";
  }
};
async function fetch_item() {
  const response = await fetch("football-data.json");
  const data = await response.json();
  console.log(data);
  data.forEach((f) => {
    const card = document.createElement("div");
    card.classList.add("cont");
    card.innerHTML = `
    <img src="${f.photo}" alt="${f.alt}">
    <div class="content">
        <h2>${f.name}</h2>
    </div>
    `;
    document.querySelector("main").appendChild(card)
  });
}
fetch_item();

