import { writeFileSync } from "fs";

function save(text: string) {
  writeFileSync("./output", text);
  console.log("Saved to disk");
}

save("Hello World!");
