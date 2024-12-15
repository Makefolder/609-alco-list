import { ListItem } from "@/types/types";

const Table = (props: { list: Array<ListItem> }) => {
  const { list } = props;
  return (
    <table className="outline-0 border-0 p-0 m-0 w-full text-left">
      <thead>
        <tr>
          <th>Name</th>
          <th>Amount</th>
          <th>Price per item</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, i) => (
          <tr key={i} className={item.bought ? `line-through opacity-30` : ``}>
            <td>{item.name}</td>
            <td>{item.amount}</td>
            <td>{item.price} €</td>
            <td>
              {item.bought || item.url === "" ? (
                <p className={item.url === "" ? `text-[#ffffff]/30` : ``}>
                  link
                </p>
              ) : (
                <a
                  href={item.url}
                  className={`${item.bought ? "" : "text-blue-500 underline"}`}
                  target="_blank"
                >
                  link
                </a>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
