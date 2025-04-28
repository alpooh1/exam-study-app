import React, { useState } from "react";

const questions = [
  {
    question: "미국 FDA 승인된 정신성 약물의 일반적 특징은?",
    options: [
      "모든 약물이 주요 정신 질환에 대해 명백한 단일 약제 우월성을 보인다.",
      "전반적인 효과는 유사하나, 약리학적 특성, 효능 및 부작용에서 상당한 차이를 보인다.",
      "모든 환자에게 보편적으로 효과적인 약물이 존재한다.",
      "약물의 효과 예측 가능성은 환자 변수와 무관하게 매우 높다.",
    ],
    answer: 1,
    explanation: "FDA 승인 정신성 약물은 전반적 효과는 유사하지만 개별 환자에서 약리 특성, 효능, 부작용 차이가 큽니다."
  },
  {
    question: "약력학(pharmacodynamics)이란?",
    options: [
      "신체가 약물에 대해 수행하는 작용",
      "약물의 흡수, 분포, 대사 및 배설 과정을 다룸",
      "약물이 신체에 대해 수행하는 작용",
      "약물의 화학적 구조와 특성 연구",
    ],
    answer: 2,
    explanation: "약력학은 약물이 신체에 대해 수행하는 작용을 설명합니다."
  },
  {
    question: "수용체에 결합해 동일한 효과를 나타내는 물질은?",
    options: [
      "길항제(Antagonist)",
      "역작용제(Inverse agonist)",
      "부분 작용제(Partial agonist)",
      "완전 작용제(Full agonist)",
    ],
    answer: 3,
    explanation: "완전 작용제는 수용체 활성화를 통해 신경전달물질과 동일한 효과를 냅니다."
  },
  {
    question: "할로페리돌(Haldol) 장기 사용 시 위험한 부작용은?",
    options: [
      "심각한 간부전",
      "스티븐스-존슨 증후군",
      "지연성 운동장애",
      "무과립구증",
    ],
    answer: 2,
    explanation: "할로페리돌 장기 사용은 지연성 운동장애를 유발할 수 있습니다."
  },
  {
    question: "항우울제의 FDA 블랙박스 경고 주요 우려는?",
    options: [
      "성인 자살률 증가",
      "65세 이상 노인 자살 성향 증가",
      "청소년 및 젊은 성인의 자살 생각 및 행동 위험 증가",
      "항우울제 치료 효과 감소",
    ],
    answer: 2,
    explanation: "항우울제는 청소년과 24세까지 젊은 성인에서 자살 성향을 증가시킬 수 있어 경고가 붙었습니다."
  },
  {
    question: "신경이완제 악성 증후군 증상과 관련 없는 것은?",
    options: [
      "고열",
      "근육 경직",
      "자율신경계 불안정",
      "서맥",
    ],
    answer: 3,
    explanation: "신경이완제 악성 증후군은 보통 빈맥(심박수 증가)을 보이며, 서맥은 주요 증상이 아닙니다."
  },
  {
    question: "SSRI의 흔한 부작용은?",
    options: [
      "심한 변비와 구강 건조",
      "추체외로계 부작용",
      "성기능 장애",
      "현저한 체중 감소",
    ],
    answer: 2,
    explanation: "SSRI는 성기능 장애(성욕 저하, 사정/발기 장애)를 흔히 유발합니다."
  },
  {
    question: "약물의 치료 지수란?",
    options: [
      "약물의 최대 효과를 나타내는 용량",
      "약물 효과가 나타나는 최소 용량",
      "중간 독성 용량과 유효 용량의 비율",
      "약물의 체내 대사 속도",
    ],
    answer: 2,
    explanation: "치료 지수는 중간 독성 용량 대비 중간 유효 용량으로, 안전성을 나타냅니다."
  },
  {
    question: "임신 중 선천적 기형 위험 증가 약물은?",
    options: [
      "플루옥세틴",
      "리튬, 카르바마제핀, 발프로산",
      "에스시탈로프람",
      "벤라팍신",
    ],
    answer: 1,
    explanation: "리튬, 카르바마제핀, 발프로산은 임신 중 사용 시 선천성 기형 위험을 증가시킵니다."
  },
  {
    question: "정신 질환 치료 세 단계 중 초기 치료 시도란?",
    options: [
      "증상 완전 소실 단계",
      "장기 유지 치료",
      "치료 효과가 지연되어 몇 주 동안 지속",
      "약물 감량 단계",
    ],
    answer: 2,
    explanation: "초기 치료 시도는 치료 효과가 지연되는 특성 때문에 최소 몇 주 지속되어야 합니다."
  }
];

function App() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const checkAnswer = (index) => {
    setSelected(index);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setCurrent((prev) => (prev + 1) % questions.length);
    setSelected(null);
    setShowExplanation(false);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto", fontFamily: "Arial" }}>
      <h1>정신약리학 시험 연습</h1>
      <h2>{questions[current].question}</h2>
      {questions[current].options.map((option, idx) => (
        <button
          key={idx}
          onClick={() => checkAnswer(idx)}
          style={{
            display: "block",
            width: "100%",
            margin: "10px 0",
            padding: "10px",
            backgroundColor: selected === idx
              ? idx === questions[current].answer
                ? "lightgreen"
                : "salmon"
              : "white",
            border: "1px solid #ccc",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {option}
        </button>
      ))}
      {showExplanation && (
        <div style={{ marginTop: "20px", backgroundColor: "#f9f9f9", padding: "15px", borderRadius: "5px" }}>
          <strong>설명:</strong> {questions[current].explanation}
        </div>
      )}
      {showExplanation && (
        <button
          onClick={nextQuestion}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          다음 문제
        </button>
      )}
    </div>
  );
}

export default App;
