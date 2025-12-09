function Label({ children }: React.ComponentProps<'label'>) {
  return <p className="mb-1.5 block font-medium text-lg text-zinc-600 dark:text-zinc-400">{children}</p>;
}

export { Label };
