import { TbTruckDelivery } from "react-icons/tb";

const FormularioCheckout = ({ dataForm, handleChangeInput, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="form-checkout">
      <h2>Porfavor complete con sus datos para terminar con la compra</h2>
      <TbTruckDelivery size={80} />
      <div className="inputs-form">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={dataForm.name}
          onChange={handleChangeInput}
        />
      </div>
      <div className="inputs-form">
        <label htmlFor="phone">Telefono:</label>
        <input
          type="number"
          id="phone"
          name="phone"
          value={dataForm.phone}
          onChange={handleChangeInput}
        />
      </div>

      <div className="inputs-form">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={dataForm.email}
          onChange={handleChangeInput}
        />
      </div>
      <div className="inputs-form">
        <label htmlFor="email"> Confirme Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={dataForm.email}
          onChange={handleChangeInput}
        />
      </div>

      <div className="btn-form">
       <button type="submit">Enviar Orden</button>
      </div>
    </form>
  );
};
export default FormularioCheckout;