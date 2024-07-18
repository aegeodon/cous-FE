import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../api/api";

const AuthKakao = () => {
  const navigate = useNavigate();

  const handleKakaoResponse = async (code) => {
    try {
      const response = await axiosInstance.post("/auth/kakao/login", {
        code,
      });
      console.log("Backend response:", response.data);
      navigate("/home");
    } catch (error) {
      console.error("Error sending code to backend:", error);
      if (error.response) {
        console.error("Error response:", error.response.data);
        // 에러 페이지로 리디렉션 (필요에 따라 수정)
        if (error.response.status === 401) {
          alert("인증 실패. 다시 시도해주세요.");
        } else {
          alert("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
        }
      }
      navigate("/home");
    }
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");
    if (code) {
      handleKakaoResponse(code);
    }
  }, []);

  return <div>Loading...</div>;
};

export default AuthKakao;
