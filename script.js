let items = [];
function addlistItems() {
    const newItem = document.getElementById('new-item').value;
    if (newItem) {
        items.push({ name: newItem, purchased: false });
        document.getElementById('new-item').value = '';
        renderList(); 
        }
}


function toggleItems(index) {
    items[index].purchased = !items[index].purchased;
    renderList();
}


function renderList() {
    const list = document.getElementById('groceries');
    list.innerHTML = ''; 
    items.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = item.name;
        listItem.className = item.purchased ? 'completed' : '';
        listItem.onclick = () => toggleItems(index); 
        list.appendChild(listItem); 
    });
}

function Unpurchased() {
    const list = document.getElementById('groceries');
    list.innerHTML = ''; 
    items.forEach((item, index) => {
        if (!item.purchased) {
            const listItem = document.createElement('li');
            listItem.textContent = item.name;
            listItem.onclick = () => toggleItems(index); 
            list.appendChild(listItem);
        }
    });
}
function Purchased() {
    const list = document.getElementById('groceries');
    list.innerHTML = '';
    items.forEach((item, index) => {
        if (item.purchased) {
            const listItem = document.createElement('li');
            listItem.textContent = item.name;
            listItem.className = 'completed'; 
            listItem.onclick = () => toggleItems(index);
            list.appendChild(listItem);
        }
    });
}
