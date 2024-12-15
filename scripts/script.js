const aLinks = document.querySelectorAll("span > a")
const inputField = document.querySelector("input")

// loads all href's into bottom nav buttons so they're focusable
function loadHrefs () {
    aLinks[0] = aLinks[0].href = ""
    aLinks[1] = aLinks[1].href = ""
    aLinks[2] = aLinks[2].href = "" 
    aLinks[3] = aLinks[3].href = "" 
    aLinks[4] = aLinks[4].href = "" 
    aLinks[5] = aLinks[5].href = "" 
    aLinks[6] = aLinks[6].href = "" 
}

// goes to games tab
function goToGames() {
    gamesLink = "games.html"
    aLinks[1] = aLinks[1].href = gamesLink
}

// goes to community tab
function gotoCommunity() {
    communityLink = "community.html"
    aLinks[5] = aLinks[5].href = communityLink
}

function changeInputField() {
    inputField.classList.add("red")
}

window.addEventListener("load", loadHrefs)
window.addEventListener("load", changeInputField)
aLinks[1].addEventListener("click", goToGames)
aLinks[5].addEventListener("click", gotoCommunity)

// classlistToggle


