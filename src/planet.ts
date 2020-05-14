// export const G = 6.674e-11;
export const G = 10000; // calculated to match https://phet.colorado.edu/sims/my-solar-system/my-solar-system_en.html

export default class Planet {
    public radius: number;
    private ax = 0;
    private ay = 0;

    constructor(
        public x: number,
        public y: number,
        public dx: number,
        public dy: number,
        public mass: number,
        public red: number,
        public green: number,
        public blue: number,
        public trailIndex: number,
    ) {
        this.radius = Math.sqrt(mass + 16);
    }

    clearForces() {
        this.ax = 0;
        this.ay = 0;
    }

    applyGravity({ x: otherX, y: otherY, mass: otherMass }: Planet) {
        if (otherMass == 0) return;

        const distanceSquared = (this.x - otherX) ** 2 + (this.y - otherY) ** 2,
            totalAccel = G * otherMass / distanceSquared,
            distance = Math.sqrt(distanceSquared),
            accelX = totalAccel * (otherX - this.x) / distance,
            accelY = totalAccel * (otherY - this.y) / distance;

        this.ax += accelX;
        this.ay += accelY;
    }

    move(dt: number) {
        this.x += (this.dx * dt) + (0.5 * this.ax * (dt ** 2));
        this.y += (this.dy * dt) + (0.5 * this.ay * (dt ** 2));
        this.dx += this.ax * dt;
        this.dy += this.ay * dt;

        this.clearForces();
    }

    willCollide({ x: otherX, y: otherY, radius: otherRadius }: Planet): boolean {
        const maxDistSquared = (this.radius + otherRadius) ** 2,
            actualDistSquared = (this.x - otherX) ** 2 + (this.y - otherY) ** 2;

        return actualDistSquared < (0.5 * maxDistSquared);
    }
}
