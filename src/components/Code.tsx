const Code = (props: { children: string; className?: string }) => {
  const { children, className } = props;
  return (
    <code className={className ? className : "px-[8px] py-1 rounded-[5px]"}>
      {children}
    </code>
  );
};

export default Code;
