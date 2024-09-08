// Wait for the document to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {

    // Select the Add Task button, task input field, and task list
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get the task text from the input field and trim it
        const taskText = taskInput.value.trim();

        // Check if the input is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return; // Stop if no task is entered
        }

        // Create a new list item (li) for the task
        const li = document.createElement('li');
        li.textContent = taskText; // Set the list item's text to the task

        // Create a remove button for each task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn"; // Add a class for styling

        // Add functionality to the remove button
        removeBtn.onclick = function() {
            taskList.removeChild(li); // Remove the task when clicked
        };

        // Append the remove button to the task list item
        li.appendChild(removeBtn);

        // Append the task list item (li) to the unordered list (taskList)
        taskList.appendChild(li);

        // Clear the task input field after adding the task
        taskInput.value = "";
    }

    // Event listener for the Add Task button
    addButton.addEventListener('click', addTask);

    // Event listener for pressing the 'Enter' key inside the task input field
    taskInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') { // Check if the Enter key was pressed
            event.preventDefault(); // Prevent form submission or default behavior
            addTask(); // Call the addTask function
        }
    });

});


