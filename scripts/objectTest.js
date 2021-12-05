var sceneEl = document.querySelector('a-scene');

entity(sceneEl);
entity(sceneEl);
entity(sceneEl);

ent1.addEventListener('mousedown', function(event){
    entityX = Math.floor(Math.random() * 17) - 10;
    entityY = Math.floor(Math.random() * 7) + 2;
    entityZ = Math.floor(Math.random() * 9) - 17;
    strX = entityX.toString();
    strY = entityY.toString();
    strZ = entityZ.toString();

    position = strX.concat(" ", strY, " ", strZ);
    ent1.setAttribute('position',position);

    console.log("hit");
})

function entity(scene){
    var entityEl = document.createElement('a-entity');

    var entityX = Math.floor(Math.random() * 17) - 10;
    var strX = entityX.toString();
    var entityY = Math.floor(Math.random() * 7) + 2;
    var strY = entityY.toString();
    var entityZ = Math.floor(Math.random() * 9) - 17;
    var strZ = entityZ.toString();

    var position = strX.concat(" ", strY, " ", strZ);

    //console.log(position);

    entityEl.setAttribute('geometry',{
        primitive: 'sphere',
        radius: 0.75
    });
    entityEl.setAttribute('material',{
        color: "#0FF"
    });
    entityEl.setAttribute('position',position);
    entityEl.setAttribute('animation__red',"property: components.material.material.color;type: color;to: red;dur: 0;startEvents: mousedown;");
    entityEl.setAttribute('animation__cyan',"property: components.material.material.color;type: color;to: #00ffff;dur: 500;startEvents: mouseleave;");
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

    scene.appendChild(entityEl);
}

function createEntity(scene, posX, posY, posZ){
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
    entityEl.setAttribute('animation__cyan',"property: components.material.material.color;type: color;to: #00ffff;dur: 500;startEvents: mouseleave;");

    scene.appendChild(entityEl);
    return entityEl;
}