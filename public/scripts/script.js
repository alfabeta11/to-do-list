document.addEventListener("DOMContentLoaded", ()=> {
    let tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
        let completed = false;
        let completetBtn = task.lastElementChild;
        completetBtn.addEventListener("click", (e) => {
            let icon = completetBtn.lastElementChild;
            if(!completed) {
                task.classList.add("completed");
                icon.classList.add("checked");
                completed = true;
            } else {
                task.classList.remove("completed");
                icon.classList.remove("checked");
                completed = false;
            }
        })
});
})
