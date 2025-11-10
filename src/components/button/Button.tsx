interface buttonProps {
  color: string;
  textColor: string;
  textValue: string;
  borderColor: string;
}

export default function Button({
  color,

  textColor,
  textValue,
  borderColor,
}: buttonProps) {
  return (
    <button
      className={`${color} ${textColor} ${borderColor} border text-center py `}
    >
      {textValue}
    </button>
  );
}
