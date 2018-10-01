class Table extends GraphicEntity {
    constructor(x, y, z) {
        'use strict';

        super();

        this.material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
        this.position.x = x;
        this.position.y = y;
        this.position.z = z;

        this.addTableTop(0, 0, 0);
        this.addTableLeg(-25, -15, -8);
        this.addTableLeg(-25, -15, 8);
        this.addTableLeg(25, -15, 8);
        this.addTableLeg(25, -15, -8);
    }

    addTableTop(x, y, z) {
        'use strict';

        var geometry = new THREE.CubeGeometry(60, 2, 20);
        var mesh = new THREE.Mesh(geometry, this.material);
        mesh.position.set(x, y, z);
        this.add(mesh);
    }

    addTableLeg(x, y, z) {
        'use strict';

        var geometry = new THREE.CylinderGeometry(2, 2, 30);
        var mesh = new THREE.Mesh(geometry, this.material);
        mesh.position.set(x, y, z);
        this.add(mesh);
    }


}
