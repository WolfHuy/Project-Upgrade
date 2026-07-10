
let username = "Wolf Huy";

let title = document.querySelector(".title");
title.textContent = "Project Upgrade v0.2";
console.log(title);


let progress = document.querySelector(".progress");
  
let checkboxes = document.querySelectorAll("input");

for (let i = 0; i < checkboxes.length; i++) {
    console.log(checkboxes[i].checked);
}
function updateProgress() {
    let completed = 0;
for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
        completed++;
    }
}
progress.textContent = `Progress ${completed}/${checkboxes.length}`;
for (let i = 0; i < checkboxes.length; i++) {
    localStorage.setItem(
        checkboxes[i].id, 
        checkboxes[i].checked);
}}
for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", updateProgress);
}
for (let i = 0; i < checkboxes.length; i++) {
    if (localStorage.getItem(checkboxes[i].id) === "true") {
        checkboxes[i].checked = true;
    }
}
updateProgress();
