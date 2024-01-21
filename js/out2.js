// out2.js
// 콘솔에 출력
function 빨래하다(){
    console.log("===================");
    console.log("1. 먼지를 턴다");
    console.log("2. 물에 넣는다");
    console.log("3. 비누를 바른다");
    console.log("4. 물에 헹군다");
    console.log("5. 비빈다");
    console.log("6. 짠다");
    console.log("7. 넌다");
} //-------------------------------------

// const 변수 = function() 형태로 쓰이기도 한다.
// document에 출력
const 청소하다 = function(){
    document.write("<hr color='red'>");
    document.write("<ol>");
    document.write(`
        <li>로봇 청소기를 돌리다.</li>
        <li>물걸레로 닦다.</li>
    `);
    document.write("</ol>");
} //-------------------------------------