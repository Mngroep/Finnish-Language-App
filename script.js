const story1Sections = [
    {
        title: "Section 1",
        text: "Kerran kauan sitten Kinassa eli muuan hyvin rikas keisari. Keisarilla oli kaunis palatsi, joka oli rakennettu kallisarvoissta posliinista. Palatsin valtavaa puutarhaa koristivat kymmenet kirsikkapuut. Puutarhassa asusteli myös muuan satakieli, joka oli ihmeellisen taitava laululinttu. Jokainen, joka linnun laulua joskus kuuli, pysähtyi niille sijoilleen. ”Voi, miten kauniisti se laulaa!”, sanoivat ihmiset.\n\nEräänä päivänä keisarin luona kävi arvovaltaisia vieraita. Vieraat kehuivat keisarin palatsia ja sen puutarhaa vuolaasti, mutta sanoivat lopulta: ”Kaikkein kauneinta oli kuitenkin satakielen laulu.” Keisaria tämä hieman harmitti, sillä hän ei itse ollut milloinkaan kuullut satakielen lauluu. Keisari kutsui palvelijansa luokseen. ”Etsi lintu käsiisi ja tuo se minun nähtäväkseni!”, hän määräsi.",
        image: "images/section1.jpg",
        errors: ["Kinassa", "kallisarvoissta", "laululinttu", "lauluu", "nähtäväkseni"], // Bad versions
        quiz: [
            { question: "Where did the emperor live?", options: ["China", "Japan", "India"], answer: "China" },
            { question: "What did the emperor want to see?", options: ["The bird", "The palace", "The guests"], answer: "The bird" }
        ]
    },
    {
        title: "Section 2",
        text: "Palvelija kumarsi ja kiirheti etsimään lintua, sillä keisarin sana oli laki. Palvelija juoksi hädissä ympäri palatsin puutarhaa, mutta ei löytänyt lintua mistään. Keisari kävi yhä kärsimätömäksi. Viimein eräs keittiöpiika muisti nähneensä satakielen. ”Voi, se laulaa todellakin kauniisti!” tyttö huudahti. ”Ääni saa aina kyyneleet silmiini.”\n\nKeittiöpiika lupasi johdattaa palvelijan satakielen luokse. Matkalla eräs lehmä alkoi ammua. ”Oi”, huudahti palvelija oitis. ”Onpa sillä voimakas lauluääni!” ”Ei tuo ole satakieli vaan lehmä”, vastasi tyttö. Vähän ajan kuluttua alkoi eräs sammakko kurnuttaa. ”Oi”, huudahti palvelija taas. ”Nyt kuulen sen. Todella komea ääni!” ”Ei tuo ole satakieli vaan sammako”, vastasi tyttö.",
        image: "images/section2.jpg",
        errors: ["kiirheti", "hädissä", "kärsimätömäksi", "satakielen", "sammako"], // Bad versions
        quiz: [
            { question: "What did the servant search for?", options: ["The bird", "The king", "The queen"], answer: "The bird" },
            { question: "What animal did the servant mistake for the nightingale?", options: ["A cow", "A frog", "A sheep"], answer: "A cow" }
        ]
    },
    {
        title: "Section 3",
        text: "Juuri sillä hetkellä alkoi oikea satakieli laulaa. ”Kuunnelkaa”, huudahti tyttö. ”Tuolla se on!” Hän osoitti ylös kirsikkapuun oksalle. ”Tuo pieni varpunenkö”, hämmästeli palvelija. ”Onpa se mitättömän näköinen”. Sitten palvelija karahti kurkkuaan ja lausui linnulle: ”Arvoisa keisarimme on määrännyt, että satakielen on tultava palatsiin laulamaan.”\n\n”Lauluni kuulostaa parhaalta luonnossa”, totesi satakieli, mutta lähti kuitenkin palvelijan mukan.\n\nKeisari hoviväkineen odotti satakielen esitystä henkeään pidätellen. Silloin satakieli aloitti laulunsa. Se lauloi niin kauniisti, että kyyneleet valuivat keisarin poskille. Sitten se aloitti uuden laulun, ja keisarin sydän suli ihastuksesta. Keisari oli niin liikutunut, että tarjosi kultaista ketjuaan palkkioksi satakielelle. Lintu kieltäytyi kiitääen. Se oli jo palkintonsa saanut. ”Näin liikutuksen kyyneleitä keisarin silmissä. Mikään palkinto ei voisi olla parempi”, satakieli sanoi.",
        image: "images/section3.jpg",
        errors: ["varpunenkö", "karahti", "mukan", "kiitääen", "liikutuksen"], // Bad versions
        quiz: [
            { question: "What did the nightingale refuse?", options: ["A reward", "The palace", "The king"], answer: "A reward" },
            { question: "Where did the nightingale sing?", options: ["In nature", "In the palace", "In the garden"], answer: "In nature" }
        ]
    },
    {
        title: "Section 4",
        text: "Keisari määräsi, että satakielen piti jäädä hovin. Lintu vietiin kultaiseen häkkiin asumaan. Se ei näyttänyt kovin onnelliselta, mutta lauloi silti aina pyydettäessä.\n\nEräänä päivänä keisari sai lahjaksi mekaanisen linnun. Se oli pieni jalokivvin koristeltu nukke, joka oli satakielen näköinen. Kun keisari painoi nappia, lintu lauloi yhden laulun. ”Onpa se hieno”, ihasteli keisari. ”Se on kauniimpi kuin oikea lintu ja laulaakin yhtä kauniisti.” Keisari painoi nappia yhä uudestaan ja uudestaan. Lintu lauloi aina saman laulun. Kun mekaaninen lintu oli laulanut kolmekymmentä kertaa, keisari sanoi viimein: ”Kuunnellaan välillä oikeaa lintua.” Mutta kukaan ei ollut huomannut, että oikea satakieli oli sillä välin lentänyt häkisään vapauteen.",
        image: "images/section4.jpg",
        errors: ["hovin", "jalokivvin", "nukke", "kolmekymmentä", "häkisään"], // Bad versions
        quiz: [
            { question: "What was the mechanical bird made of?", options: ["Gems", "Gold", "Wood"], answer: "Gems" },
            { question: "What happened to the real nightingale?", options: ["It flew away", "It stayed in the cage", "It got sick"], answer: "It flew away" }
        ]
    },
    {
        title: "Section 5",
        text: "Ja niin mekkanisesta linnusta tuli keisarin uusi lemmikki. Se lauloi väsymättömästi keisarin työpöydän vierellä samaa lauluaan kerta toisensa jälkeen jalokivin koristeltu pyrstö välkkyen. Päivästä toiseen lintu lauloi keisarille – kunnes eräänä päivänä jokin mekaanisen linnun sisällä hajoisi ja se vaikeni. Valtakunnan viisaimat miehet yrittivät korjata lintua, mutta turhaan. Keisari antoi palvelijalleen määräyksen rakentaa uusi lintu, mutta siitä ei tullut mitään. Satakielen laulua ei kuulunut palatsissa enää milloinkaan.\n\nLopulta keisari ahdistui lintunsa menetyksestä niin, että sairastui. Hän makasi vuoteessaan kalpeana kuolemaa odottaen. Mekaaninen lintu seisoi yhä keisarin sängyn vierellä, mutta sen nokasta ei kuulunut pihahdustakaan. Keisariraukka sai tuskin hengitettyä. Oli kuin jokin olisi istunnut hänen rintansa päällä.\n\n”Laula, lintuni, laula!” kuiskasi keisari salakielelleen, mutta mekaaninen lintu pysyi vaiti. Yhtäkkiä keisarin ikkunasta lennähti sisään toinen lintu, oikea satakieli. Se oli kuullut keisarin pyynnön ja tullut auttamaan sitä hädässä. Kun oikea satakieli alkoi laulaa, keisari tunsi olonsa helpottavan. Hengitys kulki rinnassa kevyemmin ja keisari tunsi voimiensa palaavan.",
        image: "images/section5.jpg",
        errors: ["mekkanisesta", "hajoisi", "viisaimat", "istunnut", "salakielelleen"], // Bad versions
        quiz: [
            { question: "What happened to the mechanical bird?", options: ["It broke", "It flew away", "It was stolen"], answer: "It broke" },
            { question: "What cured the emperor?", options: ["The real nightingale's song", "A doctor", "A new mechanical bird"], answer: "The real nightingale's song" }
        ]
    }
];

