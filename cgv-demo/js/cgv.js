class Info {
    #id;
    #pwd;

    constructor(id, pwd){
        this.#id = id;
        this.#pwd = pwd;
    }

    getId = () => this.#id;
    getPwd = () => this.#pwd;
    setId = (id) => this.#id = id;
    setPwd = (pwd) => this.#pwd = pwd;

    alret = () =>{
        window.alert(`id : ${this.getId()}, pwd : ${this.getPwd()}`);
    }
}

/**
 * 로그인버튼 클릭
 */
function login(){
    let id = document.querySelector('#id');
    let pwd = document.querySelector('#pwd');

    const info = new Info(id.value, pwd.value);
    info.alret();
}

class JoinInfo{
    constructor(id, pwd, cpwd, name, phone, emailname, emaildomain){
        this.id = id;
        this.pwd = pwd;
        this.cpwd = cpwd;
        this.name = name;
        this.phone = phone;
        this.emailname = emailname;
        this.emaildomain = emaildomain;
    }
    
    getId = () => this.id;
    getPwd = () => this.pwd;
    getCpwd = () => this.cpwd;
    getName = () => this.name;
    getPhone = () => this.phone;
    getEmailname = () => this.emailname;
    getEmaildomain = () => this.emaildomain;

    setId = (id) => this.id = id;
    setPwd = (pwd) => this.pwd = pwd;
    setCpwd = (cpwd) => this.cpwd = cpwd;
    setName = (name) => this.name = name;
    setPhone = (phone) => this.phone = phone;
    setEmailname = (emailname) => this.emailname =emailname;
    setEmaildomain = (emaildomain) => this.emaildomain = emaildomain;

    alret = () =>{
        window.alert(`        id : ${this.getId()}
        pwd : ${this.getPwd()}
        cpwd : ${this.getCpwd()}
        name : ${this.getName()}
        phone : ${this.getPhone()}
        email : ${this.getEmailname()}@${this.getEmaildomain()}`
        );
    }
}

function btn_join(){
    let id = document.querySelector('#id');
    let pwd = document.querySelector('#pwd');
    let cpwd = document.querySelector('#cpwd');
    let name = document.querySelector('#name');
    let phone = document.querySelector('#phone');
    let emailname = document.querySelector('#emailname');
    let emaildomain = document.querySelector('#emaildomain');

    let info = {
        'id': document.querySelector('#id').value,
        'pwd': document.querySelector('#pwd').value,
        'cpwd': document.querySelector('#cpwd').value,
        'name': document.querySelector('#name').value,
        'phone': document.querySelector('#phone').value,
        'emailname': document.querySelector('#emailname').value,
        'emaildomain': document.querySelector('#emaildomain').value,
    }

    // 유효성 체크 && 입력값 체크
    if(checkValidate(info) && checkValue(info)){
        const joinInfo = new JoinInfo(info.id, info.pwd, info.cpwd, info.name, info.phone, info.emailname, info.emaildomain);
        joinInfo.alret();
    }
}

// 유효성 체크
function checkValidate(info){
    let flag = false;

    if(info.id == ''){
        window.alert('아이디를 입력해주세요.');
    } else if(info.pwd == ''){
        window.alert('비밀번호를 입력해주세요.');
    } else if(info.cpwd == '') {
        window.alert('비밀번호 확인을 입력해주세요.');
    } else if(info.name == '') {
        window.alert('이름을 입력해주세요.');
    } else if(info.phone == '') {
        window.alert('전화번호를 입력해주세요.');
    } else if(info.emailname == '') {
        window.alert('메일주소를 입력해주세요.');
    } else if(info.emaildomain == 'default') {
        window.alert('메일도메인을 선택해주세요.');
    } else if(info.pwd != info.cpwd){
        window.alert('비밀번호와 비밀번호 확인의 입력이 다릅니다.')
    }

    return flag;
}

// 입력 값 체크
function checkValue(info){
    let flag = false;

    if(info.id.length < 6 || info.id.length > 20){
        window.alert("아이디는 6~20글자까지만 가능합니다.");
    } else if(info.pwd.length < 6 || info.pwd.length > 12) {
        window.alert("비밀번호는 6~12글자까지만 가능합니다.");
    } else {
        flag = true;
    }
    
    return flag;
}