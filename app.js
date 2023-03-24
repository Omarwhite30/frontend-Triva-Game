const questions = [
    {
        question: "When was the Jets last playoff run",
        answers:[
            {a: "2010", correct: true},
            {b:  "2020",wrong: false},
            {c: "1970",wrong: false},
            {d: "1980",wrong: false}
        ]
  
},
    {
        question: "Who is the Jets all time leading touchdown receptions leader",
        answers:[
            {a: "Brandon Marshall",wrong: false},
            {b:  "Eric Decker",wrong: false},
            {c: "Don Maynard",correct: true},
            {d: "Santanio Holmes",wrong: false}
             

        ]
   
        
},
    {
        question: "Who is Jets rushing leader",
        answers: [
            {a: "Thomas Jones",wrong: false},
            {b: "Curtis Martin",correct: true},
            {c: "Breece Hall",wrong: false},
            {d: "Chris Ivory",wrong: false}
             

        ]

},
    {
        question: "Who is Jets all time leading passer",
        answers:[
            {a: "Brett Farve",wrong: false},
            {b: "Ryan Fitzpatrick",wrong: false},
            {c: "Joe Namath",correct: true},
            {d: "Sam Darnold",wrong: false}
        ]
    
    
},
    {
        question: "Who was the QB when the Jets won thier last superbowl",
        answers:[
            {a: "Mark Sanchez",wrong: false},
            {b:  "Brett ",wrong: false},
            {c: "Geno Smith",wrong: false},
            {d: "Joe Naymath",correct: true}
        ]
    
    
},]
startGame = () =>{
    restQuestion = [...questions]
    getNextQuestion()
   }
   //console.log(questions[2])