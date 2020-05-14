import { h, Component, Fragment, createRef } from 'preact';
import linkState from 'linkstate';

import Simulation, { PlanetInfo } from './simulation';

export interface SimulationControllerProps {
    planets: Array<PlanetInfo>;
}

export interface SimulationControllerState {
    width: number;
    height: number;
    scaleFactor: number;
    animationFrame?: number;
    running: boolean;
    lastFrame?: number;
    step: number;
    iterations: number;
    timeSimulating: number;
    timeTotal: number;
    frameCounter: number;
    utilization?: number;
}

let totalTime = 0;

export default class SimulationController extends Component<SimulationControllerProps, SimulationControllerState> {
    private mainCanvasRef = createRef<HTMLCanvasElement>();
    private trailsCanvasRef = createRef<HTMLCanvasElement>();
    public simulation: Simulation;

    constructor({ planets }: SimulationControllerProps) {
        super();
        this.simulation = new Simulation(planets);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            scaleFactor: window.devicePixelRatio,
            running: false,
            step: 0.0001,
            iterations: 250,
            timeSimulating: 0,
            timeTotal: 0,
            frameCounter: 0,
        };
    }

    draw = () => {
        const mainCtx = this.mainCanvasRef.current?.getContext('2d'),
            trailsCtx = this.trailsCanvasRef.current?.getContext('2d');

        if (mainCtx && trailsCtx) this.simulation.draw(mainCtx, trailsCtx, this.state.scaleFactor);
    }

    componentDidMount() {
        window.addEventListener('resize', this.resizeHandler, false);
        this.draw();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeHandler);
    }

    resizeHandler = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight, scaleFactor: window.devicePixelRatio });
        requestAnimationFrame(this.draw);
    };

    resume = () => {
        this.setState({ animationFrame: requestAnimationFrame(this.tick), lastFrame: Date.now() });
    };

    pause = () => {
        if (this.state.animationFrame === undefined) return;
        cancelAnimationFrame(this.state.animationFrame);
        this.setState({ animationFrame: undefined });
    };

    tick = () => {
        const start = Date.now();

        if (this.state.animationFrame !== undefined) {
            this.setState({
                animationFrame: requestAnimationFrame(this.tick),
                lastFrame: start,
            });
        }

        this.simulation.update(this.state.step, this.state.iterations);

        this.draw();

        if (typeof this.state.lastFrame == 'number') {
            const end = Date.now();
            let { timeSimulating, timeTotal, frameCounter, utilization } = this.state;
            timeSimulating += (end - start);
            timeTotal += (start - this.state.lastFrame);
            frameCounter++;
            if (frameCounter >= 60) {
                utilization = timeSimulating / timeTotal;
                frameCounter = 0;
                timeSimulating = 0;
                timeTotal = 0;
            }

            this.setState({ timeSimulating, timeTotal, frameCounter, utilization });
        }
    };

    render(props: SimulationControllerProps, { width, height, scaleFactor, animationFrame, step, iterations, utilization }: SimulationControllerState) {
        return (
            <Fragment>
                <canvas width={width * scaleFactor} height={height * scaleFactor} class="trails" ref={this.trailsCanvasRef}></canvas>
                <canvas width={width * scaleFactor} height={height * scaleFactor} ref={this.mainCanvasRef}></canvas>
                <div id="hud">
                    <details id="initial-state">
                        <summary>Initial State</summary>
                        <div class="panel-contents">

                        </div>
                    </details>
                    <details id="controls">
                        <summary>Controls</summary>
                        <div class="panel-contents">
                            <p>
                                {
                                    animationFrame === undefined
                                    ? <button onClick={this.resume}>Resume</button>
                                    : <button onClick={this.pause}>Pause</button>
                                }
                            </p>
                            <p>
                                Step:
                                <input type="number" value={step} step="any" onInput={linkState(this, 'step')} /><br />
                                Iterations:
                                <input type="number" value={iterations} onInput={linkState(this, 'iterations')} /><br />
                                { utilization && `Utilization: ${Math.round(utilization * 10000) / 100}%` }
                            </p>
                        </div>
                    </details>
                </div>
            </Fragment>
        );
    }
}
