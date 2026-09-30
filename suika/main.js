// 모듈 불러오기
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    World  = Matter.World;


//엔진 선언
const engine = Engine.create();

//렌더(배경) 선언
const render = Render.create({
    engine,
    //어디에 그릴 것 인지 - > body에 생성
    element: document.body,
    options:{
        wireframes: false,       //기본값은 true인데 true일 경우 색 적용이 안됨.
        background: '#F7F4C8',  //배경 색 지정
        width: 620,
        height: 850,
    },
});

//테스트 실행
Render.run(render);
Runner.run(engine);