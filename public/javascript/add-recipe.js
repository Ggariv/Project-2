async function postRecipe(event) {
    event.preventDefault();
    const meal_title = document.querySelector('input[name="meal-title"]').value;
    const meal_country = document.querySelector('input[name="meal-country"]').value;
    const ing_id = document.querySelector('input[name="ing-id"]').value;
    const qty_amount = document.querySelector('input[name="qty-amount"]').value;
    const meal_instructions = document.querySelector('input[name="meal-instructions"]').value;
    const response = await fetch(`/api/meals`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_url
            }),
        headers: {
            'Content-Type': 'application/json'
            }
        });
    if (response.ok) {
        document.location.replace('/dashboard');
        } 
    else {
        alert(response.statusText);
        }
    }

document.querySelector('.new-recipe-form').addEventListener('submit', postRecipe);