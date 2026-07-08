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
let missionTitle = document.querySelector(".daymiss");
vocabCheckbox.addEventListener("change", function() {
    if (vocabCheckbox.checked) {
        missionTitle.textContent = "Today's Mission: ✅";
    }
    else {
        missionTitle.textContent = "Today's Mission: ";
    }
});