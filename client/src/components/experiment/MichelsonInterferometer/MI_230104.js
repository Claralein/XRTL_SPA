/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, memo } from 'react';
import { useGLTF, Box, Cylinder} from '@react-three/drei';
import DescriptiveTag from "../../UI/experimentUI/DescriptiveTag";
import {isEqual} from 'lodash';
import {useAppContext} from '../../../services/AppContext'

export function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF("/model/MI_230104.glb");
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="Optical elements">
          {/* Glass Materials need to be generated here*/}
          {/* BeamSplitter */}
          <Box
            position={[-0.55, 0.66, -0.1]}
            args={[1, 1, 1]}
            scale={[0.25, 0.25, 0.25]}
          >
            <meshPhysicalMaterial
              thickness={1}
              roughness={0.1}
              transmission={1}
              clearcoat={0.5}
              clearcoatRoughness={0}
              ior={1.1}
              envMapIntensity={25}
              color={"#ffffff"}
              attenuationColor={"#00ffff"}
              attenuationDistance={5}
            />
          </Box>
          {/* Prism1 */}
          <Box
            position={[-0.45, 0.55, 0.58]}
            args={[1, 1, 1]}
            scale={[0.5, 0.5, 0.125]}
          >
            <meshPhysicalMaterial
              thickness={1}
              roughness={0.1}
              transmission={1}
              clearcoat={0.5}
              clearcoatRoughness={0}
              ior={1.1}
              envMapIntensity={25}
              color={"#ffffff"}
              attenuationColor={"#00ffff"}
              attenuationDistance={5}
            />
          </Box>
          {/* Prism2 */}
          <Box
            position={[0.2, 0.55, 0.44]}
            args={[1, 1, 1]}
            scale={[0.5, 0.5, 0.125]}
          >
            <meshPhysicalMaterial
              thickness={1}
              roughness={0.1}
              transmission={1}
              clearcoat={0.5}
              clearcoatRoughness={0}
              ior={1.1}
              envMapIntensity={25}
              color={"#ffffff"}
              attenuationColor={"#00ffff"}
              attenuationDistance={5}
            />
          </Box>
          {/* BeamSplitter slim */}
          <Cylinder
            position={[0.64, 0.68, -0.66]}
            args={[1, 1, 1]}
            rotation={[0, -Math.PI / 4, Math.PI / 2]}
            scale={[0.14, 0.05, 0.14]}
          >
            <meshPhysicalMaterial
              thickness={1}
              roughness={0.1}
              transmission={1}
              clearcoat={0.5}
              clearcoatRoughness={0}
              ior={1.1}
              envMapIntensity={25}
              color={"#ffffff"}
              attenuationColor={"#00ffff"}
              attenuationDistance={5}
            />
          </Cylinder>
          {/* Lens */}
          <Cylinder
            position={[0.7, 0.67, -0.13]}
            args={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[0.14, 0.05, 0.14]}
          >
            <meshPhysicalMaterial
              thickness={1}
              roughness={0.1}
              transmission={1}
              clearcoat={0.5}
              clearcoatRoughness={0}
              ior={1.1}
              envMapIntensity={25}
              color={"#ffffff"}
              attenuationColor={"#00ffff"}
              attenuationDistance={5}
            />
          </Cylinder>
        </group>
        <group
          name="Mirror1"
          position={[0,0,0]}
          onPointerDown={(e) => {
            e.stopPropagation();
            props.toggleSelect("KM100_1");
          }}
        >
          {props.showTags && <DescriptiveTag position={[-0.5, 1.3, 0.9]} title="Reference Mirror" description="KM100 Double Rotary Control" />}
          <mesh
            name="SideMirrorMesh"
            castShadow
            receiveShadow
            geometry={nodes.SideMirrorMesh.geometry}
            material={materials.BlackParts}
          >
            {props.selected.has("KM100_1") ? (
              <meshStandardMaterial color="#00ff00" transparent opacity={0.7} />
              ) : (
                <meshStandardMaterial color="#222222" opacity={1.0} />
                )}          
          </mesh>
          <mesh
            name="SideMirrorMesh_1"
            castShadow
            receiveShadow
            geometry={nodes.SideMirrorMesh_1.geometry}
            material={materials.ShinyParts}
          />
        
          <mesh
            name="SideMirrorMesh_2"
            castShadow
            receiveShadow
            geometry={nodes.SideMirrorMesh_2.geometry}
            material={materials.Mirror}
          />
        </group>

        <group
          name="Schirm"
          position={[0, 0, 0]}
          onPointerDown={(e) => {
            e.stopPropagation();
            props.toggleSelect("screen");
          }}
        >
          {props.showTags && <DescriptiveTag position={[0, 1.5, -1.3]} title="Screen" description="Screen with Interference Pattern" />}
          <mesh
            name="PlaneMesh"
            castShadow
            receiveShadow
            geometry={nodes.PlaneMesh.geometry}
            material={materials.WhiteParts}
          />
        
          <mesh
            name="PlaneMesh_1"
            castShadow
            receiveShadow
            geometry={nodes.PlaneMesh_1.geometry}
            material={materials.BlackParts}
          />
        </group>
        <group
          name="Laser"
          position={[0, 0, 0]}
          onPointerDown={(e) => {
            e.stopPropagation();
            props.toggleSelect("greenlaser_1");
          }}
        >
          {props.showTags && <DescriptiveTag position={[1.6, 1.3, 0]} title="Laser Alignment" description="KM100 Double Rotary Control" />}
          <mesh
            name="LaserMesh"
            castShadow
            receiveShadow
            geometry={nodes.LaserMesh.geometry}
            material={materials.BlackParts}
          >
            {props.selected.has("greenlaser_1") ? (
                <meshStandardMaterial color="#00ff00" transparent opacity={0.7} />
              ) : (
                <meshStandardMaterial color="#222222" opacity={1.0} />
              )}
          </mesh>
          <mesh
            name="LaserMesh_1"
            castShadow
            receiveShadow
            geometry={nodes.LaserMesh_1.geometry}
            material={materials.ShinyParts}
          />
       </group>

        <mesh
          name="SD5"
          castShadow
          receiveShadow
          geometry={nodes.SD5.geometry}
          material={materials.BlackParts}
          onPointerDown={(e) => {
            e.stopPropagation();
            props.toggleSelect("greenlaserPower_1")
          }}
        >
          {props.showTags && <DescriptiveTag position={[1.4, 1.1, -0.8]} title="Power Supply" description="5V Laser Power Supply" />}
          {props.selected.has("greenlaserPower_1") ? (
            <meshStandardMaterial color="#00ff00" transparent opacity={0.7} />
          ) : (
            <meshStandardMaterial color="#222222" opacity={1.0} />
          )}
        </mesh>

        {/* switch (props.showBeam) {
          case 'split':
            <mesh
            name="LaserBeamBS"
            geometry={nodes.LaserBeamBS.geometry}
            material={materials.Laser}
            position={[-0.53, 0.68, -0.13]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={0.17}
            >
              <meshStandardMaterial color="#65ff00" transparent opacity={0.8} emissive emissiveIntensity={1}/>
            </mesh>
          case 'on':
            <mesh
            name="LaserBeam"
            castShadow
            receiveShadow
            geometry={nodes.LaserBeam.geometry}
            material={materials.Laser}
            >
              <meshStandardMaterial color="#65ff00" transparent opacity={0.8} emissive emissiveIntensity={1}/>
            </mesh>
            break;
          case 'off':
          default:      
        }  */}

        {
          (props.showLED === 'white') ? (
            <mesh
              name="LEDLightWhite"
              geometry={nodes.LEDLightWhite.geometry}
              material={materials.LEDWhite}
              position={[-0.7, 0.67, -0.12]}
              rotation={[-Math.PI / 2, Math.PI / 2, 0]}
              scale={0.17}
            >
              <meshStandardMaterial color="#ffffff" transparent opacity={0} emissive emissiveIntensity={1}/>
            </mesh>
          ) : (
            <mesh/>
          )
        }

