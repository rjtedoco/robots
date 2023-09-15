import { FixedSizeList } from "react-window";
import ListItem from "./ListItem";
import { Robot } from "../common/types";
import { Dispatch, SetStateAction } from "react";

interface ListProps {
  robots: Robot[];
  setRobots: Dispatch<SetStateAction<Robot[]>>;
}

const List = ({ robots, setRobots }: ListProps) => {
  const handleDelete = (itemToDelete: Robot) => {
    setRobots(() => robots.filter((item) => item !== itemToDelete));
  };

  return (
    <FixedSizeList
      height={150}
      itemCount={robots.length}
      itemSize={45}
      width={300}
    >
      {({ index, style }) => {
        const robot = robots[index];
        return (
          <ListItem
            style={style}
            robot={robot}
            onDelete={() => {
              handleDelete(robot);
            }}
          />
        );
      }}
    </FixedSizeList>
  );
};

export default List;
