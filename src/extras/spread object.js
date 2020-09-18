const point2D = { x: 1, y: 2 };
const point3D = { ...point2D, z: 3 };
point3D;

const { z, ...point } = point3D;
z;
point;
