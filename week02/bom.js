const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', (e) => {
    e.preventDefault();
    
    const value = input.value;
    if (value) {
        const listItem = document.createElement('li');
        listItem.textContent = value;
        list.appendChild(listItem);
        input.value = '';

        const btnDelete = document.createElement('button');
        btnDelete.textContent = '❌';
        btnDelete.addEventListener('click', () => {
            list.removeChild(listItem);
            input.focus();
        } )

        listItem.append(btnDelete);
    }
        input.focus();
});