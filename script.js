
const players = {

    lebronjames: {
        name: "LeBron Raymone James",
        physical: "6'9\" 250lbs | SF PF PG SG",
        career: "Cavaliers (#23, #6), Heat (#6), Lakers (#23, #6) | 2003 - Present",
        awards: "4 MVPs | 4 NBA Championships | 4 Finals MVPs",
        resume: [
            "4× NBA Champion, 4× Finals MVP, and 4× regular-season MVP.",
    
            "NBA’s all-time leading scorer with 43,440 regular-season points through 2025–26.",
    
            "NBA’s all-time playoff scoring leader with 8,521 postseason points.",
    
            "Only player in NBA history with at least 40,000 points, 10,000 rebounds, and 10,000 assists.",
    
            "First player to surpass 50,000 combined regular-season and playoff points.",
    
            "Record 22× NBA All-Star and 21× All-NBA selection, including 13 First Team selections.",
    
            "Won championships and Finals MVPs with three different franchises: Cleveland, Miami, and Los Angeles."
        ],
    
        goatArguments: [
            "Unmatched longevity: LeBron has remained an elite player for more than two decades, combining historic career totals with sustained production into his 40s.",
    
            "Most complete statistical résumé: He is the league’s leading scorer while also ranking among its greatest passers and rebounders, making him arguably the most versatile superstar in NBA history.",
    
            "Proven success in different environments: He led three different franchises to championships and adapted his game to different teammates, coaches, positions, and styles of play.",
    
            "Elite regular-season and playoff dominance: His four MVPs, four championships, four Finals MVPs, and record-setting postseason production show that his greatness translated to every level of competition."
        ]
    }
};

function setUpPlayerSelector(selectID){

    const playerSelect = document.getElementById(selectID);

    const playerPanel = playerSelect.closest(".player-panel");

    const playerResult = playerPanel.querySelector(".player-result");
    
    const playerName = playerResult.querySelector(".player-summary h3");

    const playerDetails = playerResult.querySelectorAll(".player-summary p");

    const careerList = playerResult.querySelector(".career-accomplishments");

    const goatList = playerResult.querySelector(".goat-arguments");

    playerSelect.addEventListener("change", function(){

        if(playerSelect.value === ""){
            playerResult.hidden = true;
        }
        else{
            const selectedPlayer = players[playerSelect.value];

            if(!selectedPlayer){
                playerResult.hidden = true;
                return;
            }

            playerName.textContent = selectedPlayer.name;
            playerDetails[0].textContent = selectedPlayer.physical;
            playerDetails[1].textContent = selectedPlayer.career;
            playerDetails[2].textContent = selectedPlayer.awards;
            careerList.innerHTML = "";
            goatList.innerHTML = "";

            selectedPlayer.resume.forEach(function (accomplishment) {
                const listItem = document.createElement("li");
                listItem.textContent = accomplishment;
                careerList.appendChild(listItem);
            });

            selectedPlayer.goatArguments.forEach(function (argument) {
                const listItem = document.createElement("li");
                listItem.textContent = argument;
                goatList.appendChild(listItem);
            });
            
            playerResult.hidden = false;

        }
    });
}

setUpPlayerSelector("player-one-select");
setUpPlayerSelector("player-two-select");



