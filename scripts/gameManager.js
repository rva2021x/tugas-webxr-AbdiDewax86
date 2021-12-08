var sceneEl = document.querySelector('a-scene');
var gunButton = document.querySelector('#guntoggle');
var score = 0;
var gun = true;

endGame(sceneEl,0)

gunButton.addEventListener('click',function(event){
    var gunEl = document.querySelector('#gunmodel');
    var cursorEl = document.querySelector('#cursor');
    if (gun){
        gun = false;
        gunEl.setAttribute('visible','true');
        cursorEl.setAttribute('visible','false');
    }else{
        gun = true;
        gunEl.setAttribute('visible','false');
        cursorEl.setAttribute('visible','true');
    }
});

function timerElement(scene){
    timerEl = document.createElement('a-entity');
    timerEl.setAttribute('geometry',{
        primitive: 'plane',
        width: '24',
        height: '1',
    });
    timerEl.setAttribute('scale',"1 1 1");
    timerEl.setAttribute('position',"0 8 -17");
    timerEl.setAttribute('material',{color: "#00ffff"});
    timerEl.setAttribute('animation__timer',"property: scale;from: 1 1 1;to: 0 1 1;dur: 60000;easing: linear;");

    scene.appendChild(timerEl)
    setTimeout(function(){
        timerEl.parentNode.removeChild(timerEl)
    }, 60000)
}

function startGame(scene){
    score = 0;
    gamemodeEls = document.querySelectorAll("#gamemode");
    gamemodeEls.forEach(function(el) {
        el.parentNode.removeChild(el)
    })
    console.log(gamemodeEls);
    timerElement(scene);
}

function endGame(scene, duration){
    setTimeout(function(){
        spiderButton(scene)
        gridButton(scene)
        scatterButton(scene)
        sphereEls = document.querySelectorAll('#target');
        sphereEls.forEach(function(el){
            el.parentNode.removeChild(el)
        })
    },duration)
}

function spiderButton(scene){
    buttonEl = document.createElement('a-entity');

    buttonEl.setAttribute('id', "gamemode");
    buttonEl.setAttribute('text',{
        value: "Spidershot",
        color: "#fff",
        align: "center"
    });
    buttonEl.setAttribute('scale', "1 1 1");
    buttonEl.setAttribute('position', "-2 1.5 -2");
    buttonEl.setAttribute('geometry',{
        primitive: 'circle',
        width: '4',
        radius: '0.25'
    })
    buttonEl.setAttribute('material',{color: "#696969"});
    buttonEl.setAttribute('look-at',"#cam");
    buttonEl.setAttribute('sound',"src: #sfxhover;on: mousedown;poolSize: 10");
    buttonEl.setAttribute('animation__hover',"property: components.material.material.color;type: color;to: #ababab;dur: 0;startEvents: mouseenter;");
    buttonEl.setAttribute('animation__leave',"property: components.material.material.color;type: color;to: #696969;dur: 500;startEvents: mouseleave;");
    buttonEl.addEventListener('click', function(event){
        startGame(scene);
        spiderSphere(scene);
        endGame(scene, 60000)
    })
    
    scene.appendChild(buttonEl)
}

function gridButton(scene){
    buttonEl = document.createElement('a-entity');

    buttonEl.setAttribute('id', "gamemode");
    buttonEl.setAttribute('text',{
        value: "Gridshot",
        color: "#fff",
        align: "center"
    });
    buttonEl.setAttribute('scale', "1 1 1");
    buttonEl.setAttribute('position', "-1 1 -2");
    buttonEl.setAttribute('geometry',{
        primitive: 'circle',
        width: '4',
        radius: '0.25'
    })
    buttonEl.setAttribute('material',{color: "#696969"});
    buttonEl.setAttribute('look-at',"#cam");
    buttonEl.setAttribute('sound',"src: #sfxhover;on: mousedown;poolSize: 10");
    buttonEl.setAttribute('animation__hover',"property: components.material.material.color;type: color;to: #ababab;dur: 0;startEvents: mouseenter;");
    buttonEl.setAttribute('animation__leave',"property: components.material.material.color;type: color;to: #696969;dur: 500;startEvents: mouseleave;");
    buttonEl.addEventListener('click', function(event){
        startGame(scene);
        gridSphere(scene);
        gridSphere(scene);
        gridSphere(scene);
        endGame(scene, 60000)
    })
    
    scene.appendChild(buttonEl)
}

