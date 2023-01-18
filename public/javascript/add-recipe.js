// quantity inputs
<input type="text" id="q1" class="ing_quantity" value="kg(s)"/>,
<input type="text" id="q2" class="ing_quantity" value="gr(s)"/>,
<input type="text" id="q3" class="ing_quantity" value="lb(s)"/>,
<input type="text" id="q4" class="ing_quantity" value="unit(s)"/>,
<input type="text" id="q5" class="ing_quantity" value="dash"/>,
<input type="text" id="q6" class="ing_quantity" value="cup(s)"/>,
<input type="text" id="q7" class="ing_quantity" value="tbsp"/>,

// ingredient inputs
<input type="text" id="i1" class="ing_name" value="Bread"/>,
<input type="text" id="i2" class="ing_name" value="Tomato"/>,
<input type="text" id="i3" class="ing_name" value="Lettuce"/>,
<input type="text" id="i4" class="ing_name" value="Butter"/>,
<input type="text" id="i5" class="ing_name" value="Cheese"/>,
<input type="text" id="i6" class="ing_name" value="Ham"/>,
<input type="text" id="i7" class="ing_name" value="Pickles"/>,


async function postRecipe(table, data, event) {
    event.preventDefault();
    const meal_title = document.querySelector('input[name="meal-title"]').value;
    
    // const qty_value = //document.querySelector('input[name="ing-id"]').value;
    const qty_value = document.querySelector('input[name="qty_value"]').value;
    const user_id = document.querySelector('input[name="user_id"]').value;
    const response = await fetch(`/api/recipes`, {
        method: 'POST',
        body: JSON.stringify({
            meal_id,
            qty_value,
            user_id
            }),
        headers: {
            'Content-Type': 'application/json'
            }
        });
    if (response.ok) {
        document.location.replace('/recipes');
        } 
    else {
        alert(response.statusText);
        }
    }

document.querySelector('.new-recipe-form').addEventListener('submit', postRecipe);