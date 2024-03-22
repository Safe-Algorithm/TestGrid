interface InputProps {
  type: string;
  name: string;
  required?: boolean;
  placeholder?: string;
}
function Input({ type, name, required = false, placeholder }: InputProps) {
  return (
    <input
      className="border-4 border-blue w-80 p-2 m-3 shadow-custom shadow-green focus:outline-none"
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
    />
  );
}

export default Input;
