import { ListItem } from "@/types/types";
import Link from "./Link";

const List = (props: { list: Array<ListItem> }) => {
  const { list } = props;
  return (
    <div className="w-full">
      {list.map((item, i) => (
        <div key={i} className="flex justify-between">
          <div>{`${item.name} x${item.amount}`}</div>
          <div className="flex">
            {`${item.price} €`}
            <div className="ml-2">
              <Link url={item.url} bought={item.bought} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