function scatterButton(scene){
    buttonEl = document.createElement('a-entity');

    buttonEl.setAttribute('id', "gamemode");
    buttonEl.setAttribute('text',{
        value: "Scattershot",
        color: "#fff",
        align: "center"
    });
    buttonEl.setAttribute('scale', "1 1 1");
    buttonEl.setAttribute('position', "-3 1 -2");
    buttonEl.setAttribute('geometry',{
        primitive: 'circle',
        width: '3',
        radius: '0.25'
    })
    buttonEl.setAttribute('material',{color: "#696969"});
    buttonEl.setAttribute('look-at',"#cam");
    buttonEl.setAttribute('sound',"src: #sfxhover;on: mousedown;poolSize: 10");
    buttonEl.setAttribute('animation__hover',"property: components.material.material.color;type: color;to: #ababab;dur: 0;startEvents: mouseenter;");
    buttonEl.setAttribute('animation__leave',"property: components.material.material.color;type: color;to: #696969;dur: 500;startEvents: mouseleave;");
    buttonEl.addEventListener('click', function(event){
        startGame(scene);
        scatterSphere(scene);
        scatterSphere(scene);
        endGame(scene,60000);
    })
    
    scene.appendChild(buttonEl)
}

function spiderSphere(scene){
    var center = false;
    var entityX = -2;
    var entityY = 4;
    var entityZ = -10;

    var scoreEl = document.querySelector("#score");
    var entityEl = createSphere(scene, entityX, entityY, entityZ);
    entityEl.addEventListener('mousedown', function(event){
        if (center){
            center = false;
            entityX = -2;
            entityY = 4;
            entityZ = -10;
        }else{
            center = true;
            entityX = Math.floor(Math.random() * 17) - 10;
            entityY = Math.floor(Math.random() * 7) + 2;
            entityZ = Math.floor(Math.random() * 9) - 17;
        }
        entityEl.setAttribute('position',`${entityX} ${entityY} ${entityZ}`);

        console.log(score)

        score += 10

        scoreEl.setAttribute('text',{
            value: `Score: ${score}`,
            color: "#fff",
            align: "center"
        })
    })
}

function gridSphere(scene){
    var xPos = [-6, -4, -2, 0, -2]
    var yPos = [9,7,5,3,1]

    var entityX = xPos[Math.floor(Math.random()*xPos.length)]
    var entityY = yPos[Math.floor(Math.random()*yPos.length)]
    var entityZ = -8;

    var scoreEl = document.querySelector("#score");
    var entityEl = createSphere(scene, entityX, entityY, entityZ);
    entityEl.addEventListener('mousedown', function(event){
        var newX, newY;
        do{
            newX = xPos[Math.floor(Math.random()*xPos.length)]
            newY = yPos[Math.floor(Math.random()*yPos.length)]
        }while(newX == entityX || newY == entityY)
        entityX = newX
        entityY = newY
        entityZ = -8;
        entityEl.setAttribute('position',`${entityX} ${entityY} ${entityZ}`);

        score += 10;
        console.log(score)

        scoreEl.setAttribute('text',{
            value: `Score: ${score}`,
            color: "#fff",
            align: "center"
        })
    })
}

function scatterSphere(scene){
    var entityX = Math.floor(Math.random() * 17) - 10;
    var entityY = Math.floor(Math.random() * 7) + 2;
    var entityZ = Math.floor(Math.random() * 9) - 17;

    var scoreEl = document.querySelector("#score");
    var entityEl = createSphere(scene,entityX, entityY, entityZ);
    
    entityEl.addEventListener('mousedown', function(event){
        entityX = Math.floor(Math.random() * 17) - 10;
        entityY = Math.floor(Math.random() * 7) + 2;
        entityZ = Math.floor(Math.random() * 9) - 17;
        entityEl.setAttribute('position',`${entityX} ${entityY} ${entityZ}`);

        score += 10;
        console.log(score)

        scoreEl.setAttribute('text',{
            value: `Score: ${score}`,
            color: "#fff",
            align: "center"
        })
    })
}

function createSphere(scene, posX, posY, posZ){
    var entityEl = document.createElement('a-entity');

    entityEl.setAttribute('geometry',{
        primitive: 'sphere',
        radius: 0.75
    });
    entityEl.setAttribute('material',{
        color: "#0FF"
    });
    entityEl.setAttribute('id','target')
    entityEl.setAttribute('position',`${posX} ${posY} ${posZ}`);
    entityEl.setAttribute('sound',"src: #sfxhit;on: mousedown;poolSize: 10");
    entityEl.setAttribute('animation__red',"property: components.material.material.color;type: color;to: red;dur: 0;startEvents: mousedown;");
    entityEl.setAttribute('animation__highlight',"property: components.material.material.color;type: color;to: #00aaaa;dur: 0;startEvents: mouseenter;");
    entityEl.setAttribute('animation__cyan',"property: components.material.material.color;type: color;to: #00ffff;dur: 500;startEvents: mouseleave;");

    scene.appendChild(entityEl);
    return entityEl;
}