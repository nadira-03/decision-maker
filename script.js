let options = [];

function addOption(){
    let input = document.getElementById("optionInput");
    let value = input.value;

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
    }
}

function decide(){
    // save choices temporarily
    localStorage.setItem(
        "choices",
        JSON.stringify(options)
    );
    window.location.href = "result.html";
}

// Only run this on result.html
if (document.getElementById("result")) {

    const choices =
        JSON.parse(localStorage.getItem("choices")) || [];

    if (choices.length > 0) {

        const chosen =
            choices[Math.floor(Math.random() * choices.length)];

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

result.textContent = "";

setTimeout(() => {

    result.textContent = chosen;
    result.classList.add("show-result");

    document.querySelectorAll(".star").forEach(star => {
        star.classList.add("show-star");
    });

}, 1000);