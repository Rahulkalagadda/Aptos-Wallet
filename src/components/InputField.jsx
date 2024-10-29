// src/components/InputField.jsx
const InputField = ({ placeholder, value, onChange }) => {
    return (
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
      />
    );
  };
  
  export default InputField;
  