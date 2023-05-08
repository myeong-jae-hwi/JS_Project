let I_count = 0;
let E_count = 0;
let S_count = 0;
let N_count = 0;
let F_count = 0;
let T_count = 0;
let P_count = 0;
let J_count = 0;


function btnClick() {
  var intro = document.getElementById("intro");
  var contant = document.getElementById("contant");

  intro.style.visibility = "hidden";
  contant.style.visibility = "visible";
}

const questions = [
  {
    // 여기부터 I~E 테스트
    question: "당신은 포켓몬 센터에서 주로 어떤 편?",
    options: [
      {text: "포켓몬을 치료하고 다음 전투를 준비한다", value: "I"},
      {text: "다른 트레이너들과 수다를 떨며 이야기를 나눈다", value: "E"},
    ],
  },
  {
    question: "포켓몬 배틀을 할 때 나는?",
    options: [
      {text: "이기기 위해 전략적인 장소로 간다", value: "I"},
      {text: "모두들 나 싸우는것좀 봐 많은 사람들 앞으로!", value: "E"},
    ],
  },

  {
    question: "포켓몬을 트레이닝할때 나는?",
    options: [
      {text: "다양한 트레이너와 만나며 배틀을 한다.", value: "E"},
      {text: "포켓몬과 둘이서 훈련을하며 친밀도를 높인다.", value: "I"},
    ],
  },
    // 여기부터 S~N 테스트
  {
    question: "새로운 포켓몬을 발견했을 때 나는?",
    options: [
      {text: "무슨 포켓몬인지 몰라도 일단 잡고본다.", value: "S"},
      {text: "저 포켓몬은 진화하면 어떻게 될까? 내 팀과 잘 어울릴까? 하며 생각해본다.", value: "N"},
    ],
  },

  {
    question: "포켓몬 전투 전략을 세울 때, 나는?",
    options: [
      {text: "새로운 아이디어와 창의적인 전략을 시도해 본다.", value: "N"},
      {text: "실제 전투에서 효과적이었던 전략을 바탕으로 계획한다", value: "S"},
    ],
  },

  {
    question: "포켓몬을 선택할 때, 나는?",
    options: [
      {text: "타입, 스탯 등 구체적인 정보를 기반으로 선택", value: "S"},
      {text: "성격과 포켓몬의 특징을 고려하여 선택", value: "N"},
    ],
  },
  // 여기부터 F~T 테스트
  {
    question: "팀의 포켓몬을 선택할 때 우선 순위",
    options: [
      {text: "타입, 스탯 등 구체적인 정보를 기반으로 선택", value: "T"},
      {text: "개인적으로 친한 포켓몬 우선!", value: "F"},
    ],
  },
  
  {
    question: "포켓몬 배틀에서 졌을 때 나는?",
    options: [
      {text: "같이 열심히 싸워준 포켓몬에게 위로를 한다.", value: "F"},
      {text: "왜 졌는지 진 이유에 대해 분석한다.", value: "T"},
    ],
  },
  
  {
    question: "쓰러져있는 야생 포켓몬을 발견했다!",
    options: [
      {text: "현재 포켓몬의 상황을 판단하고 바로 포켓몬 센터로 간다.", value: "T"},
      {text: "시간이 조금 걸리더라도 불안해하는 포켓몬을 안심시킨 후에 포켓몬 센터로 간다.", value: "F"},
    ],
  },
    // 여기부터 P~J 테스트
  {
    question: "포켓몬 마스터가 되기 위한 여행을 떠날 때 나는?",
    options: [
      {text: "경로를 먼저 짜고 출발!", value: "J"},
      {text: "일단 출발!", value: "P"},
    ],
  },

  {
    question: "포켓몬을 키울 때 나는?",
    options: [
      {text: "필요할 때 부르면 되지!", value: "P"},
      {text: "어떤 식으로 기를지 미리 생각한다.", value: "J"},
    ],
  },

  {
    question: "배틀을 하기 전 나는?",
    options: [
      {text: "일단 제일 쌘 애부터 내보낸다!", value: "P"},
      {text: "상대가 내는거 보고 생각할까?", value: "J"},
    ],
  },
];

let currentQuestionIndex = 0;

function showQuestion() {
  const questionElement = document.getElementById("question");
  const optionElements = document.querySelectorAll(".option");

  questionElement.textContent = questions[currentQuestionIndex].question;
  optionElements[0].textContent =
    questions[currentQuestionIndex].options[0].text;
  optionElements[0].value = questions[currentQuestionIndex].options[0].value;
  optionElements[1].textContent =
    questions[currentQuestionIndex].options[1].text;
  optionElements[1].value = questions[currentQuestionIndex].options[1].value;
}


document.addEventListener("DOMContentLoaded", () => {
  const optionButtons = document.querySelectorAll(".option");
  optionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // I_count 또는 E_count를 증가시킵니다.
      if (button.value === "I") {
        I_count += 1;
        console.log('I_count: ',I_count);
        console.log('E_count: ',E_count);
      } 
      else if (button.value === "E") {
        E_count += 1;
        console.log('I_count: ',I_count);
        console.log('E_count: ',E_count);
      }

      else if (button.value === "S") {
        S_count += 1;
        console.log('S_count: ',S_count);
        console.log('N_count: ',N_count);
      }

      else if (button.value === "N") {
        N_count += 1;
        console.log('S_count: ',S_count);
        console.log('N_count: ',N_count);
      }

      else if (button.value === "T") {
        T_count += 1;
        console.log('T_count: ',T_count);
        console.log('F_count: ',F_count);
      }

      else if (button.value === "F") {
        F_count += 1;
        console.log('T_count: ',T_count);
        console.log('F_count: ',F_count);
      }

      else if (button.value === "P") {
        P_count += 1;
        console.log('P_count: ',P_count);
        console.log('J_count: ',J_count);
      }

      else if (button.value === "J") {
        J_count += 1;
        console.log('I_count: ',P_count);
        console.log('E_count: ',J_count);
      }

      // 다음 질문으로 이동합니다.
      currentQuestionIndex += 1;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        let result = "";
        if (I_count > E_count) {
          result += "I";
        } else {
          result += "E";
        }

        if (S_count > N_count) {
          result += "S";
        } else {
          result += "N";
        }

        if (T_count > F_count) {
          result += "T";
        } else {
          result += "F";
        }

        if (P_count > J_count) {
          result += "P";
        } else {
          result += "J";
        }
        const resultElement = document.getElementById("result");
        resultElement.textContent = result
      }
    });
  });

  

  // 첫 번째 질문을 표시합니다.
  showQuestion();
});
