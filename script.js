 <script>
        // Exemple d'animation JavaScript (facultatif)
        const logo = document.querySelector(".marvel-logo");

        logo.addEventListener("mouseover", () => {
            logo.style.animationPlayState = "paused";
        });

        logo.addEventListener("mouseout", () => {
            logo.style.animationPlayState = "running";
        });
    </script>