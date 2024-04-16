import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props) {
  //const { scene } = useGLTF("/bmw.glb");
  const { scene } = useGLTF("/bmw2.glb");
  return <primitive object={scene} {...props} />;
}
function Carmodel() {
  return (
    <div className="flex flex-col items-center justify-center m-14">
      <h1 className="text-5xl text-blue-600 font-bold mr-24">BMW</h1>
      <h1 className="text-5xl font-bold ml-24">DESIGN</h1>
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} className="absolute">
        <color attach={"background"} args={["white"]} />
        <PresentationControls
          speed={2}
          global
          zoom={2}
          polar={[-0.1, Math.PI / 2]}
        >
          <Stage environment={null}>
            <Model scale={0.02} />

            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
      <div className="flex flex-col justify-center items-center mt-20">
        <h1 className="text-5xl text-blue-600">About Us</h1>
        <p className="mt-10">
          Changing Lanes is the official podcast from BMW. In these audio
          series,
          <br /> we take you with us on new journeys through the BMW universe.
          Find <br />
          out more about sustainability, innovation, technology, mobility and
          the <br />
          latest trends. You can find and subscribe to Changing Lanes on all
          <br />
          major podcast platforms, so tune in!
        </p>
      </div>
    </div>
  );
}
export default Carmodel;

// import { Canvas } from "@react-three/fiber";
// import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

// function Model(props) {
//   const { scene } = useGLTF("/bmw.glb");
//   return <primitive object={scene} {...props} />;
// }

// function App() {
//   return (
//     <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} className="absolute">
//       <color attach="background" args={["#fffff"]} />
//       <PresentationControls
//         speed={2}
//         global
//         zoom={5}
//         polar={[-0.1, Math.PI / 2]}
//       >
//         {" "}
//         <Stage environment={null}>
//           <Model scale={0.01} />
//           <Model scale={0.01} />
//         </Stage>
//       </PresentationControls>
//     </Canvas>
//   );
// }
// export default App;

// // useGLTF hook ka istemal: useGLTF ek custom hook hai jo
// //  @react-three/drei library se aata hai. Is hook ka istemal 3D models ko
// // load karne ke liye kiya jata hai. Is code mein /bmw.glb path diya gaya hai,
// //jo ki BMW ka 3D model hai. useGLTF hook model ko load karta hai aur
// //scene object mein us model ko store karta hai.

// // primitive component: primitive ek component hai jo react-three-fiber library
// //mein aata hai aur 3D objects ko render karne ke liye use hota hai.
// // Is code mein object attribute mein scene object diya gaya hai jo useGLTF hook se mila hai.
// // Isse BMW ka 3D model Model component ke andar render hota hai.
// {
//   /* <Canvas> component ko define karta hai jo ki React-three-fiber library se aata hai.
// Is component ka use karte waqt, aap 3D graphics aur animation ko render kar sakte hain
// apne React application mein. */
// }

// // useGLTF: Ye ek custom hook hai jo 3D models ko load karne ke liye use hota hai.
// //Is hook mein aapko model ka path provide karna hota hai. Yahan pe "/bmw.glb"
// //model ko load karne ke liye use kiya gaya hai.

// //     Canvas: Ye ek component hai jo ek WebGL canvas ko render karta hai,
// // jismein 3D graphics ka display hota hai. Is component ke andar aap apne 3D scene ko
// // define kar sakte hain.
// {
//   /* // PresentationControls: Ye ek control component hai jo 3D scene ke movement aur
// //zoom ko handle karta hai. */
// }
// {
//   /* // Stage: Ye ek component hai jo ek 3D stage create karta hai
// // jahan aap apne models ko render kar sakte hain.
// //Yahan pe environment prop use kiya gaya hai
// //jis se ek predefined environment ko set kiya gaya hai. */
// }
// {
//   /* yeh ek JSX element hai jo Model component ko render karta hai. Ismein scale prop ka istemal kiya gaya hai jo Model component ko scale (yaani size) dene ke liye use hota hai.

// Yahan scale={0.01} diya gaya hai, jo ki model ka scale factor hai.
// // Scale factor ka matlab hai ki kitna bada ya chhota model render kiya jaye. Is case mein, 0.01 ka matlab hai ki model ka size sirf 1% hogaya hai compared to its original size. */
// }
