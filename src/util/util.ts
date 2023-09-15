import { Robot } from "../common/types";

export function getAvatar(seed: string) {
  return `https://api.dicebear.com/7.x/bottts/svg?seed=${seed}`;
}

export function getRobots() {
  const robots = localStorage.getItem("robots");

  if (robots) {
    return JSON.parse(robots);
  }

  return [];
}

export function saveRobots(newRobots: Robot[]) {
  localStorage.setItem("robots", JSON.stringify(newRobots));
}
