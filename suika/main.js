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

//벽 배치를 위한 world 선언
const world = engine.world;


const leftwall = Bodies.rectangle(15,395,30,790,{
                            // x중심점,y중심점,x길이,y길이
    isStatic:true, //고정해주는 기능
    render: {fillStyle:'#E6B143'}

})

const rightwall = Bodies.rectangle(605,395,30,790,{
    // x중심점,y중심점,x길이,y길이
isStatic:true, //고정해주는 기능
render: {fillStyle:'#E6B143'}


})


const ground = Bodies.rectangle(320,820,620,60,{
    // x중심점,y중심점,x길이,y길이
isStatic:true, //고정해주는 기능
render: {fillStyle:'#E6B143'}

})

const topLine = Bodies.rectangle(310,150,620,2,{
    // x중심점,y중심점,x길이,y길이
isStatic:true, //고정해주는 기능
render: {fillStyle:'#E6B143'}

})

//벽배치
world.add(world,[leftwall,rightwall,ground,topLine]);



//테스트 실행
Render.run(render);
Runner.run(engine);