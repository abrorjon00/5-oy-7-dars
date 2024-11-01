const name = document.querySelector("#name00");
const name2 = document.querySelector("#name01");
const block = document.querySelector("#block");
const button = document.querySelector("#btn");
const image = document.querySelector("#image");

const age = document.querySelector('#age')
function createCard(data) {
  return `
    <div class="card">
    <img src="${data.img}" alt="userning rasmi">
    <h3>${data.name}</h3>
    <p>${data.surname}</p>
    <h4>${data.age}</h4>

</div>
    `;

}



button &&
  button.addEventListener("click", function (value) {

    value.preventDefault();

    let user = {
      img: image.value,
      name: name.value,
      surname: name2.value,
      age : age.value

    };
    let card = createCard(user);
    block.innerHTML += card;

  });

const card = document.querySelector(".cards")