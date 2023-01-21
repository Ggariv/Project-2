// DROPDOWN VALUES
// // ingredient inputs
// <input type="text" id="i1" class="ing_name" value="Bread"/>,
// <input type="text" id="i2" class="ing_name" value="Tomato"/>,
// <input type="text" id="i3" class="ing_name" value="Lettuce"/>,
// <input type="text" id="i4" class="ing_name" value="Butter"/>,
// <input type="text" id="i5" class="ing_name" value="Cheese"/>,
// <input type="text" id="i6" class="ing_name" value="Ham"/>,
// <input type="text" id="i7" class="ing_name" value="Meat"/>;
// <input type="text" id="i8" class="ing_name" value="Onion"/>,
// <input type="text" id="i9" class="ing_name" value="Rice"/>,
// <input type="text" id="i10" class="ing_name" value="Egg"/>,

// // quantity inputs
// <input type="text" id="q1" class="qty_title" value="kg(s)"/>,
// <input type="text" id="q2" class="qty_title" value="gr(s)"/>,
// <input type="text" id="q3" class="qty_title" value="lb(s)"/>,
// <input type="text" id="q4" class="qty_title" value="unit(s)"/>,
// <input type="text" id="q5" class="qty_title" value="dash"/>,
// <input type="text" id="q6" class="qty_title" value="cup(s)"/>,
// <input type="text" id="q7" class="qty_title" value="tbsp"/>,
// <input type="text" id="q8" class="qty_title" value="ounce"/>,
// <input type="text" id="q9" class="qty_title" value="lt(s)"/>,
// <input type="text" id="q10" class="qty_title" value="gallon"/>,

// // country inputs
// <input type="text" id="c1" class="cty_name" value="USA"/>,
// <input type="text" id="c2" class="cty_name" value="France"/>,
// <input type="text" id="c3" class="cty_name" value="India"/>,
// <input type="text" id="c4" class="cty_name" value="Brazil"/>,
// <input type="text" id="c5" class="cty_name" value="Peru"/>,
// <input type="text" id="c6" class="cty_name" value="Australia"/>,
// <input type="text" id="c7" class="cty_name" value="Italy"/>,
// <input type="text" id="c8" class="cty_name" value="Japan"/>,
// <input type="text" id="c9" class="cty_name" value="Taiwan"/>,
// <input type="text" id="c10" class="cty_name" value="China"/>;

// REFTABLE + MEAL + COUNTRY + INGREDIENT + QUANTITY
// { ref_id: "", meal_title: "", meal_img: "", cty_name: "", ing_name: "", ing_img: "", qty_title: "", qty_value: "", meal_instructions: "", views: "", user_id: "" }

async function newMeal(event) {
    event.preventDefault();
    // document.getElementByClass('ing_name').value;
    // document.getElementByClass('qty_title').value;
    // document.getElementByClass('cty_name').value;
    const meal_title = document.querySelector('input[name="meal_title"]').value;
    const meal_img = document.querySelector('input[name="meal_img"]').value;
    const cty_name = document.querySelector('input[name="cty_name"]').value;
    const meal_instructions = document.querySelector('input[name="meal_instructions"]').value;
    const views = document.querySelector('input[name="views"]').value;
    const response = await fetch(`/api/meals`, {
        method: 'POST',
        body: JSON.stringify({
            meal_title,
            meal_img,
            cty_name,
            meal_instructions,
            views
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

// async function recipeTable(event) {
//     event.preventDefault();
//     document.getElementByClass('ing_name').value;
//     document.getElementByClass('qty_title').value;
//     document.getElementByClass('cty_name').value;
//     {
//         meal_title: "";
//         meal_img: "";
//         cty_name: "";
//         ing_name: "";
//         ingredients: [
//             {name: ""},
//             {name: ""},
//             {name: ""}];
//         ing_img: [
//             {name: ""},
//             {name: ""},
//             {name: ""}];
//         qty_title: [
//             {name: ""},
//             {name: ""},
//             {name: ""}];
//         qty_value: [
//             {name: ""},
//             {name: ""},
//             {name: ""}];
//         meal_instructions: "";
//         views: ;
//         user_id: "";
//     }
//     }


document.querySelector('.new-meal-form').addEventListener('submit', newMeal);
