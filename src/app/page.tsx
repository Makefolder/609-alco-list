import Code from "@/components/Code";
import Table from "@/components/Table";
import { ListItem } from "@/types/types";
import Snowflakes from "@/components/Snowflakes";

export default function Home() {
  const list: ListItem[] = JSON.parse(process.env.LIST ?? `[]`);

  const remaining = list.filter((item) => !item.bought);
  const total = remaining.reduce(
    (sum, item) => sum + item.price * item.amount,
    0
  );

  list.sort((a, b) => {
    if (a.bought === b.bought) return 0;
    return a.bought ? 1 : -1;
  });

  return (
    <main className="w-full h-full">
      <Snowflakes />
      <h1 className="text-center my-8">
        Room <Code>609</Code> Alcohol List
      </h1>
      <div className="max-w-[70%] mx-auto">
        <Table list={list} />
        <div className="mt-8">
          <b className="text-2xl">Total: </b>{" "}
          {total.toFixed(2) + ` € (${(total / 4).toFixed(2)} € = `}
          <Code>total / 4</Code>
          {" )"}
        </div>
      </div>
    </main>
  );
}