const story2Sections = [
    {
        title: "Section 1",
        text: "Mikä melskhe ja meteli! Myllärin luota kuului sellaista ulinaa ja parkumista, ettei siitä tahtonut loppuu tulla. Myllärillä oli nimittäin ikälopu aasi, josta se oli päättänyt hankkiutua eroon. Koko ikänsä aasi oli kantanut painavia viljjasäkkejä, mutta nyt se oli tullut vanhaksi. Sen vuoksi mylläri ei halunnut enää pitää aasia ja lähetti sen matkoihinsä.\n\n– Vai eläkkeele! mylvi aasi loukkaantuneena. – Vielä mitä. Minä lähden Bremenniin ja rupean siellä kaupunginsoittajaksi!\n\nJa niin se lähti. Aasi ei tosin ehtinyt kulkea kovinkaan pitkään, kun se kohtasi matkallaan koiran. Koira makasi keskellä tietä ja vonkui ja ulisi.",
        image: "images/2section1.jpg",
        errors: ["melskhe", "loppuu", "ikälopu", "viljjasäkkejä", "eläkkeele"], // Bad versions
        quiz: [
            { question: "Why did the miller send the donkey away?", options: ["It was old", "It was loud", "It was sick"], answer: "It was old" },
            { question: "Where did the donkey decide to go?", options: ["Bremen", "Helsinki", "China"], answer: "Bremen" }
        ]
    },
    {
        title: "Section 2",
        text: "– Mikä hätännä? kysyi aasi.\n\n– Olen tullut vanhaks, parkui koira. – Isäntäni hylkäsi minut, koska olen hidas ja raihnanen.\n\nAasi säälí onnetonta koiraa, sillä se tiesi, että yksin jäminen oli surkeinta, mitä mitä kenellekään voi sattua.\n\n– Minä aion mennä Bremeniin ja ruveta siellä kaupunginsoittajaksi. Tule mukaan ja rupea soittajaksi sinäkin!\n\nAasi ja koira eivät ehtineet kulkea pitkällekään kun kuulivat tieltä ähinää ja voihketta. Kissa istui tienposkesa ja oli tosiaankin aivan onnettoman näköinen.",
        image: "images/2section2.jpg",
        errors: ["hätännä", "vanhaks", "raihnanen", "säälí", "tienposkesa"], // Bad versions
        quiz: [
            { question: "Why was the dog abandoned?", options: ["It was slow", "It was loud", "It was young"], answer: "It was slow" },
            { question: "What did the donkey invite the dog to do?", options: ["Become a musician", "Return home", "Find food"], answer: "Become a musician" }
        ]
    },
    {
        title: "Section 3",
        text: "– Mikä hätänä, kysyivät aasi ja koira.\n\n– Olen tulossa vanhaksi, eivätkä hampaani ole yhtä teräviä ku ennen. Emäntäni ajoi minut pois.\n\nAasi mietti asiaa hetken ja sanoi sitten: – Voisit tulla meidän kanssamme Bremeniin. Me aiomme ruveta siellä kaupunginsoittajiksi.\n\nKissa piti ehdotusta mainijona ja liittyi mukaan. Seurue ei ehtinyt kulkea pitkällekään, kun surumielinnen valitus täytti metsän. Puun oksalla istui kukko, joka kiekui sydäntäsärgevästi.\n\n– Kylläpä sinä pidät kovaa meteliä, tuumi aasi. Mikä hätänä?\n\n– Sain potkut kanalasta, vastasi kukko. – Minua ei enää huoli kukaan.\n\n– Älähän nyt, tuumi aasi. – Tule meidän kanssamme Bremeniin. Me kaikki neljä voimme pitää yhteskonsertteja.",
        image: "images/2section3.jpg",
        errors: ["teräviä", "mainijona", "surumielinnen", "sydäntäsärgevästi", "yhteskonsertteja"], // Bad versions
        quiz: [
            { question: "Why was the cat chased away?", options: ["Dull teeth", "Too loud", "Too old"], answer: "Dull teeth" },
            { question: "What did the rooster lose?", options: ["Its job", "Its home", "Its voice"], answer: "Its job" }
        ]
    },
    {
        title: "Section 4",
        text: "Ehdotus sopi kukolle oikein hyvin, ja se liittyi muiden mukaan.\n\nNiin seurue jatkoi kohti Bremeniä. Vähän matkaa kuljetuaan aasi nosti katseensa ja huudahti:\n\n– Valoa!\n\nMetsän keskellä näkyi pieni mökki.\n\n– Siellä asuu joku, keksi koira. – Mennään katsomaan!\n\nEläimet hiipivät lähemmäs mökkiä. Aasi kurkisti ikkunasta sisään ja sanoi: – Siellä on suuri katettu pöytä, ja sen ympärillä istuu rosvoija syömässä ja juomassa.",
        image: "images/2section4.jpg",
        errors: ["kuljetuaan", "huudahti", "hiipivät", "kurkisti", "rosvoija"], // Bad versions
        quiz: [
            { question: "What did the donkey see in the forest?", options: ["A cottage", "A river", "A town"], answer: "A cottage" },
            { question: "Who was inside the cottage?", options: ["Robbers", "Farmers", "Musicians"], answer: "Robbers" }
        ]
    },
    {
        title: "Section 5",
        text: "– Päästäisivätköhän ne meidät sisään, jos pitäisimme pienen konserttin? kissa keksi.\n\n– Yritetään, muut päättivät.\n\nJa niin tehtiin. Aasi kävi ikkunan eteen. Koira hyppähti aasin selkään. Kissa puolesaan kiipesi koiran selkään ja lopuksi kukko lennäti istumaan kissan päälaelle.\n\nSitten aasi laski kolmeen ja konsertti alkoi: aasi hirnui, koira haukkui, kissa naukui ja kukko kiekui. Mikä melske ja meteli!\n\nRosvot pelästyivät melua niin, että juoksivat suin päin ulos talosta. He luulivat, että kummitus oli tunkeumassa tupaan. Vaan siitäkös eläimet innostuivat: aasi pärkähteli, koira ulisi, kissa sähisi ja kukkokin kiljui kurkku suorana.",
        image: "images/2section5.jpg",
        errors: ["konserttin", "hyppähti", "lennäti", "pelästyivät", "pärkähteli"], // Bad versions
        quiz: [
            { question: "What did the animals do to scare the robbers?", options: ["Sang loudly", "Fought them", "Hid inside"], answer: "Sang loudly" },
            { question: "What did the robbers think the noise was?", options: ["A ghost", "A storm", "A party"], answer: "A ghost" }
        ]
    },
    {
        title: "Section 6",
        text: "Rosvot pinkovat pakoon henki kurkussa. Yhtä pelottavaa möyhkäröintiä ei kukaan heistä ollut kuunaan kuullut. Sen koommin ei yksikään rosvo enää uskaltanut palata mökkiin. Mutta eläimet astuivat sisään ja tekivät olonsa kotoisaks.\n\nNe viihyivät mökissä niin hyvin, että taitavat asua siellä vielä tänäkin päivänä.",
        image: "images/2section6.jpg",
        errors: ["pinkovat", "möyhkäröintiä", "kuunaan", "kotoisaks", "viihyivät"], // Bad versions
        quiz: [
            { question: "What did the robbers do when they heard the noise?", options: ["Ran away", "Fought back", "Joined in"], answer: "Ran away" },
            { question: "Where did the animals end up living?", options: ["The cottage", "Bremen", "The forest"], answer: "The cottage" }
        ]
    }
];


