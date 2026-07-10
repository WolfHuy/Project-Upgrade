let missionTitle = document.querySelector(".daymiss");
vocabCheckbox.addEventListener("change", function() {
    if (vocabCheckbox.checked) {
        missionTitle.textContent = "Today's Mission: ✅";
    }
    else {
        missionTitle.textContent = "Today's Mission: ";
    }
});

function updateProgress() {
    let completed = 0;
for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
        completed++;
    }
}
progress.textContent = `Progress ${completed}/${checkboxes.length}`;
for (let i = 0; i < checkboxes.length; i++) {
    localStorage.setItem(checkboxes[i].id, checkboxes[i].checked);
}}
for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", updateProgress);
}
for (let i = 0; i < checkboxes.length; i++) {
    if (localStorage.getItem(checkboxes[i].id) === "true") {
        checkboxes[i].checked = true;
    }
}



function updateProgress() {
    let completed = 0;
for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
        completed++;
    }
    localStorage.setItem(
        checkboxes[i].id, 
        checkboxes[i].checked
    );
progress.textContent = `Progress ${completed}/${checkboxes.length}`;
}}
updateProgress();