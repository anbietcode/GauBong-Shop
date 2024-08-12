let availableKeyWords = [
    'Bartholomew Bear',
    'Bedtime Bear',
    'Harvey Bear',
    'Knox Bear',
    'Bashful Pink Bunny',
    'Yummy Bunny',
    'Christmas Bunny',
    'Bea Beige Bunny',
    'Jellycat Jack',
    'Cream Kitten',
    'Ginger Cat',
    'Grey Kitty'
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value;
    if (input.lenght) {
        result = availableKeyWords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
}

function display(result) {
    const content = result.map((list) => {
        return "<li>" + list + "</li>";
    });

    resultBox.innerHTML = "<ul>" + content + "</ul>";
} 
