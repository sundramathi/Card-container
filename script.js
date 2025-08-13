document.getElementById("createCardBtn").addEventListener("click", () => {
    const name = prompt("Enter name:");
    const role = prompt("Enter role:");

    if (name && role) {
        // Create card container
        const card = document.createElement("div");
        card.classList.add("card");

        // Name element
        const nameEl = document.createElement("h3");
        nameEl.textContent = name;

        // Role element
        const roleEl = document.createElement("p");
        roleEl.textContent = role;

        // Remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => {
            card.style.opacity = "0";
            setTimeout(() => card.remove(), 300); // smooth removal
        });

        // Append elements to card
        card.appendChild(nameEl);
        card.appendChild(roleEl);
        card.appendChild(removeBtn);

        // Add card to container
        document.getElementById("cardContainer").appendChild(card);
    } else {
        alert("Please enter both name and role.");
    }
});