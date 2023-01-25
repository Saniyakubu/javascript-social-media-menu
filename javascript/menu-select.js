const menu = document.querySelector(".menu");
const lists = document.querySelector(".list");
const liEl = document.querySelectorAll("li");
const title = document.querySelector(".title");
const text = document.querySelector(".text");
console.log(liEl);
const icon = document.querySelector(".fas");
console.log(menu);

menu.addEventListener("click", function () {
  lists.classList.toggle("show");
  icon.classList.toggle("rotate");
});

liEl.forEach((list) => {
  list.addEventListener("click", function (e) {
    const li = e.currentTarget.innerHTML;
    console.log(li);
    title.innerHTML = li;
    lists.classList.remove("show");
    icon.classList.remove("rotate");
  });
});