let currentStory = 1;
let currentSection = 0;
let score = 0;
let mistakes = 0;
const maxScore = 5;
let story1Progress = Array(story1Sections.length).fill(false);
let story2Progress = Array(story2Sections.length).fill(false);
let story1QuizSubmitted = Array(story1Sections.length).fill(false);
let story2QuizSubmitted = Array(story2Sections.length).fill(false);
let achievements = {
    "finnish-elk": false,
    "avid-reader": false,
    "addicted-reader": false
};

// Load progress and achievements from localStorage
function loadProgress() {
    const savedStory1 = localStorage.getItem("story1Progress");
    const savedStory2 = localStorage.getItem("story2Progress");
    const savedAchievements = localStorage.getItem("achievements");
    if (savedStory1) {
        story1Progress = JSON.parse(savedStory1);
    } else {
        story1Progress = Array(story1Sections.length).fill(false);
        saveProgress(1);
    }
    if (savedStory2) {
        story2Progress = JSON.parse(savedStory2);
    } else {
        story2Progress = Array(story2Sections.length).fill(false);
        saveProgress(2);
    }
    if (savedAchievements) {
        achievements = JSON.parse(savedAchievements);
    } else {
        achievements["finnish-elk"] = true; // Unlock on first load
        saveAchievements();
    }
}

