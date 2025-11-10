import Popup from "reactjs-popup";
import FormServico from "../formservico/FormServico";

function ModalServico() {
  return (
    <>
      <Popup
        trigger={
          <button className="border rounded px-4 py-2 hover:bg-white">
            Novo Serviço
          </button>
        }
        modal
        contentStyle={{
          borderRadius: "1rem",
          paddingBottom: "2rem",
        }}
      >
        <FormServico />
      </Popup>
    </>
  );
}

export default ModalServico;
