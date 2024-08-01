const input_box = document.getElementById('input-box');
const list_container = document.getElementById('list-container');

function add_task() {
    if (input_box.value === '') {
        alert("Please write some stuff !!");
    } else {
        let li = document.createElement('li')
        li.innerHTML = input_box.value;
        list_container.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }

    // clear input field after enter value
    input_box.value = '';

    save_data_local_storage();
}

list_container.addEventListener('click', function(e){
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        save_data_local_storage();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        save_data_local_storage();
    } 
}, false);

function save_data_local_storage() {
    localStorage.setItem('data', list_container.innerHTML);
}

function get_task_local_storage() {
    list_container.innerHTML = localStorage.getItem('data');
}
get_task_local_storage();