// Save progress to localStorage
function saveProgress(storyNumber) {
    if (storyNumber === 1) {
        localStorage.setItem("story1Progress", JSON.stringify(story1Progress));
    } else if (storyNumber === 2) {
        localStorage.setItem("story2Progress", JSON.stringify(story2Progress));
    }
}

// Save achievements to localStorage
function saveAchievements() {
    localStorage.setItem("achievements", JSON.stringify(achievements));
}

// Check and update achievements
function updateAchievements() {
    achievements["finnish-elk"] = true; // Always true after first load
    achievements["avid-reader"] = story1Progress.every(status => status === true);
    achievements["addicted-reader"] = story2Progress.every(status => status === true);
    saveAchievements();
    // Removed displayAchievements() call to avoid showing the page here
}
function displayAchievements() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("story1-submenu").style.display = "none";
    document.getElementById("story2-submenu").style.display = "none";
    document.getElementById("story-content").style.display = "none";
    document.getElementById("end-screen").style.display = "none";
    document.getElementById("achievements-page").style.display = "block";

    const elk = document.getElementById("finnish-elk");
    const avid = document.getElementById("avid-reader");
    const addicted = document.getElementById("addicted-reader");

    elk.classList.toggle("unlocked", achievements["finnish-elk"]);
    elk.querySelector(".status").textContent = achievements["finnish-elk"] ? "Unlocked" : "Locked";
    avid.classList.toggle("unlocked", achievements["avid-reader"]);
    avid.querySelector(".status").textContent = achievements["avid-reader"] ? "Unlocked" : "Locked";
    addicted.classList.toggle("unlocked", achievements["addicted-reader"]);
    addicted.querySelector(".status").textContent = achievements["addicted-reader"] ? "Unlocked" : "Locked";
}

