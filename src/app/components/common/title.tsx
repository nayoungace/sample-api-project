function Title({ children }: React.ComponentProps<'div'>) {
  return <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">{children}</h1>;
}

export { Title };
