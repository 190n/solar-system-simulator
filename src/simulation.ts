import Planet from './planet';
import { chooseColor, collidePlanets, findCOM, drawPlanet, drawTrail } from './util';

export type PlanetInfo = [ number, number, number, number, number ];

export interface Trail {
    points: Array<[number, number]>;
    red: number;
    green: number;
    blue: number;
    radius: number;
}

export default class Simulation {
    public planets: Array<Planet>;
    private trails: Array<Trail>;

    constructor(planets: Array<PlanetInfo>) {
        this.planets = planets.map((p, i) => (
            new Planet(...p, ...chooseColor(i, planets.length), i)
        ));

        this.trails = this.planets.map(({ red, green, blue, radius }) => ({
            points: [],
            red,
            green,
            blue,
            radius,
        }));
    }

    update(step: number, iterations: number) {
        for (let i = 0; i < iterations; i++) {
            for (const p1 of this.planets) {
                for (const p2 of this.planets) {
                    if (p1 == p2) continue;
                    p1.applyGravity(p2);
                }
            }
    
            for (const p1 of this.planets) {
                p1.move(step);
            }
    
            for (let i = 0; i < this.planets.length - 1; i++) {
                for (let j = i + 1; j < this.planets.length; j++) {
                    const p1 = this.planets[i], p2 = this.planets[j];
    
                    if (p1.willCollide(p2)) {
                        const newPlanet = collidePlanets(p1, p2, this.trails.length);
                        this.planets[i] = newPlanet;
                        this.planets.splice(j, 1);

                        const [comX, comY] = findCOM(this.planets);

                        this.trails.push({
                            points: [[newPlanet.x - comX, newPlanet.y - comY]], // need to subtract COM
                            red: newPlanet.red,
                            green: newPlanet.green,
                            blue: newPlanet.blue,
                            radius: newPlanet.radius,
                        });
                        j--;
                    }
                }
            }
        }
    }

    draw(mainCtx: CanvasRenderingContext2D, trailsCtx: CanvasRenderingContext2D, scaleFactor: number) {
        const [ comX, comY ] = findCOM(this.planets);

        mainCtx.resetTransform();
        mainCtx.clearRect(0, 0, mainCtx.canvas.width, mainCtx.canvas.height);
        mainCtx.translate(mainCtx.canvas.width / 2, mainCtx.canvas.height / 2);
        mainCtx.scale(scaleFactor, scaleFactor);
        mainCtx.translate(-comX, -comY);
        trailsCtx.resetTransform();
        trailsCtx.clearRect(0, 0, trailsCtx.canvas.width, trailsCtx.canvas.height);
        trailsCtx.translate(trailsCtx.canvas.width / 2, trailsCtx.canvas.height / 2);
        trailsCtx.scale(scaleFactor, scaleFactor);

        for (const p of this.planets) {
            drawPlanet(p, mainCtx);
            this.trails[p.trailIndex].points.push([ p.x - comX, p.y - comY ]);
        }

        for (const t of this.trails) {
            drawTrail(t, trailsCtx);
        }
    }
};