document.addEventListener("DOMContentLoaded", function () {
    loadProgress();
    updateAchievements(); // Update achievement status without displaying the page
    // Ensure main menu is shown on load
    document.getElementById("menu").style.display = "block";
    document.getElementById("story1-submenu").style.display = "none";
    document.getElementById("story2-submenu").style.display = "none";
    document.getElementById("story-content").style.display = "none";
    document.getElementById("end-screen").style.display = "none";
    document.getElementById("achievements-page").style.display = "none";

    document.getElementById("story1").addEventListener("click", function () {
        currentStory = 1;
        console.log("Story 1 clicked, showing sub-menu");
        showSubMenu(1);
    });

    document.getElementById("story2").addEventListener("click", function () {
        currentStory = 2;
        console.log("Story 2 clicked, showing sub-menu");
        showSubMenu(2);
    });

    document.getElementById("achievements").addEventListener("click", function () {
        console.log("Achievements clicked");
        displayAchievements(); // Only show Achievements when clicked
    });
});

function showSubMenu(storyNumber) {
    console.log(`Showing sub-menu for Story ${storyNumber}`);
    // Hide all other screens
    document.getElementById("menu").style.display = "none";
    document.getElementById("story1-submenu").style.display = "none";
    document.getElementById("story2-submenu").style.display = "none";
    document.getElementById("story-content").style.display = "none";
    document.getElementById("end-screen").style.display = "none";
    document.getElementById("achievements-page").style.display = "none";

    // Show the selected sub-menu
    const submenu = document.getElementById(`story${storyNumber}-submenu`);
    if (submenu) {
        submenu.style.display = "block";
        console.log(`Sub-menu story${storyNumber}-submenu set to display: block`);
    } else {
        console.error(`Element story${storyNumber}-submenu not found`);
    }

    const sectionButtons = document.getElementById(`story${storyNumber}-section-buttons`);
    if (!sectionButtons) {
        console.error(`story${storyNumber}-section-buttons element not found`);
        return;
    }
    sectionButtons.innerHTML = '';
    console.log(`Cleared story${storyNumber}-section-buttons for Story ${storyNumber}`);

    const sections = storyNumber === 1 ? story1Sections : story2Sections;
    const progress = storyNumber === 1 ? story1Progress : story2Progress;

    sections.forEach((section, index) => {
        const button = document.createElement("button");
        button.classList.add("section-button");
        if (progress[index]) {
            button.classList.add("completed");
            button.innerHTML = `<span>${section.title}</span><span class="completion-mark">✓ Completed</span>`;
        } else {
            button.innerHTML = `<span>${section.title}</span>`;
        }
        button.addEventListener("click", function () {
            currentSection = index;
            score = 0;
            mistakes = 0;
            console.log(`Section ${index + 1} of Story ${storyNumber} clicked`);
            showStory();
        });
        sectionButtons.appendChild(button);
    });
    console.log(`Added ${sections.length} section buttons to Story ${storyNumber} sub-menu`);
}

