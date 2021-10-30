let data = JSON.parse(`{
  "totalQuestions": 5,
  "topic": "US States",
  "difficulty": "Easy",
  "questions": [
    {
      "question": "How many states are there in the Unites States of America?",
      "answers": [
        {
          "answer": 25,
          "result": "incorrect"
        },
        {
          "answer": 45,
          "result": "incorrect"
        },
        {
          "answer": 51,
          "result": "incorrect"
        },
        {
          "answer": 50,
          "result": "correct"
        }
      ]
    },
    {
      "question": "What is the capital of Pennsylvania?",
      "answers": [
        {
          "answer": "Harrisburg",
          "result": "correct"
        },
        {
          "answer": "Philadelphia",
          "result": "incorrect"
        },
        {
          "answer": "Pittsburgh",
          "result": "incorrect"
        },
        {
          "answer": "Trenton",
          "result": "incorrect"
        }
      ]
    },
    {
      "question": "Which state is known as 'The First State'?",
      "answers": [
        {
          "answer": "Pennsylvania",
          "result": "incorrect"
        },
        {
          "answer": "Virginia",
          "result": "incorrect"
        },
        {
          "answer": "Delaware",
          "result": "correct"
        },
        {
          "answer": "New York",
          "result": "incorrect"
        }
      ]
    },
    {
      "question": "Which state is the largest in terms of square feet of land?",
      "answers": [
        {
          "answer": "Texas",
          "result": "incorrect"
        },
        {
          "answer": "California",
          "result": "incorrect"
        },
        {
          "answer": "Montana",
          "result": "incorrect"
        },
        {
          "answer": "Alaska",
          "result": "correct"
        }
      ]
    },
    {
      "question": "Which state has the smallest population?",
      "answers": [
        {
          "answer": "Wyoming",
          "result": "correct"
        },
        {
          "answer": "Delaware",
          "result": "incorrect"
        },
        {
          "answer": "Alaska",
          "result": "incorrect"
        },
        {
          "answer": "Maine",
          "result": "incorrect"
        }
      ]
    }
  ]
}`);

// Variables
let currentQuestionNumber = 0;
let correctAnswers = 0;
let totalQuestions = 5;
let quizDifficulty = data["difficulty"];
