const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Who was the QB when the Jets won thier last superbowl?',
    answers: [
      { text: 'Geno Smith', correct: false },
      { text: 'Mark Sanchez', correct: false },
      { text: 'Joe Naymath', correct: true },
      { text: 'Brett Farve', correct: false }
    ]
  },
  {
    question: 'Who is Jets all time leading passer?',
    answers: [
      { text: 'Ryan Fitzpatrick', correct: false},
      { text: 'Brett Farve', correct: false},
      { text: 'Sam Darnold', correct: false },
      { text: 'Joe Namath', correct: true }
      
     
    ]
  },
  {
    question: 'Who is Jets rushing leader?',
    answers: [
      { text: 'Thomas Jones', correct: false },
      { text: 'Curtis Martin', correct: true },
      { text: 'Breece Hall', correct: false },
      { text: 'Chris Ivory', correct: false }
    ]
  },
  {
    question: 'When was the Jets last playoff run?',
    answers: [
      { text: '1980', correct: false },
      { text: '1970', correct: false },
      { text: '2020', correct: false },
      { text: '2010', correct: true }

    ]

  },
  {
    question: 'Who is the Jets all time leading touchdown receptions leader?',
    answers: [
      { text: 'Brandon Marshall', correct: false },
      { text: 'Eric Decker', correct: false },
      { text: 'Don Maynard', correct: true },
      { text: 'Santanio Holmes', correct: false }
      
    ]

  },
  {
    question: 'Who is considered the Jets best defneder of all time?',
    answers: [
      { text: 'Mark Sanchez', correct: false },
      { text: 'David Harris', correct: false },
      { text: 'Joe Klecko', correct: true },
      { text: 'Calvin Pace', correct: false }
      
    ]

  },

  {
    question: 'last time jets had the Off/Def rookies of the year?',
    answers: [
      { text: '2020', correct: false },
      { text: '1975', correct: false },
      { text: '1991', correct:false },
      { text: '2023', correct: true}
      
    ]

  }


]