{
          (props.showLED === 'red') ? (
            <mesh
              name="LEDLightRed"
              geometry={nodes.LEDLightRed.geometry}
              material={materials.LEDRed}
              position={[-0.7, 0.67, -0.12]}
              rotation={[-Math.PI / 2, Math.PI / 2, 0]}
              scale={0.17}
            >
              <meshStandardMaterial color="#ff3900" transparent opacity={0.8} emissive emissiveIntensity={1}/>
            </mesh>
          ) : (
            <mesh/>
          )
        }



        
        

     
        <group
          name="BS_slim"
          position={[0.64, 0, -0.52]}
          onPointerDown={(e) => {
            e.stopPropagation();
            props.toggleSelect("beamSplitter");
          }}
        >
          {props.showTags && <DescriptiveTag position={[0, 1.3, -0.1]} title="Beam Splitter" description="Observation of second IM Path" />}
          <mesh
            name="Cylinder"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={materials.BlackParts}
          >
            {props.selected.has("beamSplitter") ? (
              <meshStandardMaterial color="#00ff00" transparent opacity={0.7} />
            ) : (
              <meshStandardMaterial color="#222222" opacity={1.0} />
            )}
          </mesh>
          <mesh
            name="Cylinder_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_1.geometry}
            material={materials.ShinyParts}
          />
        </group>     
          
        <group
          name="TranslateMirror"
          position={[-1.76, 0.62, 0.03]}
          onPointerDown={(e) => {
            e.stopPropagation();
            props.toggleSelect("linear_1");
          }}
        >
          {props.showTags && <DescriptiveTag position={[0, 0.8, 0]} title="Transtlate Mirror" description="Linear Stage" />}
          <mesh
            name="TranslateMirrorMesh005"
            castShadow
            receiveShadow
            geometry={nodes.TranslateMirrorMesh005.geometry}
            material={materials.BlackParts}
          >
            {props.selected.has("linear_1") ? (
              <meshStandardMaterial color="#00ff00" transparent opacity={0.7} />
              ) : (
              <meshStandardMaterial color="#222222" opacity={1.0} />
            )}
          </mesh>
          <mesh
            name="TranslateMirrorMesh005_1"
            castShadow
            receiveShadow
            geometry={nodes.TranslateMirrorMesh005_1.geometry}
            material={materials.ShinyParts}
          />
          <mesh
            name="TranslateMirrorMesh005_2"
            castShadow
            receiveShadow
            geometry={nodes.TranslateMirrorMesh005_2.geometry}
            material={materials.Mirror}
          />
        </group>
                  
        <mesh
          name="TranslateMirrorBase"
          castShadow
          receiveShadow
          geometry={nodes.TranslateMirrorBase.geometry}
          material={materials.BlackParts}
          position={[-1.88, 0.11, -0.01]}
        />

        <group
          name="ThermalMirror"
          position={[-2.7, 0.82, -0.91]}
          rotation={[0, -Math.PI / 2, 0]}
          onPointerDown={(e) => {
            e.stopPropagation();
            props.toggleSelect("heater");
          }}
        >
          {props.showTags && <DescriptiveTag position={[0, 0.5, 0]} title="Heated Mirror" description="Observation of Thermal Expansion" />}
          <mesh 
            name="Cylinder008"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008.geometry}
            material={materials['Material.002']}
          >
            {props.selected.has("heater") ? (
              <meshStandardMaterial color="#00ff00" transparent opacity={0.7} />
            ) : (
              <meshStandardMaterial color="#884422" opacity={1.0} />
            )}
          </mesh>
          <mesh 
            name="Cylinder008_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_1.geometry}
            material={materials['BlackParts.001']}
          >
            {props.selected.has("heater") ? (
              <meshStandardMaterial color="#00ff00" transparent opacity={0.7} />
            ) : (
              <meshStandardMaterial color="#222222" opacity={1.0} />
            )}
          </mesh>
          <mesh
            name="Cylinder008_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_2.geometry}
            material={materials['ShinyParts.001']}
          />
          <mesh
            name="Cylinder008_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_3.geometry}
            material={materials['Alu.001']}
          />
          <mesh
            name="Cylinder008_4"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_4.geometry}
            material={materials['Mirror.002']}
          />
          <mesh
            name="Cylinder008_5"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_5.geometry}
            material={materials.BlackParts}
          >
            {props.selected.has("heater") ? (
              <meshStandardMaterial color="#00ff00" transparent opacity={0.7} />
            ) : (
              <meshStandardMaterial color="#222222" opacity={1.0} />
            )}
          </mesh>
        </group>

        <group
          name="TranslateMirrorBase"
          position={[-2.38, 0.11, -1.01]}
          onPointerDown={(e) => {
            e.stopPropagation();
            props.toggleSelect("rotary_2");
          }}
        >
          {props.showTags && <DescriptiveTag position={[0, 0.5, 0]} title="Measurement" description="Choose betweene Translate Mirror and Heated Mirror" />}
          <mesh
            name="TranslateMirrorMesh004"
            castShadow
            receiveShadow
            geometry={nodes.TranslateMirrorMesh004.geometry}
            material={materials.BlackParts}
          >  
            {props.selected.has("rotary_2") ? (
              <meshStandardMaterial color="#00ff00" transparent opacity={0.7} />
            ) : (
              <meshStandardMaterial color="#222222" opacity={1.0} />
            )}
          </mesh>
          <mesh
            name="TranslateMirrorMesh004_1"
            castShadow
            receiveShadow
            geometry={nodes.TranslateMirrorMesh004_1.geometry}
            material={materials.ShinyParts}
          />
        </group>
        
        <group
          name="RotaryStage"
          position={[-0.12, 0, 0.51]}
          rotation={[0, -1.57, 0]}
          onPointerDown={(e) => {
            e.stopPropagation();
            props.toggleSelect("rotary_1");
          }}
        >
          {props.showTags && <DescriptiveTag position={[0, 1.3, 0]} title="Rotating Prisms" description="Measurement of Refractive Index" />}
          <mesh
            name="PR01_M-Step001"
            castShadow
            receiveShadow
            geometry={nodes['PR01_M-Step001'].geometry}
            material={materials['BlackParts.004']}
          >
            {props.selected.has("rotary_1") ? (
              <meshStandardMaterial color="#00ff00" transparent opacity={0.7} />
            ) : (
              <meshStandardMaterial color="#222222" opacity={1.0} />
            )}
          </mesh>
          
          <mesh
            name="PR01_M-Step001_1"
            castShadow
            receiveShadow
            geometry={nodes['PR01_M-Step001_1'].geometry}
            material={materials['BlackParts.003']}
          >
            {props.selected.has("rotary_1") ? (
              <meshStandardMaterial color="#00ff00" transparent opacity={0.7} />
            ) : (
              <meshStandardMaterial color="#222222" opacity={1.0} />
            )}
          </mesh>
          
          <mesh
            name="PR01_M-Step001_2"
            castShadow
            receiveShadow
            geometry={nodes['PR01_M-Step001_2'].geometry}
            material={materials['ShinyParts.003']}
          />
        </group>
        

