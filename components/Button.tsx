import React, { ReactNode } from "react";

interface ButtonI {
  variant: "outline" | "filled";
  PrefixIcon?: ReactNode;
  SuffixIcon?: ReactNode;
  label: string;
  color?: string;
  textColor?: string;
}

function Button(props: ButtonI) {
  return (
    <button
      className="px-4 rounded-xl uppercase tracking-widest text-xs font-[800] h-[35px]"
      style={{
        backgroundColor: ((variant, color) => {
          if (variant === "outline") return "transparent";
          return color ?? "#7D3CA5";
        })(props.variant, props.color),
        color: props.textColor ?? "#fff",
      }}
    >
      {props.label}
    </button>
  );
}

export default Button;
