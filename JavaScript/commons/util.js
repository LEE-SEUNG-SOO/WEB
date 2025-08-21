// 문자 -> 숫자로 변환
export function toNumber(num){
    return parseInt(num);
}

// person 객체를 이용하여 CRUD 작업을 진행하는 함수
// setObject, getObject, updateObject, deleteObject

// 1. 객체에 프로퍼티 추가
export const setObject = (obj, key, value) => {
    obj[key] = value;    
}

// 2. 객체의 프로퍼티 값 반환
export const getObject = (obj, key) => {
    return obj[key];
}

// 3. 객체의 프로퍼티 값 변경
export const updateObject = (obj, key, value) => {
    obj[key] = value;
}

// 4. 객체의 프로퍼티 삭제
export const deleteObject = (obj, key) => {
    delete obj[key];
}