{/* Bookmark */}


        <mesh
          name="BS_slimHolder001"
          castShadow
          receiveShadow
          geometry={nodes.BS_slimHolder001.geometry}
          material={materials.BlackParts}
        />
        

        
        <mesh
          name="BS_slimHolder"
          castShadow
          receiveShadow
          geometry={nodes.BS_slimHolder.geometry}
          material={materials.BlackParts}
          position={[0.64, 0, -0.66]}
          rotation={[-Math.PI, 0.63, -Math.PI]}
        />
        
        <group
          name="LED"
          position={[0, 0.45, -0.13]}
          rotation={[Math.PI, -1.18, Math.PI]}
          scale={0.05}
          onPointerDown={(e) => {
            e.stopPropagation();
            props.toggleSelect("beamSplitter");
          }}
        >
          {props.showTags && <DescriptiveTag position={[0, 17, 0]} title="LED" description="Measurement of Coherent Length" />}
          <mesh
            name="Cylinder007"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007.geometry}
            material={materials['ShinyParts.005']}
          ></mesh>
          <mesh
            name="Cylinder007_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_1.geometry}
            material={materials['BlackParts.005']}
          >
            {props.selected.has("beamSplitter") ? (
              <meshStandardMaterial color="#00ff00" transparent opacity={0.7} />
            ) : (
              <meshStandardMaterial color="#222222" opacity={1.0} />
            )}
          </mesh>
        </group>

        <mesh
          name="BaseMesh001"
          castShadow
          receiveShadow
          geometry={nodes.BaseMesh001.geometry}
          material={materials.BlackParts}
        />
        
        <mesh
          name="BaseMesh001_1"
          castShadow
          receiveShadow
          geometry={nodes.BaseMesh001_1.geometry}
          material={materials.ShinyParts}
        />
        
        <mesh
          name="BaseMesh001_2"
          castShadow
          receiveShadow
          geometry={nodes.BaseMesh001_2.geometry}
          material={materials['BlackParts.004']}
        />
        
        <mesh
          name="BaseMesh001_3"
          castShadow
          receiveShadow
          geometry={nodes.BaseMesh001_3.geometry}
          material={materials['ShinyParts.004']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/MI_230104.glb')
export default memo(Model, isEqual);