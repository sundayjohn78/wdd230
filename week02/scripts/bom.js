// JS file

// Declare variables to hold references to input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Create a click event listener for the Add Chapter button
button.addEventListener('click', () => {
    // Check if the input is not blank
    if (input.value.trim() !== '') {
        // Create a new list item
        const li = document.createElement('li');
        
        // Create a delete button
        const deleteButton = document.createElement('button');
        
        // Set text content for list item
        li.textContent = input.value.trim();
        
        // Set text content for delete button
        deleteButton.textContent = '❌';
        
        // Append delete button to list item
        li.appendChild(deleteButton);
        
        // Append list item to the list
        list.appendChild(li);
        
        // Add an event listener to delete button to remove list item when clicked
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });
        
        // Clear input value
        input.value = '';
        
        // Set focus back to input
        input.focus();
    } else {
        // Provide a message or do nothing if input is blank
        // For simplicity, let's just log a message to console
        console.log('Please enter a chapter.');
    }
});

