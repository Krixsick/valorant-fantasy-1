import LightRays from "@/components/LightRays";

export function Homescreen() {
  return (
    <div className="w-screen h-screen relative bg-black">
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1}
        lightSpread={0.5}
        rayLength={3}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0}
        className="custom-rays"
        pulsating={false}
        fadeDistance={1}
        saturation={1}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="text-white text-4xl font-geist">Hello</p>
      </div>
    </div>
  );
}
