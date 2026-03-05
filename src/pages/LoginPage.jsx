import React from 'react'
import bgLogo from '@/assets/logo/bgLogo.png'
import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {

  }

  return (
    <section className="min-h-screen flex flex-col items-center gap-10">
        
      <img 
        src={bgLogo} 
        alt="배경 로고"
        className="w-125 pt-10 object-contain"
      />

    <form>
        <div className="flex flex-col gap-5 items-center">
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-100 h-12 bg-transparent rounded-[20px] border border-[#dfe0ff] px-5 outline-none text-[18px]"
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-100 h-12 bg-transparent rounded-[20px] border border-[#dfe0ff] px-5 outline-none text-[18px]"
          />
        </div>
    </form>

        <button 
            className="w-30 h-12 bg-transparent rounded-[20px] border outline-none text-[18px]"
            onClick={handleSubmit}>
            로그인하기
        </button>
        <div>
            잠깐, COMP 회원이신가요? 회원만 로그인할 수 있어요.
        </div>

      <div className="flex flex-col items-center">
        <span>계정이 없으신가요?</span>
        <span>회원가입</span>
      </div>

    </section>
  )
}

export default LoginPage