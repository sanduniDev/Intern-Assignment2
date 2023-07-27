// Synchronous Readline for interactively running to have a conversation with the user via a console
import * as readlineSync from 'readline-sync';

// Now let's create an array of quiz questions. Each question will be an object with
// three properties: question , options , and answer .

// In this code, Question is a type alias representing a custom data type. It defines the structure of an object that has three properties:


type Question = {
    question: string,
    options: string[],
    answer: string
    };
    const questions: Question[] = [
    {
    question: "What is TypeScript?",
    options: ["A programming language", "A movie", "A type of pseudocode"],
    answer: "A programming language"
    },
    {
        question: "Who created TypeScript?",
        options: ["Microsoft", "Apple", "Google"],
        answer: "Microsoft"
        },
        {
            question: "TypeScript is?",
            options: ["Case-sensitive", "Case-insensitive", ],
            answer: "Case-sensitive"
            },
            {
                question: "What is the inherited type for the variable example in 'const example = ['Dylan']'?",
                options: ["any[]", "string[]", "string", "unknown[]" ],
                answer: "string[]"
                },
                {
                    question: "Which is a successful example of this tuple '[number, string]'?",
                    options: ["const ourTuple = [101]", "const ourTuple = ['Coding God', 101]", "const ourTuple = [101, 101, 'Coding God', 'Coding God']", "const ourTuple = [101, 'Coding God']" ],
                    answer: "const ourTuple = [101, 'Coding God']"
                    },
        ];

        // Next, let's create a function to display a question, show the options, and get the
        // user's answer:
        function askQuestion(question: Question): string {
            console.log(question.question);
            let index = readlineSync.keyInSelect(question.options, "Please choose your answer:");
            if (index === -1) {
            console.log("You chose to skip the question.");
            return "";
            }
            return question.options[index];
            }
              

            // Now we need a function to run the quiz and calculate the score:

        function runQuiz(questions: Question[]) {
            let score = 0;
                for (let question of questions) {
                    let answer = askQuestion(question);
                        if (answer === question.answer) {
                            score++;
                        }
                }
                console.log(`Your score is: ${score}/${questions.length}`);
            }

            // Finally, we can call our runQuiz function with our questions array:

            runQuiz(questions);

        // In your terminal, navigate to your project root and use ts-node to run your TypeScript
        // file:

    