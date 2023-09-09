import { SphereGeometry } from "t3d";

export const unitSphereGeometry = new SphereGeometry(1, 64, 32);

// Transform the real galaxy scale for better 3D presentation.
export class Scaler {
  static revolution = { speedScale: 10, radius: { scale: 24, offset: 22 } };
  static rotation = { speedScale: 0.3 };

  static scaleRevolutionSpeed(speed) {
    return speed * this.revolution.speedScale;
  }

  static scaleRotationSpeed(speed) {
    return speed * this.rotation.speedScale;
  }

  static scaleRevolutionRadius(radius) {
    return (
      radius * this.revolution.radius.scale + this.revolution.radius.offset
    );
  }
}
