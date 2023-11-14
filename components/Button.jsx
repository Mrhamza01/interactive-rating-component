const Button = ({ number, setItem, item }) => {
  return (
    <button
      onClick={() => {
        setItem(number);
      }}
    >
      {number}
    </button>
  );
};

export default Button;
