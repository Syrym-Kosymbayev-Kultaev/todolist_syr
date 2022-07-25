const quizData = [
    {
        question: 'Cколько лет длилась столетняя война?',
        a: '98',
        b: '100',
        c: '116',
        d: '121',
        correct: 'c'
    },
    {
        question: 'До того, как была открыта гора Эверест, какая гора была самой высокой в мире?',
        a: 'Хан-тенгри',
        b: 'Эверест',
        c: 'Монблан',
        d: 'Казбек',
        correct: 'b'
    },
    {
        question: 'Кто президент РК?',
        a: 'Касымьжемель Кемелевич',
        b: 'Касым Кемель Жомартович',
        c: 'Влдимр Влдимрвч',
        d: 'Камонжемень Жомартович',
        correct: 'a'
    },
    {
        question: 'Ответ а',
        a: 'Нет это b',
        b: 'Ответ с не правильный',
        c: 'Ответ d правильный',
        d: 'Касымьжемель Кемелевич',
        correct: 'b'
    },
    {
        question: 'Что послужило поводом к войне "Судного дня"?',
        a: '"Шестидневная война"',
        b: 'Операция "Буря в пустыне"',
        c: 'Операция "Ковчег"',
        d: 'Касымьжемель Кемелевич',
        correct: 'a'
    }
]

const quiz = document.getElementById('quiz')
const answersEls = document.querySelectorAll('.answer')

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question;
    
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {

    let answer = undefined

    answersEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false
    })
}

submitBtn.addEventListener('click', () => {

    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++
            
        if( currentQuiz < quizData.length ) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2 class='final_h2'> Правильных ответов ${score}/${quizData.length}</h2> <button onclick='location.reload()'>Заново</button> `
        }
    }
})