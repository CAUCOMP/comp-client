import ImageSlider from '@/components/ImageSlider'
import React from 'react'

const AboutSection = () => {
  const features = [
    {
      title: "스터디",
      description: "주 1회 대면 스터디로 프로그래밍의 기본기를 함께 다집니다.",
    },
    {
      title: "정규 세션",
      description:
        "Git 활용 교육, AI 툴 세션, 현업 선배님 초청 강연 등 \n다양한 세션을 통해 개발자로서의 시야를 넓혀갑니다.",
    },
    {
      title: "실전 프로젝트",
      description:
        "파트별 심화 학습을 바탕으로 아이디어를 서비스로 구현합니다.",
    },
    {
      title: "콤프인의 밤",
      description:
        "현업에서 활약 중인 선배님들과 함께하는 COMP의 연말 행사입니다.",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center p-20 gap-6">
        <div className="">
            <p>Why COMP?</p>
            <h2 className="font-medium text-[28px]">컴퓨터와 나와 친구들이 있는 곳</h2>
        </div>
        {/* 컨텐츠 영역 */}
        <div className="flex gap-10 items-center">
            <ImageSlider />
            <div className="flex flex-col items-start gap-8">
            {features.map((feature, index) => (
              <article 
                key={index} 
                className="w-full">
                <h2 className="font-medium text-[28px]">
                  {feature.title}
                </h2>
                
                {index < features.length && (
                <hr className="border-t border-white/40 border-2" />
                )}

                <p className="font-light text-[20px] tracking-[0] whitespace-pre-line">
                  {feature.description}
                </p>

              </article>
            ))}
          </div>
        </div>

    </section>
  )
}

export default AboutSection