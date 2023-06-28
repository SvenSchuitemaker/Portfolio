async function createCards() {
    const response = await fetch("jsonFiles/projecten.JSON");
    const data = await response.json();

    const div = document.getElementById("projecten-container");

    for (let i = 0; i < data.projecten.length; i++) {

        // Create card
        const card = document.createElement("div");
        card.classList.add("flex");
        card.classList.add("flex-row");
        card.classList.add("justify-center");
        card.classList.add("mt-10");
        // Create foto div
        const foto = document.createElement("div");
        foto.classList.add("w-1/4");
        foto.classList.add("flex");
        foto.classList.add("flex-col");
        // Create foto
        const img = document.createElement("img");
        img.classList.add("border-r-2");
        img.src = data.projecten[i].foto;
        foto.appendChild(img);
        // Create context div
        const context = document.createElement("div");
        context.classList.add("w-1/4");
        context.classList.add("flex");
        context.classList.add("flex-col");
        context.classList.add("p-4");
        // Create context
        const h2 = document.createElement("h2");
        h2.classList.add("text-2xl");
        h2.innerHTML = data.projecten[i].naam;
        const p = document.createElement("p");
        p.innerHTML = data.projecten[i].beschrijving;
        context.appendChild(h2);
        context.appendChild(p);
        // Create button link
        const button = document.createElement("a");
        button.classList.add("mt-4");
        button.classList.add("bg-blue-500");
        button.classList.add("hover:bg-blue-700");
        button.classList.add("text-white");
        button.classList.add("font-bold");
        button.classList.add("py-2");
        button.classList.add("px-4");
        button.classList.add("rounded");
        button.href = data.projecten[i].link;
        button.innerHTML = "Bekijk project";
        context.appendChild(button);

        if (i % 2 === 0) {
            card.appendChild(foto);
            card.appendChild(context);
            div.appendChild(card);
            // Even index
        } else {
            card.appendChild(context);
            card.appendChild(foto);
            div.appendChild(card);
            // Oneven index
        }
    }

    return div;
}

createCards();

