let missionTitle = document.querySelector(".daymiss");
vocabCheckbox.addEventListener("change", function() {
    if (vocabCheckbox.checked) {
        missionTitle.textContent = "Today's Mission: ✅";
    }
    else {
        missionTitle.textContent = "Today's Mission: ";
    }