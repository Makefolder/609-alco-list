const Link = (props: { url: string; bought: boolean }) => {
  const { url, bought } = props;
  return (
    <>
      {bought || url === "" ? (
        <p className={`inline-block ${url === "" ? `text-[#ffffff]/30` : ``}`}>
          link
        </p>
      ) : (
        <a
          href={url}
          className={`${bought ? "" : "text-blue-500 underline"}`}
          target="_blank"
        >
          link
        </a>
      )}
    </>
  );
};

export default Link;
