let options = [];

function addOption(){
    let input = document.getElementById("optionInput");
    let value = input.value.trim();

    if(value !== ""){
        options.push(value);
        let card = document.createElement("div");
        card.className = "card";

        let index = options.length - 1;
        let offset = index * 5;

        card.style.transform = `
            translateX(${offset}px)
            rotate(${index * 2 - 5}deg)
        `;

        card.style.zIndex = index;
        card.textContent = value;

        document.getElementById("cards").appendChild(card);

        input.value = "";

        updateDecideButton();
    }
}

function decide(){
    if (options.length < 2) {
        return;
    }

    localStorage.setItem(
        "choices",
        JSON.stringify(options)
    );
    window.location.href = "result.html";
}

function updateDecideButton() {
    const decideBtn = document.getElementById("decideBtn");

    if (decideBtn) {
        decideBtn.disabled = options.length < 2;
    }
}

if (document.getElementById("result")) {
    const result = document.getElementById("result");

    const choices =
        JSON.parse(localStorage.getItem("choices")) || [];

    if (choices.length > 0) {

        const chosen =
            choices[Math.floor(Math.random() * choices.length)];

        result.textContent = "";

        setTimeout(() => {
            result.textContent = chosen;
            result.classList.add("show-result");

            document.querySelectorAll(".star").forEach(star => {
                star.classList.add("show-star");
            });

        }, 1000);

    } else {
        result.textContent = "No choices added.";
    }
}

const optionInput = document.getElementById("optionInput");

if (optionInput) {
    optionInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            addOption();
        }
    });
}

const cat = document.querySelector(".cat");

const FRAME_WIDTH = 68;


// frame number starts from 1
function showFrame(frame) {

    let position = -(frame - 1) * FRAME_WIDTH;

    cat.style.backgroundPosition = `${position}px 0px`;
}


// Animation timeline
const blinkAnimation = [

    // normal idle
    {
        frame: 1,
        time: 10000
    },


    // closing eyes
    {
        frame: 2,
        time: 120
    },

    {
        frame: 3,
        time: 120
    },


    // eyes fully open
    {
        frame: 4,
        time: 10000
    },

    // blinking
    {
        frame: 5,
        time: 120
    },

    {
        frame: 6,
        time: 120
    },

    {
        frame: 7,
        time: 120
    },

    {
        frame: 6,
        time: 120
    },

    {
        frame: 5,
        time: 120
    },

    {
        frame: 4,
        time: 10000
    },

    // opening back to normal
    {
        frame: 3,
        time: 120
    },

    {
        frame: 2,
        time: 120
    },


    {
        frame: 1,
        time: 35000
    }

];


let current = 0;


function animateCat() {

    let animation = blinkAnimation[current];

    showFrame(animation.frame);


    current++;

    if(current >= blinkAnimation.length){
        current = 0;
    }


    setTimeout(
        animateCat,
        animation.time
    );
}


// start animation
animateCat();