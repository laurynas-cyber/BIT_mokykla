export default function Input({
  label = null,
  onChange,
  value,
  type,
  name,
  placeholder = null,
  autoComplete = null,
  errors = {},
}) {
  return (
    <>
      <div className="error-text">
        <span className={errors[name] ? "show" : ""}>{errors[name] ?? ""}</span>
      </div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        className={errors[name] ? "error" : ""}
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    </>
  );
}
