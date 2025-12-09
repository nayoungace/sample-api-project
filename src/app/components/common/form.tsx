function FormItem({ children }: React.ComponentProps<'label'>) {
  return <label>{children}</label>;
}

function FormInput({ type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800"
      {...props}
    />
  );
}

function FormTextarea({ ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      className="w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-hidden bg-transparent text-gray-900 dark:text-gray-300 text-gray-900 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800"
      {...props}
    />
  );
}

export { FormItem, FormInput, FormTextarea };
