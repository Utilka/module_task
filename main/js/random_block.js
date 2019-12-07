function randcolor() { return Math.floor((Math.random() * 255) + 1) }

function randlen() { return Math.floor((Math.random() * 800) + 200) }


var rand_block = document.getElementById("rand-block");
rand_block.addEventListener("click", function() {
    rand_block.style.backgroundColor = `rgb(${randcolor()}, ${randcolor()}, ${randcolor()})`;
    rand_block.style.height = `${randlen()}px`;
    rand_block.style.width = `${randlen()}px`;

});