document.addEventListener('DOMContentLoaded', function() {
    const taskList = document.getElementById('task-list');
    const progressBar = document.getElementById('progress-bar');

    // LocalStorage se tasks read karo
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Task list clear karo
    taskList.innerHTML = '';

    // Tasks show karo
    tasks.forEach((t, index) => {
        const div = document.createElement('div');
        div.classList.add('task-item');

        div.innerHTML = `
            <span><strong>${t.subject}</strong> - ${t.topic} - ${t.task} - ${t.date || 'No date'}</span>
            <input type="checkbox" ${t.completed ? 'checked' : ''} data-index="${index}">
        `;
        taskList.appendChild(div);
    });

    // Progress bar update function
    function updateProgress() {
        let completed = tasks.filter(t => t.completed).length;
        let total = tasks.length;
        let percent = total ? (completed / total) * 100 : 0;
        progressBar.style.width = percent + '%';
    }

    updateProgress();

    // Checkbox toggle event
    taskList.addEventListener('change', function(e) {
        if (e.target.type === 'checkbox') {
            let idx = e.target.getAttribute('data-index');
            tasks[idx].completed = e.target.checked;
            localStorage.setItem('tasks', JSON.stringify(tasks));
            updateProgress();
        }
    });
});
