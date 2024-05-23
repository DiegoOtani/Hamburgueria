
const InputField = ({ type, name, placeholder, value, onChange, Icon }) => {
  return <div className="input-field">
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      />
      <Icon className="icon"/>
  </div>
}

export default InputField
