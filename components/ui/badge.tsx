const Badge = ({
  children,
  icon: Icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div className="flex w-fit items-center gap-x-3 rounded-full border bg-secondary px-3 text-secondary-foreground">
      {Icon}
      {Icon && <div className="h-auto w-[1px] self-stretch bg-border" />}
      <span className="py-1.5 text-xs md:text-sm font-medium">{children}</span>
    </div>
  );
};

export default Badge;
