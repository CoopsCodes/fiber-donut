import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Model from "./components/Model";

import "./App.css";

function App() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 150], fov: 40 }}
        style={{ backgroundColor: "paleturquoise" }}
      >
        <Suspense fallback={null}>
          <Stage
            environment="city"
            intensity={0.5}
            contactShadowOpacity={0.6}
            contactShadowBlur={1}
          >
            <Model scale={50} />
          </Stage>
        </Suspense>
        <OrbitControls autoRotate />
      </Canvas>
    </div>
  );
}

export default App;
