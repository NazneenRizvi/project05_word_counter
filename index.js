import inquirer from "inquirer";
async function countWords() {
    const sentenceWordArrays = [];
    while (true) {
        const answers = await inquirer.prompt([
            {
                name: "Sentence",
                type: "input",
                message: "Please write your sentence to count words: ",
            },
            {
                name: "Continue",
                type: "list",
                message: "Do you want to continue?",
                choices: ["Yes", "No"],
            },
        ]);
        const words = answers.Sentence.trim().split(" ");
        console.log(words);
        console.log(`Word count in your sentence is ${words.length}`);
        sentenceWordArrays.push(words);
        if (answers.Continue === "No") {
            break;
        }
    }
    return sentenceWordArrays;
}
countWords().then((sentenceWordArrays) => {
});
