document.querySelector('.save-btn').addEventListener('click', () => {
    alert('Candidates saved successfully!');
});

document.querySelector('.clear-btn').addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);
});
