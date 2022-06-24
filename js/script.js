// Speicherwerte werden erzeugt
const inpKey = document.getElementById("inpKey");
const inpWord = document.getElementById("inpWord");
const inpButtonDe = document.getElementById("inpButtonDe");
const inpButtonInt = document.getElementById("inpButtonInt");
const toSpell = document.getElementById("toSpell");
const spellOutput = document.getElementById("spellOutput");
const spellOut = [];
const language = localStorage.getItem("Tafel");
document.getElementById("inpKey").style.display = "none";

// Input wird aus index.html per onclick geholt und in localStorage gespeichert
inpButtonDe.onclick = function saveValues() {
    const key = inpKey.value;
    const value = inpWord.value;

    if (key && value) {
        localStorage.setItem(key, value);
        localStorage.setItem('Tafel', 'Deutsch');
        location.reload();
    }
};

inpButtonInt.onclick = function saveValues() {
    const key = inpKey.value;
    const value = inpWord.value;

    if (key && value) {
        localStorage.setItem(key, value);
        localStorage.setItem('Tafel', 'International');
        location.reload();
    }
};

// Speicherwerte aus localStorage werden im Output auf index.html angezeigt
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    toSpell.innerHTML += `${key}: ${value}<br>`;
}

// spellOutString wird in Array "spellOut" gesliced, anzahl der Buchstaben wird in Output unter Speicherwerten angezeigt
let spellOutString = String(localStorage.getItem("Wort")).toLowerCase();

for (let i = 0; i < spellOutString.length; i++) {
    text = spellOutString.slice(i, (i + 1));
    spellOut.push(text);
}

toSpell.innerHTML += `Zeichen: ${spellOut.length}`;
console.log(spellOut);

