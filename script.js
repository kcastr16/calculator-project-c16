let items = document.querySelectorAll('#item');

items.forEach(item => {
    item.addEventListener("click", function(numInput) {
        console.log(numInput.target.value);
    });
});