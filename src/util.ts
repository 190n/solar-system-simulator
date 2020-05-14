import Planet from './planet';
import { Trail } from './simulation';

export const findCOM = (planets: Array<Planet>): [ number, number ] => {
    let totalX = 0, totalY = 0, totalMass = 0;

    for (const { x, y, mass } of planets) {
        totalX += x * mass;
        totalY += y * mass;
        totalMass += mass;
    }

    return [ totalX / totalMass, totalY / totalMass ];
};

export const drawPlanet = ({ x, y, radius, red, green, blue }: Planet, ctx: CanvasRenderingContext2D) => {
    ctx.save();
    ctx.fillStyle = `rgb(${red},${green},${blue})`;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
};

export const collidePlanets = (p1: Planet, p2: Planet, nextIndex: number): Planet => {
    const mass = p1.mass + p2.mass,
        x = (p1.x * p1.mass + p2.x * p2.mass) / mass,
        y = (p1.y * p1.mass + p2.y * p2.mass) / mass,
        dx = (p1.dx * p1.mass + p2.dx * p2.mass) / mass,
        dy = (p1.dy * p1.mass + p2.dy * p2.mass) / mass,
        red = (p1.red * p1.mass + p2.red * p2.mass) / mass,
        green = (p1.green * p1.mass + p2.green * p2.mass) / mass,
        blue = (p1.blue * p1.mass + p2.blue * p2.mass) / mass;

    return new Planet(x, y, dx, dy, mass, red, green, blue, nextIndex);
};

export const chooseColor = (i: number, n: number): [number, number, number] => {
    const x = i / n,
        red = Math.max(0, Math.min(1, 6 * Math.abs(x - 0.5) - 1)),
        green = Math.max(0, Math.min(1, -6 * Math.abs(x - 1/3) + 2)),
        blue = Math.max(0, Math.min(1, -6 * Math.abs(x - 2/3) + 2)),
        luminance = (0.299 * red) + (0.587 * green) + (0.114 * blue);

    const adjRed = (red * 0.5 / luminance) * 255,
        adjGreen = (green * 0.5 / luminance) * 255,
        adjBlue = (blue * 0.5 / luminance) * 255;

    console.log(luminance);
    return [adjRed, adjGreen, adjBlue];
};

export const drawTrail = (
    { points, red, green, blue, radius }: Trail,
    ctx: CanvasRenderingContext2D
) => {
    ctx.save();
    ctx.strokeStyle = `rgb(${red},${green},${blue})`;
    ctx.lineWidth = radius / 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);

    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i][0], points[i][1]);
    }

    ctx.stroke();
    ctx.closePath();
    ctx.restore();
};
