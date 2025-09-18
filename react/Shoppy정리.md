# Shoppy 프로젝트 생성
- npx create-react-app@5.1.0 shoppy-app

shoppy 폴더
- front-end (react) <-- shoppy-app
- server (node)

# 라이브러리 설치
- npm i react-router-dom
- npm i axios
- npm i react-icons

# 폴더 구조
src
 |- components : 재사용성을 위한 UI 컴포넌트
 |- pages : 페이지 단위 컴포넌트, route에서 호출되는 컴포넌트
 |- utils : 유틸리티 함수
 |- hooks : 커스텀 hook
 |- styles(css) : css스타일 
 |- App.js

 # 프로젝트 설정 추가 package.json
 - "type":"module" <-- import 형식을 사용하게 함
 - 컴포넌트의 확장자추가(index.js)
 - 설정파일 변경후 재부팅 필요

 # 프로젝트 레이아웃 정의 : App.js
 - 