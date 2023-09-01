const blank = [
  {
    title: "What is Netflix?",

    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
    dolore illo dolores quia nemo doloribus quaerat, magni numquam
    repellat reprehenderit.`,
  },
  {
    title: "How much does Netflix cost?",

    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
    dolore illo dolores quia nemo doloribus quaerat, magni numquam
    repellat reprehenderit.`,
  },
  {
    title: "Where can i watch?",

    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
    dolore illo dolores quia nemo doloribus quaerat, magni numquam
    repellat reprehenderit.`,
  },
  {
    title: "How do I cancel?",

    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
    dolore illo dolores quia nemo doloribus quaerat, magni numquam
    repellat reprehenderit..`,
  },
  {
    title: "What can I watch on Netflix?",

    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
    dolore illo dolores quia nemo doloribus quaerat, magni numquam
    repellat reprehenderit.`,
  },
  {
    title: "How does the free trial work?",

    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
    dolore illo dolores quia nemo doloribus quaerat, magni numquam
    repellat reprehenderit. `,
  },
];

window.addEventListener("DOMContentLoaded", function () {
  diplayQuestions();
  questionFunctionality();
});

function questionFunctionality() {
  const questions = document.querySelectorAll(".question");

  questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");
    // console.log(btn);

    btn.addEventListener("click", function () {
      // console.log(question);

      questions.forEach(function (item) {
        if (item !== question) {
          item.classList.remove("show-text");
        }
      });

      question.classList.toggle("show-text");
    });
  });
}

//console.log(sectionCenter);

function diplayQuestions() {
  const sectionCenter = document.querySelector(".questions-wrapper");
  let displayQ = blank.map(function (item) {
    return `<article class="question">
    <div class="question-title">
        <h4> ${item.title}</h4>
        <button type="button" class="question-btn">
            <span class="plus-icon">
                <i class="far fa-plus-square"></i>
            </span>
            <span class="minus-icon">
                <i class="far fa-minus-square"></i>
            </span>
        </button>
    </div>
    <div class="question-text">
        <p class="item-text">
            ${item.desc}
        </p>
    </div>
</article>
`;
  });
  displayQ = displayQ.join("");

  console.log(displayQ);
  sectionCenter.innerHTML = displayQ;
}
