import Code from "@/components/Code";
import List from "@/components/List";
import Table from "@/components/Table";
import { ListItem } from "@/types/types";
import Snowflakes from "@/components/Snowflakes";

export default function Home() {
  const list: ListItem[] = JSON.parse(process.env.LIST ?? `[]`);
  const people = (process.env.PEOPLE as number | undefined) ?? 1;

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
      <div className="lg:max-w-[70%] mx-auto">
        <div className="hidden lg:block">
          <Table list={list} />
        </div>
        <div className="block lg:hidden">
          <List list={list} />
        </div>
        <div className="mt-8">
          <b className="text-2xl">Total: </b>{" "}
          {total.toFixed(2) + ` € (${(total / people).toFixed(2)} € = `}
          <Code>{`total / ${people.toString()}`}</Code>
          {" )"}
        </div>
      </div>
    </main>
  );
}
