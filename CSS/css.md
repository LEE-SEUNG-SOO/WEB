# 1. CSS : HTML로 생성도니 틀에 모양, 스타일을 입히는 속성
- HTML 태그에 속성으로 추가하거나, 별도의 파일로 분리하여 생성

# 2. 사용법
- Inline 방식 : HTML태그에 style속성을 추가하여 작성
- Internal 방식 : HTML 파일의 head태그에 페이지에서 호출되는 style 속성을 정의
- External 방식 : style 속성을 별도의 파일로 생성하여 호출

# 3. Internal, External 방식의 문법
- 형식 : 선택자 { 프로퍼티 : 값 }
    ex) .internal { 
            color: blue;
        }
- 선택자의 종류 : HTML태그, Class(.), Id(#)
- All selector(Universal selector) : 
    *(body 안의 모든 태그들을 선택)
    전체 폰트 타입, 레이아웃 사이즈, 여백등을 설정할때 사용하기 좋음.
- Tag selector : HTML의 태그를 선택하여 스타일 정의
- Class selector : class명을 설정하여 스타일 정의 
    .class명  <다중사용 가능>
- Id selector : id명을 설정하여 스타일 정의(이벤트, 자바스크립트에서 사용)
    #id명  <다중사용 불가>
- Descendant(자손) selector : HTML 태그의 포함관계를 통해 부모 자식 태그로 구분하여 선택
 부모와 자식을 공백으로 구분
- Child(자식) selector : HTML 태그의 포함관계를 통해 부모 자식 태그로 구분하여 선택
 부모와 자식을 > 으로 구분
- Sibling(인접한 태그) selector : HTML 태그의 포함관계 중 같은 레벨의 태그로 구분하여 선택
 시작태그 + 형제 태그 으로 구분 (인접 형제태그만 가능)
 시작태그 ~ 형제 태그 으로 구분 (모든 형제태그 가능)
- Attribute selector(속성 선택자) : 태그의 속성값을 구분하여 선택
- pseudo class selector : 정해진 이벤트적 요소를 실행하면서 스타일 적용
 클래스명:hover, :focus..


# 4. 단위 - pixel, %, em, rem
- pixel : 고정된 길이로 설정(절대 사이즈)
- % : 브라우저 크기의 %길이로 설정(상대 사이즈) 브라우저 크기에 따라 변경
- em : 기본 폰트 크기 X 배수
- rem : 16px X 배수