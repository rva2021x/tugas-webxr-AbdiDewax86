var sceneEl = document.querySelector('a-scene');
var score = 0;
var gun = false;

spiderButton(sceneEl)

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

function spiderButton(scene){
    buttonEl = document.createElement('a-entity');

    buttonEl.setAttribute('id', "gamemode");
    buttonEl.setAttribute('text',{
        value: "Spidershot",
        color: "#fff",
        align: "center"
    });
    buttonEl.setAttribute('scale', "4 4 4");
    buttonEl.setAttribute('position', "-2 1 -2");
    buttonEl.setAttribute('geometry',{
        primitive: 'plane',
        width: 'auto',
        height: 'auto',
    })
    buttonEl.setAttribute('material',{color: "#696969"});
    buttonEl.setAttribute('animation__hover',"property: components.material.material.color;type: color;to: #ababab;dur: 0;startEvents: mouseenter;");
    buttonEl.setAttribute('animation__leave',"property: components.material.material.color;type: color;to: #696969;dur: 500;startEvents: mouseleave;");
    buttonEl.addEventListener('click', function(event){
        gamemodeEls = document.querySelectorAll("#gamemode");
        gamemodeEls.forEach(function(el) {
            el.setAttribute("visible", 'false')
        })
        console.log(gamemodeEls);
        timerElement(scene);
        spiderSphere(scene)
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
        strX = entityX.toString();
        strY = entityY.toString();
        strZ = entityZ.toString();

        position = strX.concat(" ", strY, " ", strZ);
        entityEl.setAttribute('position',position);

        score += 10;
        console.log(score)

        scoreEl.setAttribute('text',{
            value: toString(score),
            color: "#fff",
            align: "center"
        })
    })

    setTimeout(function(){
        entityEl.parentNode.removeChild(entityEl)
        gamemodeEls = document.querySelectorAll("#gamemode");
        gamemodeEls.forEach(function(el) {
            el.setAttribute("visible", 'true')
        })
    }, 60000)
}

function gridSphere(scene){
    var xPos = [-6, -4, -2, 0, -2]
    var yPos = [9,7,5,3,1]

    var entityX = xPos[Math.floor(Math.random()*xPos.length)]
    var entityY = yPos[Math.floor(Math.random()*yPos.length)]
    var entityZ = -8;

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
        strX = entityX.toString();
        strY = entityY.toString();
        strZ = entityZ.toString();

        position = strX.concat(" ", strY, " ", strZ);
        entityEl.setAttribute('position',position);

        score += 10;
        console.log(score)
    })
}

function scatterSphere(scene){
    var entityX = Math.floor(Math.random() * 17) - 10;
    var entityY = Math.floor(Math.random() * 7) + 2;
    var entityZ = Math.floor(Math.random() * 9) - 17;

    var entityEl = createSphere(scene,entityX, entityY, entityZ);
    
    entityEl.addEventListener('mousedown', function(event){
        entityX = Math.floor(Math.random() * 17) - 10;
        entityY = Math.floor(Math.random() * 7) + 2;
        entityZ = Math.floor(Math.random() * 9) - 17;
        strX = entityX.toString();
        strY = entityY.toString();
        strZ = entityZ.toString();

        position = strX.concat(" ", strY, " ", strZ);
        entityEl.setAttribute('position',position);

        score += 10;
        console.log(score)
    })
}

function createSphere(scene, posX, posY, posZ){
    var strX = posX.toString();
    var strY = posY.toString();
    var strZ = posZ.toString();
    var position = strX.concat(" ", strY, " ", strZ);

    var entityEl = document.createElement('a-entity');

    entityEl.setAttribute('geometry',{
        primitive: 'sphere',
        radius: 0.75
    });
    entityEl.setAttribute('material',{
        color: "#0FF"
    });
    entityEl.setAttribute('id','target')
    entityEl.setAttribute('position',position);
    entityEl.setAttribute('animation__red',"property: components.material.material.color;type: color;to: red;dur: 0;startEvents: mousedown;");
    entityEl.setAttribute('animation__highlight',"property: components.material.material.color;type: color;to: #00aaaa;dur: 0;startEvents: mouseenter;");
    entityEl.setAttribute('animation__cyan',"property: components.material.material.color;type: color;to: #00ffff;dur: 500;startEvents: mouseleave;");

    scene.appendChild(entityEl);
    return entityEl;
}