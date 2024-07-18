import React from "react";
import styled from "styled-components";

const KakaoLogin = () => {
  const Rest_api_key = process.env.REACT_APP_KAKAO_API_KEY; // REST API KEY
  const redirect_uri = process.env.REACT_APP_KAKAO_REDIRECT_URI; // Redirect URI
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <CourseButton alt="login" onClick={handleLogin}>
      <p className="logo">코럼버스</p>
      <p>코스 추천받기</p>
    </CourseButton>
  );
};

export default KakaoLogin;

const CourseButton = styled.button`
  z-index: 0;
  display: inline-flex;
  padding: 10px 20px;
  align-items: center;
  margin-top: 800px;
  margin-bottom: 10px;
  gap: 16px;
  background: #000;
  p {
    color: #fff;
    font-family: "SUIT SemiBold";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .logo {
    margin-bottom: 7px;
    font-family: "HSSanTokki";
  }
`;
