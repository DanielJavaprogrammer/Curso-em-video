const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let checkedItems = [];

function handleCheckboxClick(event) {
    const checkbox = event.target;

    if (checkbox.checked) {
        checkedItems.push(checkbox);
        if (checkedItems.length > 2) {
            const oldestCheckbox = checkedItems.shift();
            oldestCheckbox.checked = false;
        }
    } else {
        checkedItems = checkedItems.filter(item => item !== checkbox);
    }
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleCheckboxClick);
});