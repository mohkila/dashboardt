const AnalyticsCard = ({
  children,
  title,
  subTitle,
}: {
  children: React.ReactNode;
  title: String;
  subTitle: string;
}) => {
  return (
    <div
      className="dark:bg-blue-950 border 
    rounded-md p-6 h-full
    bg-slate-100"
    >
      <div className="mb-3">
        <p>{title}</p>
        <span className="text-primary text-sm">{subTitle}</span>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AnalyticsCard;