if (language == "Deutsch") {
    for (let i = 0; i < spellOut.length; i++) {
        console.log(i);
        var text = spellOut[i];

        console.log(text);
        switch (text) {

            case "s":
                text = `${spellOut[i]}${spellOut[i + 1]}${spellOut[i + 2]}`;
                if (text.match(/sch/i)) {
                    text = text.replace(/sch/i, "Schule ");
                    spellOutput.innerHTML += `${text}`;
                    spellOut.splice(i, 3, "sch");
                    break;

                } else {
                    text = spellOut[i];
                    console.log(spellOut[i]);
                    text = text.replace(/s/i, "Samuel");
                    spellOutput.innerHTML += `${text} `;
                    break;
                }
            case "c":

                text = spellOut[i] + spellOut[i + 1];
                if (text.match(/ch/i)) {
                    text = text.replace(/ch/i, "Charlotte");
                    spellOutput.innerHTML += `${text} `;
                    spellOut.splice(i, 2, "ch ")
                    break;
                } else {
                    text = spellOut[i];
                    text = text.replace(/c/i, "Cäsar");
                    spellOutput.innerHTML += `${text} `;

                    break;
                }

            case "a":
                text = text.replace(/a/i, "Anton");
                spellOutput.innerHTML += `${text} `;
                break;
            case "ä":
                text = text.replace(/ä/i, "Ärger");
                spellOutput.innerHTML += `${text} `;
                break;
            case "b":
                text = text.replace(/b/i, "Berta");
                spellOutput.innerHTML += `${text} `;
                break;
            case "d":
                text = text.replace(/d/i, "Dora");
                spellOutput.innerHTML += `${text} `;
                break;
            case "e":
                text = text.replace(/e/i, "Emil");
                spellOutput.innerHTML += `${text} `;
                break;
            case "f":
                text = text.replace(/f/i, "Friedrich");
                spellOutput.innerHTML += `${text} `;
                break;
            case "g":
                text = text.replace(/g/i, "Gustav");
                spellOutput.innerHTML += `${text} `;
                break;
            case "h":
                text = text.replace(/h/i, "Heinrich");
                spellOutput.innerHTML += `${text} `;
                break;
            case "i":
                text = text.replace(/i/i, "Ida");
                spellOutput.innerHTML += `${text} `;
                break;
            case "j":
                text = text.replace(/j/i, "Julius");
                spellOutput.innerHTML += `${text} `;
                break;
            case "k":
                text = text.replace(/k/i, "Kaufmann");
                spellOutput.innerHTML += `${text} `;
                break;
            case "l":
                text = text.replace(/l/i, "Ludwig");
                spellOutput.innerHTML += `${text} `;
                break;
            case "m":
                text = text.replace(/m/i, "Martha");
                spellOutput.innerHTML += `${text} `;
                break;
            case "n":
                text = text.replace(/n/i, "Nordpol");
                spellOutput.innerHTML += `${text} `;
                break;
            case "o":
                text = text.replace(/o/i, "Otto");
                spellOutput.innerHTML += `${text} `;
                break;
            case "ö":
                text = text.replace(/ö/i, "Ökonom ");
                spellOutput.innerHTML += `${text} `;
                break;
            case "p":
                text = text.replace(/p/i, "Paula");
                spellOutput.innerHTML += `${text} `;
                break;
            case "q":
                text = text.replace(/q/i, "Quelle");
                spellOutput.innerHTML += `${text} `;
                break;
            case "r":
                text = text.replace(/r/i, "Richard");
                spellOutput.innerHTML += `${text} `;
                break;
            case "ß":
                text = text.replace(/ß/i, "Eszett");
                spellOutput.innerHTML += `${text} `;
                break;
            case "t":
                text = text.replace(/t/i, "Theodor");
                spellOutput.innerHTML += `${text} `;
                break;
            case "u":
                text = text.replace(/u/i, "Ulrich");
                spellOutput.innerHTML += `${text} `;
                break;
            case "ü":
                text = text.replace(/ü/i, "Übermut ");
                spellOutput.innerHTML += `${text}`;
                break;
            case "v":
                text = text.replace(/v/i, "Viktor");
                spellOutput.innerHTML += `${text} `;
                break;
            case "w":
                text = text.replace(/w/i, "Wilhelm");
                spellOutput.innerHTML += `${text} `;
                break;
            case "x":
                text = text.replace(/x/i, "Xanthippe");
                spellOutput.innerHTML += `${text} `;
                break;
            case "y":
                text = text.replace(/y/i, "Ypsilon");
                spellOutput.innerHTML += `${text} `;
                break;
            case "z":
                text = text.replace(/z/i, "Zacharias");
                spellOutput.innerHTML += `${text} `;
                break;

            default:
                text = spellOut[i];

                spellOutput.innerHTML += `${text} <br><hr>`

                break;

        }

    }
}
else if (language == "International") {
    for (let i = 0; i < spellOut.length; i++) {
        console.log(i);
        var text = spellOut[i];
        console.log(text);
        switch (text) {
            case "c":
                text = spellOut[i] + spellOut[i + 1];
                if (text.match(/ch/i)) {
                    text = text.replace(/ch/i, "Charlie-Hotel");
                    spellOutput.innerHTML += `${text} `;
                    spellOut.splice(i, 2, "ch ")
                    break;
                } else {
                    text = text.replace(/c/i, "Charlie");
                    spellOutput.innerHTML += `${text} `;
                    break;
                }

            case "a":
                text = text.replace(/a/i, "Alpha");
                spellOutput.innerHTML += `${text} `;
                break;
            case "ä":
                text = text.replace(/ä/i, "Alpha-Echo");
                spellOutput.innerHTML += `${text} `;
                break;
            case "b":
                text = text.replace(/b/i, "Bravo");
                spellOutput.innerHTML += `${text} `;
                break;
            case "d":
                text = text.replace(/d/i, "Delta");
                spellOutput.innerHTML += `${text} `;
                break;
            case "e":
                text = text.replace(/e/i, "Echo");
                spellOutput.innerHTML += `${text} `;
                break;
            case "f":
                text = text.replace(/f/i, "Foxtrott");
                spellOutput.innerHTML += `${text} `;
                break;
            case "g":
                text = text.replace(/g/i, "Golf");
                spellOutput.innerHTML += `${text} `;
                break;
            case "h":
                text = text.replace(/h/i, "Hotel");
                spellOutput.innerHTML += `${text} `;
                break;
            case "i":
                text = text.replace(/i/i, "India");
                spellOutput.innerHTML += `${text} `;
                break;
            case "j":
                text = text.replace(/j/i, "Juliett");
                spellOutput.innerHTML += `${text} `;
                break;
            case "k":
                text = text.replace(/k/i, "Kilo");
                spellOutput.innerHTML += `${text} `;
                break;
            case "l":
                text = text.replace(/l/i, "Lima");
                spellOutput.innerHTML += `${text} `;
                break;
            case "m":
                text = text.replace(/m/i, "Mike");
                spellOutput.innerHTML += `${text} `;
                break;
            case "n":
                text = text.replace(/n/i, "November");
                spellOutput.innerHTML += `${text} `;
                break;
            case "o":
                text = text.replace(/o/i, "Oscar");
                spellOutput.innerHTML += `${text} `;
                break;
            case "ö":
                text = text.replace(/ö/i, "Oscar-Echo");
                spellOutput.innerHTML += `${text} `;
                break;
            case "p":
                text = text.replace(/p/i, "Papa");
                spellOutput.innerHTML += `${text} `;
                break;
            case "q":
                text = text.replace(/q/i, "Quebec");
                spellOutput.innerHTML += `${text} `;
                break;
            case "r":
                text = text.replace(/r/i, "Romeo");
                spellOutput.innerHTML += `${text} `;
                break;
            case "s":
                text = text.replace(/s/i, "Sierra");
                spellOutput.innerHTML += `${text} `;
                break;
            case "ß":
                text = text.replace(/ß/i, "Sierra-Sierra");
                spellOutput.innerHTML += `${text} `;
                break;
            case "t":
                text = text.replace(/t/i, "Tango");
                spellOutput.innerHTML += `${text} `;
                break;
            case "u":
                text = text.replace(/u/i, "Uniform");
                spellOutput.innerHTML += `${text} `;
                break;
            case "ü":
                text = text.replace(/ü/i, "Uniform-Echo ");
                spellOutput.innerHTML += `${text}`;
                break;
            case "v":
                text = text.replace(/v/i, "Victor");
                spellOutput.innerHTML += `${text} `;
                break;
            case "w":
                text = text.replace(/w/i, "Whiskey");
                spellOutput.innerHTML += `${text} `;
                break;
            case "x":
                text = text.replace(/x/i, "X-Ray");
                spellOutput.innerHTML += `${text} `;
                break;
            case "y":
                text = text.replace(/y/i, "Yankee");
                spellOutput.innerHTML += `${text} `;
                break;
            case "z":
                text = text.replace(/z/i, "Zulu");
                spellOutput.innerHTML += `${text} `;
                break;
            default:
                text = spellOut[i];
                spellOutput.innerHTML += `${text}<br>`
                break;

        }

    }
}
else {
    spellOutput.innerHTML += `${language} is not defined <br>`;
}



// for (let i = 0; i < spellOut.length; i++){
//     let text = spellOut[i].toString();
//     text.replace(/a/i, "Alpha");
//     text.replace(/b/i, "Beta");
//     text.replace(/c/i, "Charlie");
//     console.log(text);
// }

//spellOut.push(spellOutString.split(''));

//Log

console.log(spellOut);
console.log("not broken");
localStorage.clear();