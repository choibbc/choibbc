import { FRUITS } from "/suika/fruits.js"


// 모듈 불러오기
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    World  = Matter.World,
    Body = Matter.Body;

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
isSensor:true,
render: {fillStyle:'#E6B143'}

})

//벽배치
World.add(world,[leftwall,rightwall,ground,topLine]);



//테스트 실행
Render.run(render);
Runner.run(engine);


let currentBody = null;
let currentFruit = null;
let disableAction = false;


//과일 떨어지는 함수
function addFruit() {
    const index = Math.floor(Math.random() * 5);
    const fruit = FRUITS[index];

    const body = Bodies.circle(300,50,fruit.radius,{
        index: index,
        isSleeping:true,
        render: {
            sprite:{texture:`${fruit.name}.png`},
        },
        restitution:0.2,
    })

    currentBody = body
    currentFruit= fruit

    World.add(world,body)
}

window.onkeydown = ( event ) => {
    if (disableAction)
    return;


    switch(event.code) {
        case "KeyA":
            Body.setPosition(currentBody,{
                x:currentBody.position.x - 10,
                y:currentBody.position.y
            });
            break;
            case "KeyD":
            Body.setPosition(currentBody,{
                x:currentBody.position.x + 10,
                y:currentBody.position.y
            });
            break;
        case "KeyS":
            currentBody.isSleeping = false;
            disableAction = true;

            setTimeout(() => {
                addFruit();
                disableAction = false;
            }, 1000);
            break;
    }
}





addFruit();