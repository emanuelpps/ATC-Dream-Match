import { text } from "stream/consumers";

interface Props {
  label: string;
  onClick: () => void;
  variant: "primary" | "secondary" | "tertiary";
}

const buttonStyles = {
  primary: {
    backgroundColor: "blue",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  secondary: {
    backgroundColor: "gray",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  tertiary: {
    backgroundColor: "#314D1D",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    border: "2px solid black",
    fontSize: "20px",
    fontWeight: 600,
  },
};

const Buttons: React.FC<Props> = ({ label, onClick, variant }) => {
  const style = buttonStyles[variant];
  return (
    <button style={style} onClick={onClick}>
      {label}
    </button>
  );
};

export default Buttons;
