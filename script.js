// const container = document.getElementById("container");
// const sentences = [
//     { text: "Câu 1", delay: 0 }, // No delay
//     { text: "Câu 2", delay: 1000 }, // Delay of 1 second
//     { text: "Câu 3", delay: 2000 }  // Delay of 2 seconds
// ];

// let currentSentence = 0;

// function showNextSentence() {
//     const current = sentences[currentSentence];
//     const sentenceElement = document.createElement("span");
//     sentenceElement.textContent = current.text;
//     sentenceElement.classList.add("sentence");
//     container.appendChild(sentenceElement);

//     setTimeout(() => {
//         sentenceElement.classList.add("active");
//     }, current.delay);

//     currentSentence++;

//     if (currentSentence < sentences.length) {
//         showNextSentence();
//     }
// }

// showNextSentence();
