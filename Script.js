
const ingredientsButton = document.getElementById("ingredients-button");
const ingredientsList = document.getElementById("ingredients-list");

ingredientsButton.addEventListener("click", function () {
    const isHidden = ingredientsList.hidden;

    ingredientsList.hidden = !isHidden;
    ingredientsButton.textContent = isHidden
        ? "Hide Ingredients"
        : "Show Ingredients";
    ingredientsButton.setAttribute("aria-expanded", String(isHidden));
});