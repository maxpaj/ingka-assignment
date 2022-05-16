import { HTMLProps } from "react";

type InputProps = {
  value: string | number | undefined;
} & HTMLProps<HTMLInputElement>;

export function Input({ className, ...rest }: InputProps) {
  return (
    <input
      className="w-full py-4 px-6 bg-slate-100 border-2 border-transparent transition-all rounded-full focus:border-blue-500 focus:background-white"
      {...rest}
    />
  );
}