function showStory() {
    console.log(`Showing story content for Story ${currentStory}, Section ${currentSection + 1}`);
    const sections = currentStory === 1 ? story1Sections : story2Sections;
    const section = sections[currentSection];

    document.getElementById("story-title").textContent = section.title;
    document.getElementById("story-image").src = section.image;
    document.getElementById("story-text").innerHTML = makeWordsClickable(section.text, section.errors);

    updateProgressBar();
    showQuiz(currentSection);

    document.getElementById("menu").style.display = "none";
    document.getElementById("story1-submenu").style.display = "none";
    document.getElementById("story2-submenu").style.display = "none";
    document.getElementById("achievements-page").style.display = "none";
    document.getElementById("story-content").style.display = "block";
}

function returnToMenu() {
    console.log("Returning to main menu");
    document.getElementById("end-screen").style.display = "none";
    document.getElementById("story-content").style.display = "none";
    document.getElementById("story1-submenu").style.display = "none";
    document.getElementById("story2-submenu").style.display = "none";
    document.getElementById("achievements-page").style.display = "none";
    document.getElementById("menu").style.display = "block";
    score = 0;
    mistakes = 0;
    updateProgressBar();
}

function showStory() {
    const sections = currentStory === 1 ? story1Sections : story2Sections;
    const section = sections[currentSection];

    document.getElementById("story-title").textContent = section.title;
    document.getElementById("story-image").src = section.image;
    document.getElementById("story-text").innerHTML = makeWordsClickable(section.text, section.errors);

    updateProgressBar();
    showQuiz(currentSection);

    document.getElementById("menu").style.display = "none";
    document.getElementById("story1-submenu").style.display = "none";
    document.getElementById("story2-submenu").style.display = "none";
    document.getElementById("achievements-page").style.display = "none";
    document.getElementById("story-content").style.display = "block";
}

function makeWordsClickable(text, correctWords) {
    return text.split(" ").map(word => {
        let cleanWord = word.replace(/[.,!?]/g, '');
        return `<span class="clickable-word" data-word="${cleanWord}">${word}</span>`;
    }).join(" ");
}

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("clickable-word")) {
        let wordElement = event.target;
        let clickedWord = wordElement.getAttribute("data-word");

        const sections = currentStory === 1 ? story1Sections : story2Sections;
        const section = sections[currentSection];
        if (section.errors.includes(clickedWord) && !wordElement.classList.contains("correct")) {
            wordElement.classList.add("correct");
            wordElement.style.color = "green";
            wordElement.style.fontWeight = "bold";
            score++;
        } else if (!section.errors.includes(clickedWord) && !wordElement.classList.contains("wrong")) {
            wordElement.classList.add("wrong");
            wordElement.style.color = "red";
            mistakes++;
        }
        updateProgressBar();
    }
});

function updateProgressBar() {
    let progressValue = (score / maxScore) * 100;
    document.getElementById("score-progress").value = progressValue;
    document.getElementById("score-label").textContent = `Score: ${score}/5`;
    document.getElementById("mistakes-label").textContent = `Mistakes: ${mistakes}`;
    document.getElementById("next-button").style.display = (score === maxScore) ? "block" : "none";
}

