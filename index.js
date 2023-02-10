const root = document.querySelector("html");

//Real cursor element
const cursor = document.createElement("div");
cursor.classList.add("cursor");
root.appendChild(cursor);
  
//following extra cursor element
const follower = document.createElement("div");
follower.classList.add("cursor", "cursor_follower");
root.appendChild(follower);

root.addEventListener("mousemove", (point) => {
  setPosition(follower, point);
  setPosition(cursor, point);
});

function setPosition(element, point) {
  element.style.transform = `translate3d(${point.clientX}px, ${point.clientY}px, 0)`;
  console.log(element.style.transform, "first console");
}
