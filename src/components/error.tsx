import { cn } from "@/lib/utils";

interface IErrorProps {
  message: string | undefined;
  className?: string;
}
const Error = ({ message, className }: IErrorProps) => {
  return (
    <p className={cn("mt-1 p-0 text-xs text-red-400", className)}>
      {message && message}
    </p>
  );
};

export default Error;
