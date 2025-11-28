import { cn } from '@/lib/utils';

function Button({ type, className, ...props }: React.ComponentProps<'button'>) {
  return (
    <button
      type={type}
      className={cn(
        'flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]',
        className
      )}
      {...props}
    />
  );
}

export { Button };
