import { h, render } from 'preact';

import { PlanetInfo } from './simulation';
import SimulationController from './SimulationController';

const planets: Array<PlanetInfo> = [
    [-100, 100, -50, -50, 120],
    [100, 100, -50, 50, 120],
    [100, -100, 50, 50, 120],
    [-100, -100, 50, -50, 120],
];

const circle: Array<PlanetInfo> = [];

for (let angle = 0; angle < (23/12) * Math.PI; angle += Math.PI / 12) {
    circle.push([300 * Math.cos(angle), 300 * Math.sin(angle), 100 * Math.cos(angle + Math.PI / 4), 100 * Math.sin(angle + Math.PI / 4), 100 + 50 * Math.sin(angle)]);
}

render(<SimulationController planets={circle} />, document.getElementById('app') as Element);
