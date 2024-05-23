import Button from "../generalComponents/Button"
import InputField from "../generalComponents/InputField"
import { FaUser,  FaLock } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { GrRefresh } from "react-icons/gr";

const UserForm = ({
    formData,
    setFormData,
    className,
    onSubmit,
    title,
    description,
    errors,
    msg,
    submitButton,
    secondButton,
    secondButtonAction,
  }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return <div className={className}>
    <form onSubmit={onSubmit}>
      <h1>{title}</h1>
      <p>{description}</p>

      {msg && (
        <div className="success">
          <p>{msg}</p>
        </div>
      )}

      {errors?.length > 0 && (
        <div className="errors">
          {errors.map((error, index) => (
            <p key={index}> {error} </p>
          ))}
        </div>
      )}

      <InputField
        type="text"
        placeholder="Nome:"
        value={formData.name}
        name="name" Icon={FaUser}
        onChange={handleChange}
      />
      <InputField
        type="email"
        placeholder="E-mail:"
        value={formData.email}
        name="email"
        Icon={MdEmail}
        onChange={handleChange}
      />
      <InputField
        type="text"
        placeholder="Endereço:"
        value={formData.address}
        name="address"
        Icon={FaHouse}
        onChange={handleChange}
      />
      <InputField
        type="password"
        placeholder="Senha:"
        name="password"
        value={formData.password}
        Icon={FaLock}
        onChange={handleChange}
      />
      <InputField
        type="password"
        placeholder="Confirmar senha:"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        Icon={GrRefresh}
      />

      <Button
        type="submit"
        children={submitButton}
      />

      <Button
        children={secondButton}
        onClick={secondButtonAction}
      />

    </form>
  </div>
}

export default UserForm
