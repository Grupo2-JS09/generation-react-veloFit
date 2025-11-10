interface buttonProps {
  color: string;
  width: string;
  textColor: string;
  textValue: string;
  borderColor:string;
  
}

export default function Button({
  color,
  width,
  textColor,
  textValue,
  
}: buttonProps) {
  return (
    <button className={`${color} ${width} ${textColor} ${}`}>{textValue}</button>
  );
}
