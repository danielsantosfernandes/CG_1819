var controls, camera, scene, renderer;

var geometry, material, mesh;


//MESA
function addTableLeg(obj, x, y, z) {
    'use strict';

    geometry = new THREE.CylinderGeometry(2, 2, 30);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addTableTop(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CubeGeometry(60, 2, 20);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function createTable(x, y, z) {
    'use strict';

    var table = new THREE.Object3D();

    material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });

    addTableTop(table, 0, 0, 0);
    addTableLeg(table, -25, -15, -8);
    addTableLeg(table, -25, -15, 8);
    addTableLeg(table, 25, -15, 8);
    addTableLeg(table, 25, -15, -8);

    scene.add(table);

    table.position.x = x;
    table.position.y = y;
    table.position.z = z;
}

//CANDEEIRO
function addLampBottom(obj, x, y, z) {
  'use strict';

  geometry = new THREE.ConeGeometry(6, 50, 15);
  material = new THREE.MeshBasicMaterial({ color: 0xffff00 , wireframe: true });
  mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  obj.add(mesh);
}

function addLampMiddle(obj, x, y, z){
  'use strict';
  geometry = new THREE.SphereGeometry(5, 10, 10);
  material = new THREE.MeshBasicMaterial({ color: 0xffffff , wireframe: true });
  mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y + 17, z);
  obj.add(mesh);
}

function addLampTop(obj, x, y, z){
  'use strict';
  geometry = new THREE.CylinderGeometry(6, 6, 7, 15);
  material = new THREE.MeshBasicMaterial({ color: 0xffff00 , wireframe: true });
  mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y + 25, z);
  obj.add(mesh);
}

function createLamp(x, y, z){
  'use strict';

  var lamp = new THREE.Object3D();

  addLampBottom(lamp, 0, 0, 0);
  addLampMiddle(lamp, 0, 0, 0);
  addLampTop(lamp, 0, 0, 0);

  scene.add(lamp);

  lamp.position.x = x;
  lamp.position.y = y;
  lamp.position.z = z;
}

//CADEIRA
function addChairSeat(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CubeGeometry(20, 2, 20);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addChairLeg(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CubeGeometry(2, 20, 2);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addChairBack(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CubeGeometry(20, 20, 2);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addChairFoot1(obj, x, y, z){
  'use strict';
  geometry = new THREE.CubeGeometry(2, 2, 15);
  mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  obj.add(mesh);
}

function addChairFoot2(obj, x, y, z){
  'use strict';
  geometry = new THREE.CubeGeometry(15, 2, 2);
  mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  obj.add(mesh);
}

function addWheels(obj, x, y, z) {
  'use strict';
  geometry = new THREE.TorusGeometry(2, 1, 10, 10);
  mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  obj.add(mesh);
}

function createChair(x, y, z) {
    'use strict';

    var chair = new THREE.Object3D();

    material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true});

    addChairSeat(chair, 0, 0, 0);
    addChairBack(chair, 0, 10, 10);
    addChairLeg(chair, 0, -10, 0);
    addChairFoot1(chair, 0, -20, 7);
    addChairFoot1(chair, 0, -20, -7);
    addChairFoot2(chair, 7, -20, 0);
    addChairFoot2(chair, -7, -20, 0);
    addWheels(chair, 0, -22, 15);
    addWheels(chair, 0, -22, -15);
    addWheels(chair, 15, -22, 0);
    addWheels(chair, -15, -22, 0);

    scene.add(chair);

    chair.position.x = x;
    chair.position.y = y;
    chair.position.z = z;
}

//COISAS
function createScene() {
    'use strict';

    scene = new THREE.Scene();


    scene.add(new THREE.AxisHelper(10));

    createTable(0, 8, 0);
    createLamp(40, 0, 0);
    createChair(0, 0, 20);
}

function createCamera(x, y, z) {
    'use strict';
    camera = new THREE.PerspectiveCamera(70,
                                         window.innerWidth / window.innerHeight,
                                         1,
                                         1000);
    camera.position.x = x;
    camera.position.y = y;
    camera.position.z = z;

    camera.lookAt(scene.position);

}

function onKeyDown(e) {
    'use strict';

    switch (e.keyCode) {
    case 65: //A
    case 97: //a
        scene.traverse(function (node) {

            if (node instanceof THREE.Mesh) {
                node.material.wireframe = !node.material.wireframe;
            }
        });
        break;

    case 49: //1
        createCamera(0, 75, 0);
        break;
    case 50: //2
        createCamera(75, 0, 0);
        break;
    case 51: //3
        createCamera(0, 0, 75);
        break;
        
/*
    case 37: //esquerda
    case 38: // cima
    case 39: // direita
    case 40: // baixo
*/
    }
}

function onResize() {
    'use strict';

    renderer.setSize(window.innerWidth, window.innerHeight);

    if (window.innerHeight > 0 && window.innerWidth > 0) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }

}

function render() {
    'use strict';
    renderer.render(scene, camera);
}

function init() {
    'use strict';
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    createScene();
    createCamera(50,50,50);

    controls = new THREE.OrbitControls(camera);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
}

function animate(){
  render();
	controls.update();
	requestAnimationFrame( animate );
}
