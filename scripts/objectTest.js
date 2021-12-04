var sceneEl = document.querySelector('a-scene');
var entityEl = document.createElement('a-entity');

var entityX = Math.floor(Math.random() * 17) - 10;
var strX = entityX.toString();
var entityY = Math.floor(Math.random() * 7) + 2;
var strY = entityY.toString();
var entityZ = Math.floor(Math.random() * 9) - 17;
var strZ = entityZ.toString();

var position = strX.concat(" ", strY, " ", strZ);

console.log(position);

entityEl.setAttribute('geometry',{
    primitive: 'sphere',
    radius: 0.75
});
entityEl.setAttribute('material',{
    color: "#0FF"
});
entityEl.setAttribute('position',position);
entityEl.setAttribute('animation__red',"property: components.material.material.color;type: color;to: red;dur: 0;startEvents: mousedown;");
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

sceneEl.appendChild(entityEl);