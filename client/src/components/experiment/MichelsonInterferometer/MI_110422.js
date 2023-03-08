/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, memo } from "react";
import { useGLTF, Box, Cylinder } from "@react-three/drei";
import DescriptiveTag from "../../UI/experimentUI/DescriptiveTag";
import { isEqual } from 'lodash';

function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/model/MI_110422.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Optical elements">
          {/* BeamSplitter and Lens*/}
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
          position={[-0.53, 0.67, 0.94]}
          onPointerDown={(e) => {
            e.stopPropagation();
            props.toggleSelect("KM100_1");
          }}
        >
          {props.showTags && <DescriptiveTag position={[0, 1.3, 0]} title="Reference Mirror" description="KM100 Double Rotary Control" />}
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
              <meshBasicMaterial color="#222222" opacity={1.0} />
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
          name="TranslateMirror"
          position={[-1.71, 0.67, -0.12]}
          onPointerDown={(e) => {
            e.stopPropagation();
            props.toggleSelect("linear_1");
          }}
        >
          {props.showTags && <DescriptiveTag position={[0, 1.3, 0]} title="Linear Movable Mirror" description="SM1ZP/M Translation Mount" />}
          <mesh
            name="TranslateMirrorMesh"
            castShadow
            receiveShadow
            geometry={nodes.TranslateMirrorMesh.geometry}
            material={materials.BlackParts}
          >
            {props.selected.has("linear_1") ? (
              <meshStandardMaterial color="#00ff00" transparent opacity={0.7} />
            ) : (
              <meshBasicMaterial color="#222222" opacity={1.0} />
            )}
          </mesh>
          <mesh
            name="TranslateMirrorMesh_1"
            castShadow
            receiveShadow
            geometry={nodes.TranslateMirrorMesh_1.geometry}
            material={materials.ShinyParts}
          />
          <mesh
            name="TranslateMirrorMesh_2"
            castShadow
            receiveShadow
            geometry={nodes.TranslateMirrorMesh_2.geometry}
            material={materials.Mirror}
          />
        </group>
        <group
          name="Schirm"
          position={[-0.37, 0.86, -1.22]}
          onPointerDown={(e) => {
            e.stopPropagation();
            props.toggleSelect("screen");
          }}
        >
          {props.showTags && <DescriptiveTag position={[0, 1.5, 0]} title="Screen" description="Screen with Interference Pattern" />}
          <mesh
            name="PlaneMesh"
            castShadow
            receiveShadow
            geometry={nodes.PlaneMesh.geometry}
          >
            {props.selected.has("screen") ? (
              <meshStandardMaterial color="#00ff00" transparent opacity={0.7} />
            ) : (
              <meshBasicMaterial color="#eeeeee" opacity={1.0} />
            )}
          </mesh>
          <mesh
            name="PlaneMesh_1"
            castShadow
            receiveShadow
            geometry={nodes.PlaneMesh_1.geometry}
            material={materials.BlackParts}
          />
        </group>
        <group name="Base">
          {props.showTags && <DescriptiveTag position={[-0.5, 2, -0.1]} title="Beam Splitter" description="50/50 Beam Splitter" />}
          {props.showTags && <DescriptiveTag position={[0.6, 2, -0.1]} title="Lens" description="Lens for Beam Widening" />}
          <mesh
            name="BaseMesh"
            castShadow
            receiveShadow
            geometry={nodes.BaseMesh.geometry}
            material={materials.BlackParts}
          />
          <mesh
            name="BaseMesh_1"
            castShadow
            receiveShadow
            geometry={nodes.BaseMesh_1.geometry}
            material={materials.ShinyParts}
          />
        </group>
        <group
          name="Laser"
          position={[1.56, 0.67, 0.14]}
          onPointerDown={(e) => {
            e.stopPropagation();
            props.toggleSelect("greenlaser_1");
          }}
        >
          {props.showTags && <DescriptiveTag position={[0, 1.2, -0.2]} title="Laser Alignment" description="KM100 Double Rotary Control" />}
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
              <meshBasicMaterial color="#222222" opacity={1.0} />
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
          position={[1.61, 0.25, -0.9]}
          onPointerDown={(e) => {
            e.stopPropagation();
            props.toggleSelect("greenlaserPower_1")
          }}
        >
          {props.showTags && <DescriptiveTag position={[0, 1.3, 0]} title="Power Supply" description="5V Laser Power Supply" />}
          {props.selected.has("greenlaserPower_1") ? (
            <meshStandardMaterial color="#00ff00" transparent opacity={0.7} />
          ) : (
            <meshBasicMaterial color="#222222" opacity={1.0} />
          )}
        </mesh>
        {props.showBeam &&
          <mesh
            name="LaserBeam"
            castShadow
            receiveShadow
            geometry={nodes.LaserBeam.geometry}
            material={materials.Laser}
            position={[-0.3, 0.66, -0.15]}
          />}
      </group>
    </group>
  );
}

useGLTF.preload("/model/MI_110422.glb");
export default memo(Model, isEqual);
