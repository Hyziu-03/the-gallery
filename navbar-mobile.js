        const hamburger = document.querySelector(".hamburger");
        const navigation = document.querySelector(".navigation-list");
        const lines = document.querySelectorAll(".line");
        hamburger.addEventListener("click", () => {
            navigation.classList.toggle("navigation-list-down");
            lines.forEach(line => {
                line.classList.toggle("active");
            })
        })