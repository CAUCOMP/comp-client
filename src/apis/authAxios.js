import axios from "axios"; // HTTP 요청을 보내는 라이브러리
import { getNewRefreshToken, logout } from "./auth";

const authAxios = axios.create({
  baseURL: "http://3.38.112.62:8080",
  timeout: 5000, // 서버가 5초 안에 응답 없으면 에러 처리
}); 

// 요청마다 토큰 자동 첨부
authAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // 토큰이 있을 때만 헤더에 추가 
  }
  return config; // 수정된 config를 돌려줌 
});

// 응답 인터셉터
authAxios.interceptors.response.use(
  (response) => response,
  // 401 시 토큰 갱신
  async (error) => {
    if (error.response?.status === 401 && !error.config._retry) {
      error.config._retry = true;
      
      try {
        // 토큰 갱신
        await getNewRefreshToken();
        // 기존 요청에 새 토큰 적용
        error.config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
        
        return authAxios(error.config); // 재시도
      } catch {
        logout();
      }
    }
    return Promise.reject(error);
  }
);

export default authAxios;