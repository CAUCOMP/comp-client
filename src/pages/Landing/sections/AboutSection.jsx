import ImageSlider from '@/components/ImageSlider'
import React from 'react'

const AboutSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center p-10">
        <div>
            <div>Why COMP?</div>
            <div>컴퓨터와 나와 친구들이 있는 곳</div>
        </div>
        {/* 컨텐츠 영역 */}
        <div className="flex gap-5">
            <ImageSlider />
            <div>
                <p>스터디</p>
                <p>특별세션</p>
                <p>실전 프로젝트</p>
                <p>콤프인의 밤</p>
            </div>
        </div>

    </section>
  )
}

export default AboutSection