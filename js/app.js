
var app = function() {
    // init scene, camera, objects and renderer
    var scene, camera, renderer, cube1, cube2, cube3, cube4, plane;
    let ADD = 0.02;   
    
    var init_app = function() {
        // 1. Create the scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x8d9485);
        var spotLight =  new THREE.SpotLight(0xffffff);
        spotLight.position.set(1,2,3);
        scene.add(spotLight);
        // 2. Create and locate the camera
        var canvasWidth = 1280, canvasHeight = 720;
        var fieldOfViewY = 60, aspectRatio = canvasWidth / canvasHeight, near = 0.1, far = 100.0;
        camera = new THREE.PerspectiveCamera(fieldOfViewY, aspectRatio, near, far);
        camera.position.z = 5;


        //1 cube1
        let geometry = new THREE.BoxGeometry(5,5,5);
        let material = new THREE.MeshBasicMaterial({color:0xf56042});
        let Pointmaterial = new THREE.PointsMaterial({color: 'red'});
        cube1 = new THREE.Points(geometry,Pointmaterial);
        cube1.position.x = 0;
        cube1.position.z = -15;


        //2 cube2
        geometry = new THREE.BoxGeometry(5,5,5);
        cube2 = new THREE.Mesh(geometry,material);
        cube2.position.z = -10;
        cube2.position.x = -3;

        //cube3
        geometry = new THREE.BoxGeometry();
        Lambermaterial = new THREE.MeshLambertMaterial({color: 'blue',emissive: 'black'});
        light = new THREE.MeshPhongMaterial({color: 'blue',emissive: 'blue',shininess:150});
        cube3 = new THREE.Mesh(geometry,Lambermaterial,light);
        cube3.position.x = 2;

        //plane
        geometry = new THREE.PlaneGeometry(1000, 1000, 50, 50);
        material = new THREE.MeshBasicMaterial({color: 0xa6f995, wireframe:true});
        plane = new THREE.Mesh(geometry,material);
        plane.rotation.x = Math.PI / 2;
        plane.position.y = -8;

        scene.add(plane);
        scene.add(cube1);
        scene.add(cube2);
        scene.add(cube3);

        // 4. Create the renderer
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(canvasWidth, canvasHeight);
        document.body.appendChild(renderer.domElement);
    };
    // main animation loop - calls every 50-60ms
    var mainLoop = function() {
        requestAnimationFrame(mainLoop);
        cube1.position.z += ADD;
        cube1.rotation.x += 0.01;
        cube1.rotation.y += 0.01;
        cube2.position.z -= ADD;
        cube3.rotation.x += 0.1;
        cube3.rotation.y += 0.1;
        if (cube1.position.z >= 5 || cube1.position.z <= -15) {
            ADD *= -1;
        }
        renderer.render(scene, camera);
    };
    init_app();
    mainLoop();
}