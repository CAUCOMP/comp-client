import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const questions = [
    {
      question: "COMP는 학술 동아리인가요?",
      answer: "COMP는 학술동아리의 성격을 띠고 있지만 소모임, 한강 나들이, 만우절 교복데이, MT 등 COMP만의 가족같은 분위기 형성을 위한 다양한 활동이 준비되어있습니다!",
    },
    {
      question: "비전공자도 지원 가능한가요?",
      answer: "네! 전공 무관, 초보자도 환영합니다. 이번 40기에는 AI 코딩 툴을 적극적으로 활용할 수 있도록 커리큘럼을 개편했습니다. \n코딩 실력이 부족해도 AI의 도움을 받아 자신의 아이디어를 실제로 구현하고 배포하는 경험을 할 수 있습니다.",
    },
    {
      question: "동아리 활동은 언제 진행되나요?",
      answer: "각 팀끼리 멘토님 및 팀원들과 상의하여 일정 조율 후 진행됩니다!\n정규 세션이나 다른 활동의 경우, 별도 공지로 안내해드릴 예정입니다.",
    },
    {
      question: "어떤 현직자 선배님들과 교류할 수 있나요?",
      answer: "현재 당근마켓, NC 등 유수의 IT 기업에 재직 중인 선배님들의 연사 세션이 예정되어 있습니다.\n이외에도 다양한 분야의 선배님들과 교류할 기회가 열려 있습니다.",
    },
  ]

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="min-h-screen p-40 flex flex-col items-center gap-10">
      <h1 className="text-4xl">자주 묻는 질문</h1>

      {questions.map((question, index) => (
        <article key={index} className="w-full">

          <button
            className="w-full flex justify-between items-center py-4 cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            <h2 className="font-medium text-[28px]">{question.question}</h2>
            <FaChevronDown
              className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
            />
          </button>

          <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[500px]' : 'max-h-0'}`}>
            <p className="font-light text-[20px] whitespace-pre-line pb-4">
              {question.answer}
            </p>
          </div>

          <hr className="border-white/40" />
        </article>
      ))}
    </section>
  )
}

export default FAQSection