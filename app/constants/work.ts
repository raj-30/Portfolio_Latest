import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2024 - Present',
    title: 'BookMyCare',
    subtitle: 'Marketing Manager & Founding Member',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2024 - 2025',
    title: 'PlantDex',
    subtitle: 'App Developer',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2024 - 2025',
    title: 'Campus Diaries',
    subtitle: 'Project Lead',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: 'Living...',
    subtitle: 'Building the future',
    position: 'right',
  }
];