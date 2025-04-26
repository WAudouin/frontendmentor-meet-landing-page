export interface NumberProps {
  number: string;
}

const NumberIndicator = ({ number }: NumberProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="h-20 w-px bg-slate-300" />
      <div className="flex items-center justify-center w-16 h-16 border border-slate-300 rounded-full">
        <span className="text-preset-5 text-slate-600">{number}</span>
      </div>
    </div>
  );
};

export default NumberIndicator;
