
const players = {

    lebronjames: {
        name: "LeBron Raymone James",
        image: "images/lebron-james.jpg",
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
    },
    michaeljordan: {
        name: "Michael Jeffrey Jordan",
        image: "images/michael-jordan.jpg",
        physical: "6'6\" 216 lbs | SG SF",
        career: "Bulls (#23, #45, #12), Wizards (#23) | 1984–2003",
        awards: "5 MVPs | 6 NBA Championships | 6 Finals MVPs",
        resume: [
            "6× NBA Champion, 6× Finals MVP, and 5× regular-season MVP.",

            "Won a record 10 NBA scoring titles, including seven consecutive scoring championships from 1987 through 1993.",

            "Holds the NBA records for the highest regular-season scoring average at 30.1 PPG and highest playoff scoring average at 33.4 PPG.",

            "Only player to win six Finals MVP awards, earning the honor during both of Chicago’s three-peats.",

            "14× NBA All-Star, 11× All-NBA selection, 9× All-Defensive First Team selection, 1988 Defensive Player of the Year, and 1985 Rookie of the Year.",

            "Led the Bulls to six championships in eight seasons and finished his Finals career with a 6–0 series record."
        ],

        goatArguments: [
            "Unmatched peak dominance: Jordan combined elite scoring, defense, athleticism, and late-game performance, winning six championships, six Finals MVPs, five league MVPs, and ten scoring titles.",

            "Perfect championship conversion: Once Jordan reached the Finals, his Bulls won all six series, and he was named Finals MVP every time.",

            "Historic two-way excellence: He was both the league’s most dominant scorer and an elite defender, becoming one of the rare perimeter players to win MVP and Defensive Player of the Year in the same season."
        ]
    },
    kobebryant: {
        name: "Kobe Bean Bryant",
        image: "images/kobe-bryant.jpg",
        physical: "6'6\" 212 lbs | SG SF",
        career: "Lakers (#8, #24) | 1996–2016",
        awards: "1 MVP | 5 NBA Championships | 2 Finals MVPs",

        resume: [
            "5× NBA Champion, 2× Finals MVP, and 1× regular-season MVP.",

            "18× NBA All-Star, 15× All-NBA selection, and 12× All-Defensive selection.",

            "Won two NBA scoring titles and retired with 33,643 career points.",

            "Scored 81 points against Toronto in 2006, the second-highest single-game total in NBA history.",

            "Won three consecutive championships from 2000 through 2002, then led a restructured Lakers team to back-to-back titles in 2009 and 2010.",

            "Shares the NBA record with four All-Star Game MVP awards, an honor now named after him."
        ],

        goatArguments: [
            "Elite longevity and sustained excellence: Kobe remained one of the league’s premier players across two decades, earning 18 All-Star selections and 15 All-NBA honors.",

            "Championship success in different roles: He won three titles as an elite co-star beside Shaquille O’Neal, then proved he could lead a championship team by winning two more titles and both Finals MVPs.",

            "One of basketball’s most complete scorers: Kobe could score from every area of the court, possessed elite footwork and shot-making ability, and produced one of the greatest individual performances ever with his 81-point game.",

            "Historic competitiveness and influence: His preparation, resilience, and “Mamba Mentality” influenced an entire generation of players and became one of basketball’s defining standards for competitive dedication."
        ]
    },
    magicjohnson: {
        name: "Earvin “Magic” Johnson Jr.",
        image: "images/magic-johnson.jpg",
        physical: "6'9\" 215 lbs | PG SG PF",
        career: "Lakers (#32) | 1979–1991, 1996",
        awards: "3 MVPs | 5 NBA Championships | 3 Finals MVPs",

        resume: [
            "5× NBA Champion, 3× Finals MVP, and 3× regular-season MVP.",

            "12× NBA All-Star, 10× All-NBA selection, and 9× All-NBA First Team selection.",

            "Led the NBA in assists four times and steals twice.",

            "Retired with 10,141 assists and a career average of 11.2 assists per game, the highest career average in NBA history.",

            "Recorded 138 career triple-doubles, demonstrating his historic all-around production.",

            "As a 20-year-old rookie, started at center in Game 6 of the 1980 Finals and produced 42 points, 15 rebounds, and seven assists to clinch the championship and Finals MVP."
        ],

        goatArguments: [
            "One of the greatest playmakers in NBA history: Magic combined extraordinary court vision, size, creativity, transition passing, and elite assist production while directing the Showtime Lakers.",

            "Immediate championship impact: He won a championship and Finals MVP as a rookie, then became the engine of five Lakers championship teams.",

            "Unmatched positional versatility: At 6'9\", Magic could run point guard, score inside, rebound, defend multiple positions, and even start at center when necessary.",

            "Transformed winning basketball: His fast-paced “Showtime” style helped define the Lakers dynasty, rejuvenate the NBA, and establish the modern model for a large, positionless playmaker."
        ]
    },
    larrybird: {
        name: "Larry Joe Bird",
        image: "images/larry-bird.jpg",
        physical: "6'9\" 220 lbs | SF PF",
        career: "Celtics (#33) | 1979–1992",
        awards: "3 MVPs | 3 NBA Championships | 2 Finals MVPs",

        resume: [
            "3× NBA Champion, 2× Finals MVP, and 3× regular-season MVP.",

            "Won three consecutive MVP awards from 1984 through 1986, becoming one of only a few players in league history to accomplish that feat.",

            "12× NBA All-Star, 10× All-NBA selection, and 9× All-NBA First Team selection.",

            "Finished his career averaging 24.3 points, 10.0 rebounds, and 6.3 assists per game.",

            "Led Boston to five NBA Finals appearances and three championships during the 1980s.",

            "Won Rookie of the Year in 1980 and was later inducted into the Basketball Hall of Fame in 1998."
        ],

        goatArguments: [
            "One of the greatest all-around forwards ever: Bird combined elite scoring, rebounding, passing, shooting, and basketball intelligence in a way few forwards have matched.",

            "Historic peak dominance: He won three consecutive MVP awards while leading Boston to four straight Finals appearances and two championships during that stretch.",

            "Elite clutch performer: Bird built a reputation for controlling late-game situations with his shot-making, passing, anticipation, and confidence under pressure.",

            "Transformed the Celtics and the NBA: His rivalry with Magic Johnson restored the Celtics-Lakers rivalry, helped drive the league’s growth during the 1980s, and established Bird as one of basketball’s defining stars."
        ]
    },
    stephencurry: {
        name: "Wardell Stephen Curry II",
        image: "images/stephen-curry.jpg",
        physical: "6'2\" 185 lbs | PG SG",
        career: "Warriors (#30) | 2009–present",
        awards: "2 MVPs | 4 NBA Championships | 1 Finals MVP",

        resume: [
            "4× NBA Champion, 1× Finals MVP, and 2× regular-season MVP.",

            "Became the first unanimous regular-season MVP in NBA history during the 2015–16 season.",

            "NBA’s all-time leader in regular-season three-pointers made.",

            "Set the single-season NBA record with 402 made three-pointers in 2015–16.",

            "12× NBA All-Star, 11× All-NBA selection, and 2× NBA scoring champion.",

            "Led Golden State to six NBA Finals appearances and four championships between 2015 and 2022.",

            "Won the 2022 Western Conference Finals MVP and Finals MVP while leading Golden State to its fourth championship of his career."
        ],

        goatArguments: [
            "Greatest shooter in NBA history: Curry combines unmatched shooting range, accuracy, volume, movement, and off-ball skill, making him the defining shooter of his generation.",

            "Revolutionized modern basketball: His success helped transform NBA offense by demonstrating that three-point shooting could serve as the foundation of a championship dynasty.",

            "Historic offensive influence: Curry creates scoring opportunities not only through his own shots and passes, but through the defensive attention he commands far beyond the three-point line.",

            "Championship success as the franchise centerpiece: He led Golden State to six Finals appearances and four championships, including the 2022 title after the original Warriors dynasty had been widely considered finished."
        ]
    },
    kevindurant: {
        name: "Kevin Wayne Durant",
        image: "images/kevin-durant.jpg",
        physical: "6'10\" 240 lbs | SF PF SG",
        career: "SuperSonics (#35), Thunder (#35), Warriors (#35), Nets (#7), Suns (#35), Rockets (#7) | 2007–present",
        awards: "1 MVP | 2 NBA Championships | 2 Finals MVPs",

        resume: [
            "2× NBA Champion, 2× Finals MVP, and 1× regular-season MVP.",

            "Won four NBA scoring titles, including three consecutive titles from 2010 through 2012.",

            "Became one of the most efficient high-volume scorers in league history by combining elite shooting, length, ball handling, and finishing ability.",

            "Won consecutive championships and Finals MVP awards with Golden State in 2017 and 2018, averaging 35.2 points per game during the 2017 Finals.",

            "16× NBA All-Star and one of the five highest-scoring players in NBA regular-season history.",

            "Won four Olympic gold medals and became the United States’ all-time leading scorer in Olympic basketball."
        ],

        goatArguments: [
            "One of the greatest pure scorers ever: Durant possesses the height of a power forward, the handle of a guard, and elite shooting from every level of the floor, making him one of the most difficult individual matchups in basketball history.",

            "Historic scoring efficiency: Unlike many high-volume scorers, Durant has produced elite point totals while maintaining exceptional shooting percentages from the field, three-point line, and free-throw line.",

            "Proven championship dominance: He was the best-performing player during two Golden State championship runs and earned Finals MVP in consecutive seasons.",

            "Remarkable longevity and adaptability: Durant has remained an elite scorer across multiple eras, teams, offensive systems, and major injuries while climbing into the top five in career scoring."
        ]
    },
    wiltchamberlain: {
        name: "Wilton Norman Chamberlain",
        image: "images/wilt-chamberlain.jpg",
        physical: "7'1\" 275 lbs | C",
        career: "Philadelphia Warriors (#13), San Francisco Warriors (#13), 76ers (#13), Lakers (#13) | 1959–1973",
        awards: "4 MVPs | 2 NBA Championships | 1 Finals MVP",

        resume: [
            "2× NBA Champion, 1× Finals MVP, and 4× regular-season MVP.",

            "Scored an NBA-record 100 points in a single game on March 2, 1962.",

            "Averaged an NBA-record 50.4 points per game during the 1961–62 season.",

            "Holds the NBA career record with 23,924 rebounds and averaged a record 22.9 rebounds per game for his career.",

            "Won seven scoring titles, 11 rebounding titles, and one assist title, making him the only center to lead the NBA in total assists.",

            "Recorded 118 career games with at least 50 points and 32 games with at least 60 points, both NBA records.",

            "Won MVP and Rookie of the Year in the same season after averaging 37.6 points and 27.0 rebounds per game as a rookie."
        ],

        goatArguments: [
            "Most statistically dominant player ever: Wilt produced records that remain almost unimaginable, including a 100-point game, a 50.4-point season, and career averages of 30.1 points and 22.9 rebounds.",

            "Unmatched physical dominance: His combination of height, strength, speed, endurance, and athleticism overwhelmed opponents and even contributed to rule changes designed to limit his impact.",

            "More than just a scorer: Chamberlain evolved from a record-breaking scorer into an elite passer, defender, and efficient team player, once leading the league in total assists.",

            "Historic durability and workload: He regularly played nearly every minute, including an NBA-record 48.5 minutes per game in 1961–62, while carrying enormous offensive and defensive responsibilities."
        ]
    },
    kareemabduljabbar: {
        name: "Kareem Abdul-Jabbar",
        image: "images/kareem-abdul-jabbar.jpg",
        physical: "7'2\" 225 lbs | C",
        career: "Bucks (#33), Lakers (#33) | 1969–1989",
        awards: "6 MVPs | 6 NBA Championships | 2 Finals MVPs",

        resume: [
            "6× NBA Champion, 2× Finals MVP, and a record 6× regular-season MVP.",

            "19× NBA All-Star, 15× All-NBA selection, and 11× All-Defensive selection.",

            "Won Rookie of the Year in 1970 and captured his first championship, MVP, and Finals MVP in only his second NBA season.",

            "Scored 38,387 career points, which stood as the NBA record for nearly four decades.",

            "Won two scoring titles, one rebounding title, and four blocked-shot titles.",

            "Developed the nearly unstoppable skyhook, one of the most effective and recognizable shots in basketball history.",

            "Won championships in three different decades and remained an elite contributor throughout a 20-season career."
        ],

        goatArguments: [
            "Unmatched combination of peak and longevity: Kareem won a record six MVP awards while remaining a championship-level player across 20 seasons.",

            "One of the most unstoppable offensive weapons ever: His height, touch, footwork, and skyhook allowed him to score efficiently against virtually every type of defender.",

            "Elite success across different eras and teams: He won a championship and Finals MVP as Milwaukee’s centerpiece, then became a foundational star of five Lakers championship teams.",

            "Complete two-way dominance: In addition to his scoring, Kareem was an elite rebounder, rim protector, passer, and defender who earned 11 All-Defensive selections."
        ]
    },
    billrussell: {
        name: "William Felton Russell",
        image: "images/bill-russell.jpg",
        physical: "6'10\" 215 lbs | C",
        career: "Celtics (#6) | 1956–1969",
        awards: "5 MVPs | 11 NBA Championships | 0 Finals MVPs",

        resume: [
            "11× NBA Champion and 5× regular-season MVP.",

            "Won more NBA championships as a player than anyone in league history.",

            "Led Boston to 11 championships in 13 seasons, including a record eight consecutive titles from 1959 through 1966.",

            "Reached the NBA Finals in 12 of his 13 seasons and compiled a 10–0 record in winner-take-all playoff games.",

            "12× NBA All-Star, 11× All-NBA selection, and 4× NBA rebounding champion.",

            "Finished his career with 21,620 rebounds and a career average of 22.5 rebounds per game, second only to Wilt Chamberlain.",

            "Became the first Black head coach in NBA history and won two championships as Boston’s player-coach.",

            "The NBA Finals MVP trophy was officially named the Bill Russell NBA Finals Most Valuable Player Award in his honor."
        ],

        goatArguments: [
            "Greatest winner in NBA history: Russell’s 11 championships in 13 seasons represent a level of sustained team success no other superstar has matched.",

            "Transformational defensive impact: His rim protection, rebounding, mobility, and ability to initiate fast breaks made defense the foundation of the Celtics dynasty.",

            "Elevated winning beyond statistics: Russell consistently prioritized defensive positioning, passing, leadership, and team success over individual scoring totals.",

            "Dominated the highest-pressure moments: His undefeated record in winner-take-all playoff games and repeated victories over elite rivals demonstrate his exceptional ability to deliver when seasons were at stake."
        ]
    }
};

function setUpPlayerSelector(selectID){

    const playerSelect = document.getElementById(selectID);

    const playerPanel = playerSelect.closest(".player-panel");

    const playerResult = playerPanel.querySelector(".player-result");

    const playerPhoto = playerResult.querySelector(".player-photo");
    
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

            playerPhoto.src = selectedPlayer.image;
            playerPhoto.alt = selectedPlayer.name;
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



