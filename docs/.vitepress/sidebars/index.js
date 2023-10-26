import path from 'path'
import fs from 'fs/promises'

const filePath = path.join(__dirname, "./allSidebar.json");

let allSidebar = [];

(async function getSidebarList() {
  const result = await fs.readFile(filePath, { encoding: "utf8" });
  allSidebar.push(...JSON.parse(result).allSidebar);
})();

export function getSidebar() {
  return allSidebar;
}
