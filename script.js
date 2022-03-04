// Opens Task Manager main prompt
let repeat = true;
let answer;
// Using newTasks instead of new because a variable cannot be named new
let newTasks;
let text = ``;
let remove;

let tasks = [`Prank Cody Crawford`, `Master JavaScript`];
// 




while (repeat) {
    answer = prompt(
        `TASK MANAGER
    
    What would you like to do (Please enter one of the options below):
    "TASKS" - Display All Tasks
    "NEW" - Add A New Task
    "REMOVE" - Remove A Task
    "CLOSE" - Close The Task Manager
    `);

    answer = answer.toUpperCase();

    if (answer === `TASKS`) {
        text = ``;
        for (i = 0; i < tasks.length; i++) {
            if (text === ``) {
                text = tasks[i];
            } else {
                text = text + "\n" + tasks[i];
            }
        }
        alert(text);
        // Else if for adding new task
    } else if (answer === `NEW`) {
        newTasks = prompt(`Please enter the new task:`);
        // to make sure that a new task is entered
        while (newTasks === ``) {
            newTasks = prompt(`Please enter the new task:`);
        }
        tasks.push(newTasks);
        alert(`\"${newTasks}" has been added!`);
        // Else if for removing a task
    } else if (answer === `REMOVE`) {
        text = `Please enter a number to remove: \n`;
        for (i = 1; i <= tasks.length; i++) {
            text = text + `${i}: ${tasks[i - 1]}\n`;
        }
        // loop to make sure that a number is entered
        while (true) {
            remove = parseInt(prompt(text));
            if (remove < 1 || remove > tasks.length || !remove) {
                alert("Not a valid entry");
            } else {
                break;
            }
        }

        remove = remove - 1;
        alert(`${tasks[remove]} has been removed`);
        tasks.splice(remove, 1);
    } else if (answer === `CLOSE`) {
        alert(`Thank you for using task manager!`);
        repeat = false;
    }
}