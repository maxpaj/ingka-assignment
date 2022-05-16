import { HTMLProps } from "react";

type ButtonProps = {
  selected?: boolean;
} & Omit<HTMLProps<HTMLButtonElement>, "type">;

export function Button({
  children,
  className = "",
  selected,
  ...rest
}: ButtonProps) {
  const selectedClass = selected ? `font-bold border-slate-500` : "";

  return (
    <button
      data-testid="button"
      className={`${selectedClass} px-4 py-2 rounded-full border border-slate-200 hover:border-slate-500 cursor-pointer`}
      {...rest}
    >
      {children}
    </button>
  );
}
