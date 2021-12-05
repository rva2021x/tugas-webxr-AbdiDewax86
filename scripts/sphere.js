var sceneEl = document.querySelector('a-scene');

sphere(sceneEl);
sphere(sceneEl);
startTimer(60, sceneEl);

/*
function startTimer(duration, scene){
    var counter = duration;
    var timerEl = timerElement(scene);
    var timer = setInterval(function(){
        if (counter > 0){
            counterCvt = toString(counter)
            timerStr = "Time Left: "
            counterStr = timerStr.concat(counterCvt);

            timerEl.setAttribute('text',{
                value: counterStr,
                color: "#fff",
                align: "center"
            })
            counter--;
        }
    }, 1000)
}
*/
function startTimer(seconds, scene){
    timerEl = timerElement(scene);
    timerEl.setAttribute('geometry',{
        primitive: 'plane',
        width: 'auto',
        height: 'auto',
    });
    timerEl.setAttribute('material',{color: "#00ffff"});
    timerEl.setAttribute('animation__timer',"property: scale;from: 20 20 20;to: 0 20 20;dur: 60000;easing: linear;");
}

function timerElement(scene){
    timerEl = document.createElement('a-entity');
    timerEl.setAttribute('text',{
        value: "Time Left: ",
        color: "#fff",
        align: "center"
    })
    timerEl.setAttribute('scale',"20 20 20");
    timerEl.setAttribute('position',"0 6 -17");
    timerEl.setAttribute('geometry',{
        primitive: 'plane',
        width: 'auto',
        height: 'auto',
    });
    timerEl.setAttribute('material',{color: "#696969"});

    scene.appendChild(timerEl)
    return timerEl
}

function sphere(scene){
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

        console.log("hit");
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
    entityEl.setAttribute('position',position);
    entityEl.setAttribute('animation__red',"property: components.material.material.color;type: color;to: red;dur: 0;startEvents: mousedown;");
    entityEl.setAttribute('animation__highlight',"property: components.material.material.color;type: color;to: #00aaaa;dur: 0;startEvents: mouseenter;");
    entityEl.setAttribute('animation__cyan',"property: components.material.material.color;type: color;to: #00ffff;dur: 500;startEvents: mouseleave;");

    scene.appendChild(entityEl);
    return entityEl;
}