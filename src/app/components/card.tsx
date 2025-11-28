function Card({ children }: React.ComponentProps<'div'>) {
  return <div className="flex flex-col gap-5">{children}</div>;
}

function CardHeader({ children }: React.ComponentProps<'div'>) {
  return (
    <div className="flex items-start w-full gap-4">
      <p className="-mt-0.5 text-base text-gray-800 dark:text-white/90">{children}</p>
    </div>
  );
}

function CardBody({ children }: React.ComponentProps<'div'>) {
  return (
    <div className="flex items-center justify-between w-full gap-5 xl:w-auto xl:justify-normal">
      <p className="flex items-center gap-1 text-sm text-gray-500 cursor-pointer dark:text-gray-400">{children}</p>
    </div>
  );
}

export { Card, CardHeader, CardBody };
