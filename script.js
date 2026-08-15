
const darkModeBtn = document.getElementById("dark-mode-btn");

// Vérifier si le mode sombre était déjà activé
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");

    if (darkModeBtn) {
        darkModeBtn.textContent = "☀️";
    }
}

// Bouton mode sombre
if (darkModeBtn) {

    darkModeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("darkMode", "enabled");
            darkModeBtn.textContent = "☀️";

        } else {

            localStorage.setItem("darkMode", "disabled");
            darkModeBtn.textContent = "🌙";

        }

    });

}

const texteDynamique = document.getElementById("texteDynamique");

if (texteDynamique) {

    const textes = [
        "Corina",
        "une développeuse ",
        "une passionnée d'informatique ",
        "une créatrice de projets ",
        "une future ingénieure "
    ];

    let indexTexte = 0;
    let indexLettre = 0;
    let effacement = false;

    texteDynamique.textContent = "";

    function animationTexte() {

        const texte = textes[indexTexte];

        if (effacement === false) {

            indexLettre++;

            texteDynamique.textContent = texte.substring(0, indexLettre);

            if (indexLettre === texte.length) {

                effacement = true;

                setTimeout(animationTexte, 2000);

            } else {

                setTimeout(animationTexte, 80);
            }

        } else {

            indexLettre--;

            texteDynamique.textContent = texte.substring(0, indexLettre);

            if (indexLettre === 0) {

                effacement = false;
                indexTexte++;

                if (indexTexte === textes.length) {
                    indexTexte = 0;
                }

                setTimeout(animationTexte, 500);

            } else {

                setTimeout(animationTexte, 45);
            }
        }
    }

    animationTexte();
}