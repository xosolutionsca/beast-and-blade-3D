import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.159.0/build/three.module.js';
import { PointerLockControls } from 'https://cdn.jsdelivr.net/npm/three@0.159.0/examples/jsm/controls/PointerLockControls.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb); // sky blue

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ground
const geometry = new THREE.PlaneGeometry(100, 100);
const material = new THREE.MeshStandardMaterial({ color: 0x228B22 });
const ground = new THREE.Mesh(geometry, material);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

// light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(10, 10, 10);
scene.add(light);

// cube
const cubeGeo = new THREE.BoxGeometry();
const cubeMat = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(cubeGeo, cubeMat);
cube.position.y = 1;
scene.add(cube);

// controls
const controls = new PointerLockControls(camera, document.body);
document.addEventListener('click', () => controls.lock(), false);

const move = { forward: false, backward: false, left: false, right: false };
document.addEventListener('keydown', (e) => {
  if (e.code === '
