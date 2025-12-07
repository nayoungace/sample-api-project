import { cn } from '@/lib/utils';

type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends React.ComponentProps<'button'> {
  size?: ButtonSize;
}

const sizeClasses: Record<ButtonSize, string> = {
  small: 'h-8 px-3 text-sm md:w-auto',
  medium: 'h-10 px-4 text-base md:w-auto',
  large: 'h-12 px-5 text-base md:w-[158px]',
};

function Button({ type = 'button', className, size = 'large', ...props }: ButtonProps) {
  const sizeClass = sizeClasses[size];

  return (
    <button
      type={type}
      className={cn(
        sizeClass,
        'flex w-full items-center justify-center gap-2 rounded-lg bg-foreground text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]',
        className
      )}
      {...props}
    />
  );
}

export { Button };
