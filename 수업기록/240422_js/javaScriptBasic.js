//Object.method(parameter); 객체. 메서드(매개변수);
console.log("메세지 출력"); //콘솔 영역에 출력
console.debug("log와 마찬가지로 콘솔 영역에 출력");
console.clear();

//문서에 hello JavaScript 작성/ 도큐먼트 객체. 바디타입 선택자를 내가 선택하겠다. 에이치티엠엘에 / 순차적 위에서 아래로 읽힌다. 위에 바디가 있어야함
document.querySelector("body").innerHTML = "Hello JavaScript";