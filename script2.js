window.onload = function(){
    var seconds = 00;
    var minutes = 00;
	//var hours = 00;
    var OutputSeconds = document.getElementById("second");
    var OutputMinutes = document.getElementById("minute");
	//var OutputHours = document.getElementById("hour")
    var buttonStart = document.getElementById("start");
    var buttonStop = document.getElementById("stop");
    var buttonReset = document.getElementById("reset");
    var Interval;

    buttonStart.addEventListener('click', (e) => {
        Interval = setInterval(startTimer, 1000);  // millisecond 10 = 0.01 second
    });

    buttonStop.addEventListener('click', (e) => {
		clearInterval(Interval);
    });

    buttonReset.addEventListener('click', (e) => {
        clearInterval(Interval);
		//hours ="00";
        minutes = "00";
        seconds = "00";
		//OutputHours.innerHTML = hours;
        OutputSeconds.innerHTML = seconds;
        OutputMinutes.innerHTML = minutes;
    });

    function startTimer(){
        seconds++;
        if(seconds <= 9){
            OutputSeconds.innerHTML = "0" + seconds;
        }

        if(seconds > 9){
            OutputSeconds.innerHTML = seconds;
        }

        if(seconds > 60){
            minutes++;
            OutputMinutes.innerHTML = "0" + minutes;
            seconds= 0;
            OutputSeconds.innerHTML= "0" + 0;
        }

        if(minutes > 9){
            OutputMinutes.innerHTML = minutes;
        }
		/*if(minutes > 60){
			hours++;
			OutputHours.innerHTML = "0" + hours;
            minutes= 0;
            OutputMinutes.innerHTML = "0" + 0;
		}
		if(hours > 9){
			OutputHours.innerHTML = hours;
		}*/
    }
}
window.addEventListener('load', () => {
	let form = document.querySelector("#form");
	let input = document.querySelector("#newTaskInput");
	let list = document.querySelector("#task");
    let check = document.getElementById('clear');
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const task = input.value;
        if(task.length == 0){
            alert("Please Enter a Task");
        }
        else{
		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);
        
		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'DONE';
        
		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list.appendChild(task_el);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText== "EDIT") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "EDIT";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});
		task_delete_el.addEventListener('click', (e) => {
			list.removeChild(task_el);
		});
        check.addEventListener('click', (e) =>{
            window.location.reload();
        });
        }
	});
});
