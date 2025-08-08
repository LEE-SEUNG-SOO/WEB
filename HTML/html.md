# 크로스 브라우징(Cross Browsing)
- 작성한 UI페이지를 모든 브라우저에 동일한 모습으로 출력

# 1. HTML(Hyper Text Markup Language)
- 팀 버너스 개발, W3C에서 HTML 버전 등 관리
- 태그로 구성되며, 시작태그<> 종료태그</> 로 구성된다.<br>
    또는 시작과 종료가 하나의 태그로 구성된 경우도 있다.<br>
    ex) <\h1>내용<\/h1> , <\br/> ..<br>
- 태그 구성요소<br>
    <\시작태그 속성(attrubute) = "속성내용" > 내용 <\/종료태그><br>
    <\a href="http://www.naver.com"> content <\/a><br>
- 모든컨텐츠는 태그로 작성되어야 한다. --> css, js를 적용하기위해<br>
- 태그는 소문자로 작성<br>
- 들여쓰기<br>
- 특수문자는 엔터티키를 사용해서 작성<br>

# 2. 웹표준
- HTML5 + CSS3 + JQuery
- 틀, 구조      : HTML
- 스타일, 모양   : CSS
- 이벤트        : JavaScript(js)

# 3. 블록 레벨 [block(블록)]
- 태그 생성 시 블록 레벨이 정의되어 생성
- 브라우저 전체 크기(width기준, 100%) : block
- heading tag(h1~h6), div, p 태그 등등..
- 블록 레벨은 다른 태그를 포함 할 수 있다.(일부 태그 : div, p 등등..)
- 다른 태그를 포함하는 태그는 레이아웃 설정 시 사용
   header, main, section, footer, div 등등
    ex) <\div>
            <\h1>~<\/h1>
            ...
        <\/div>
- 다른 레벨 형식으로 수정시 display 속성을 사용
    ex) <\h1 style = "display:inline;">인라인 레벨로 변경<\/h1>
- style 속성으로 사이즈를 변경 할 수 있다.

# 4. 인라인 레벨 [inline(인라인)] 한문자로 인식
- 태그 생성시 인라인 레벨로 정의되어 생성
- 컨텐츠 내용 크기만 적용 : inline block
- span, button, a 태그 등등..
- 인라인 레벨은 인라인 레벨 태그만 일부 포함 가능
    ex) <\span> <\a href="">내용<\/a> <\/span>
- 다른 레벨 형식으로 수정시 display 속성을 사용
    ex) <\span style = "display:block;">블록 레벨로 변경<\/span>
- style 속성으로 사이즈를 변경 할 수 없다. => 스타일을 블록 또는 인라인 블록으로 변경후 사이즈 변경

# 5. 인라인 블록 레벨[inline block(인라인블록)]
- 크기는 인라인으로 적용되고, 사이즈는 블록처럼 사용되는 태그
- img, video 태그 등등..
    ex) <\h1 style = "display:inline;">인라인 레벨로 변경<\/h1>
- 다른 레벨 형식으로 수정시 display 속성을 사용
- style 속성으로 사이즈를 변경 할 수 있다.

# 6. 제목 - heading tag
- <\h1>content<\/h1>, h1~h6
- 출력되는 글씨 크기 순서 : h1 > ... > h6

# 7. 문단 - paragraph : <p>
- 문단을 구성할때 사용하는 태그
- 인라인 레벨 태그는 포함가능. div, heading tag, p 태그는 포함 불가.(실행은 됨)

# 8. 목록 표시 : ul, ol
- 목록을 표시하는 태그
- 순서 무 : Unordered List (ul)
- 순서 유 : Order List (ol)
- 메뉴리스트, 이미지 리스트 생성시 사용

# 9. 테이블 표 형식 : table
- 표 형식으로 데이터를 표시
- tr : 테이블의 row
- th : 테이블의 제목
- td : 테이블의 데이터값
- 디폴트는 border는 표시되지 않는다.(border : 라인선)
   <\table>
        <\tr>
            <\th> <\/th>
        <\/tr>
        <\tr>
            <\td> <\/td>
        <\/tr>
    <\/table>

# 10. 링크 표현<Anchor> : <\a>
- 형식 : <\a href="절대/상대 경로" target="">컨텐츠<\/a>
- 다른 사이트나 페이지로 링크를 통해 이동하는 경우 사용
- target 속성은 _self(기본), _blank(새창), _parent 등..
- id 속성을 이용하여 한페이지에서 자유롭게 이동, <\a href="#아이디">~<\/a> ===> <\p id ="아이디"><\/p>

# 11. 이미지
- 이미지를 표시하는 태그
- 필수 속성 : src, alt(이미지 대신 출력되는 문자)
- 인라인 블록 레벨

# 12. Form 태그
- 사용자가 데이터를 입력하는 태그
- input, button, radio, checkbox 등등..
- 사용자가 입력한 데이터를 백엔드로 전송하는 방법을 반드시 숙지해야한다.

