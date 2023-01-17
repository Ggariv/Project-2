async function deleteRecipe(event) {
    event.preventDefault();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
        ];
    const response = await fetch(`/api/meals/${id}`, {
        method: 'DELETE'
        });
    if (response.ok) {
        document.location.replace('/dashboard/');
        } 
    else {
        alert(response.statusText);
        }
    }

document.querySelector('.delete-post-btn').addEventListener('click', deleteRecipe);