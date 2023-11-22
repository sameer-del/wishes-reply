const dareArray = [
    { text: "Thank you so much for the beautiful birthday wishes!✨ Your words warmed my heart 🥰and made my day extra special.😎" },
    { text: "I'm grateful to have friends/family like you who made my birthday even more memorable with your thoughtful wishes.✨🥰 Thank you!" },
    { text: "Thank you for the birthday wishes! Your thoughtful words brought a smile to my face and joy to my heart.😊✨🥰 I'm truly grateful for your friendship" },
    { text: "thanks dah mapla and mapiii and machiiii😂✨😊" },
    { text: "yaarukum re story and re status podala kochikathingah boys😅😊👀" },
];


function generateRandomDare() {
    const randomIndex = Math.floor(Math.random() * dareArray.length);
    return dareArray[randomIndex].text;
}


document.getElementById("play").addEventListener("click", function () {
    const dareTextElement = document.getElementById("dares");
    dareTextElement.textContent = generateRandomDare();
});
