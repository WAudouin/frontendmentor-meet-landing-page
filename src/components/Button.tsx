export interface ButtonProps {
  leftText: string;
  rightText: string;
  variant: "blue" | "purple";
}

const Button = ({ leftText, rightText, variant }: ButtonProps) => {
  const variantClass = () => {
    switch (variant) {
      case "blue":
        return "bg-cyan-600 hover:bg-cyan-hover";
      case "purple":
        return "bg-purple-600 hover:bg-purple-hover";
    }
  };
  return (
    <button
      className={`${variantClass()} py-4 px-10 rounded-4xl text-preset-5 text-white`}
    >
      {leftText}
      <span
        className={`ml-1 ${
          variant === "blue" ? "text-cyan-300" : "text-purple-300"
        }`}
      >
        {rightText}
      </span>
    </button>
  );
};

export default Button;
