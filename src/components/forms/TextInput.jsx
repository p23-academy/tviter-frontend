const TextInput = ({
  label,
  name,
  type,
  required
}) => {
  return (
    <div className={"flex flex-col"}>
      <label htmlFor={name}>{label}</label>
      <input required={required} className={"border border-black p-1"} type={type || "text"} name={name}/>
    </div>
  )
}

export default TextInput