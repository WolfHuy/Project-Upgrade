console.log("Project Upgrade Started");
let username = "Wolf Huy";
console.log(username);
let title = document.querySelector(".title");
title.textContent = "Project Upgrade v0.2";
console.log(title);
let vocabCheckbox = document.querySelector("#vocab");
vocabCheckbox.addEventListener("change", function() {
    console.log("Vocabulary checkbox changed!");
});
let gramCheckbox = document.querySelector("#gram");
let listCheckbox = document.querySelector("#list");
let wriCheckbox = document.querySelector("#wri");
let progress = document.querySelector(".progress");
console.log(progress.textContent);  
let checkboxes = document.querySelectorAll("input");
console.log(checkboxes);
for (let i = 0; i < 4; i++) {
    console.log(checkboxes[i].checked);
}
function updateProgress() {
    let completed = 0;
for (let i = 0; i < 4; i++) {
    if (checkboxes[i].checked) {
        completed++;
    }
}
progress.textContent = `Progress ${completed}/${checkboxes.length}`;
}
for (let i = 0; i < 4; i++) {
    checkboxes[i].addEventListener("change", updateProgress);
}
