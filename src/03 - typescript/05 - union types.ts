interface Square {
    kind: "square";
    size: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

interface Circle {
    kind: "circle";
    radius: number;
}

type Shape = Square | Rectangle | Circle;

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "square":
            return shape.size * shape.size;
        case "rectangle":
            return shape.height * shape.width;
        case "circle":
            return Math.PI * shape.radius ** 2;
    }
}

const shape: Shape = { kind: "circle", radius: 3 };
const area = getArea(shape);
area;
