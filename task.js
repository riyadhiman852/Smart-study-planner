const form = document.getElementById('taskform');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const subject = document.getElementById('subject').value.trim();
    const topic = document.getElementById('topic').value.trim();
    const taskText = document.getElementById('task').value.trim();
    const date = document.getElementById('date').value;

    if(!subject || !topic || !taskText){
        alert('Please fill all required fields!');
        return;
    }

    // Get tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Add new task
    tasks.push({
        subject: subject,
        topic: topic,
        task: taskText,
        date: date,
        completed: false
    });

    // Save to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    form.reset();
    alert('Task added successfully!');
});
