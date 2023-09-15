import { useEffect, useState } from "react";
import Input from "./components/Input";
import List from "./components/List";
import { Robot } from "./common/types";
import { getRobots, saveRobots } from "./util/util";

function App() {
  const [robots, setRobots] = useState<Robot[]>(getRobots());

  useEffect(() => {
    saveRobots(robots);
  }, [robots]);

  return (
    <>
      <h1 className="font-bold">Robots</h1>
      <Input robots={robots} setRobots={setRobots} />
      <hr />
      <List robots={robots} setRobots={setRobots} />
    </>
  );
}

export default App;