function showQuiz(sectionIndex) {
    const sections = currentStory === 1 ? story1Sections : story2Sections;
    const quizSubmitted = currentStory === 1 ? story1QuizSubmitted : story2QuizSubmitted;
    const section = sections[sectionIndex];
    let quizForm = document.getElementById("quiz-form");
    quizForm.innerHTML = '';

    section.quiz.forEach((quiz, index) => {
        let questionWrapper = document.createElement("div");
        questionWrapper.classList.add("quiz-question");

        let questionLabel = document.createElement("p");
        questionLabel.textContent = quiz.question;

        let optionsDiv = document.createElement("div");
        quiz.options.forEach(option => {
            let optionLabel = document.createElement("label");
            let optionInput = document.createElement("input");
            optionInput.type = "radio";
            optionInput.name = `question${index}`;
            optionInput.value = option;
            optionInput.disabled = quizSubmitted[sectionIndex];
            optionLabel.appendChild(optionInput);
            optionLabel.appendChild(document.createTextNode(option));
            optionsDiv.appendChild(optionLabel);
        });

        questionWrapper.appendChild(questionLabel);
        questionWrapper.appendChild(optionsDiv);
        quizForm.appendChild(questionWrapper);
    });

    const submitBtn = document.getElementById("quiz-submit-btn");
    submitBtn.disabled = quizSubmitted[sectionIndex];
    document.getElementById("quiz-results").textContent = quizSubmitted[sectionIndex] ? 
        `You scored ${calculateQuizScore(sectionIndex)} out of ${section.quiz.length}!` : "";
    document.getElementById("quiz-section").style.display = "block";
}

function checkQuizAnswers() {
    const quizSubmitted = currentStory === 1 ? story1QuizSubmitted : story2QuizSubmitted;
    if (quizSubmitted[currentSection]) return;

    let quizForm = document.getElementById("quiz-form");
    let userAnswers = quizForm.querySelectorAll("input[type='radio']:checked");
    let quizScore = 0;
    const sections = currentStory === 1 ? story1Sections : story2Sections;
    const totalQuestions = sections[currentSection].quiz.length;

    userAnswers.forEach(answer => {
        const section = sections[currentSection];
        const questionIndex = answer.name.replace('question', '');
        const correctAnswer = section.quiz[questionIndex].answer;

        if (answer.value === correctAnswer) {
            answer.parentElement.style.color = "green";
            quizScore++;
        } else {
            answer.parentElement.style.color = "red";
        }
    });

    quizSubmitted[currentSection] = true;
    document.getElementById("quiz-submit-btn").disabled = true;
    document.getElementById("quiz-results").textContent = `You scored ${quizScore} out of ${totalQuestions}!`;
}

function calculateQuizScore(sectionIndex) {
    let quizForm = document.getElementById("quiz-form");
    let userAnswers = quizForm.querySelectorAll("input[type='radio']:checked");
    let quizScore = 0;
    const sections = currentStory === 1 ? story1Sections : story2Sections;

    userAnswers.forEach(answer => {
        const section = sections[sectionIndex];
        const questionIndex = answer.name.replace('question', '');
        const correctAnswer = section.quiz[questionIndex].answer;
        if (answer.value === correctAnswer) quizScore++;
    });
    return quizScore;
}

function nextSection() {
    if (score < maxScore) return;

    const progress = currentStory === 1 ? story1Progress : story2Progress;
    progress[currentSection] = true;
    saveProgress(currentStory);
    updateAchievements(); // Check achievements after progress update

    score = 0;
    mistakes = 0;
    currentSection++;

    const sections = currentStory === 1 ? story1Sections : story2Sections;
    if (currentSection < sections.length) {
        showStory();
    } else {
        document.getElementById("story-content").style.display = "none";
        document.getElementById("end-screen").style.display = "block";
    }
}

function returnToMenu() {
    document.getElementById("end-screen").style.display = "none";
    document.getElementById("story-content").style.display = "none";
    document.getElementById("story1-submenu").style.display = "none";
    document.getElementById("story2-submenu").style.display = "none";
    document.getElementById("achievements-page").style.display = "none";
    document.getElementById("menu").style.display = "block";
    score = 0;
    mistakes = 0;
    updateProgressBar();
}



