const dogImage = document.getElementById("dogImage");
const loadDogBtn = document.getElementById("loadDogBtn");
const loadingContainer = document.getElementById("loadingContainer");


async function fetchDog() {

    try {

        loadingContainer.style.display = "block";
        dogImage.style.display = "none";

        const response = await fetch(
            "https://dog.ceo/api/breeds/image/random"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch dog image");
        }

        const data = await response.json();

        dogImage.src = data.message;

        dogImage.onload = () => {
            loadingContainer.style.display = "none";
            dogImage.style.display = "block";
        };

    } catch (error) {

        loadingContainer.textContent = error.message;

        console.error(error);
    }
}

loadDogBtn.addEventListener("click", fetchDog);

fetchDog();