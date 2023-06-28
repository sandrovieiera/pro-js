const input = document.querySelector('input');
const counter = document.querySelector('span');

counter.style.color = 'red';

input.addEventListener('input', () => {
    if(input.value.length < 20){
        counter.innerText = input.value.length;
    }else{
        counter.innerText = '20';
        input.value = input.value.substring(0,20)
    }
})


