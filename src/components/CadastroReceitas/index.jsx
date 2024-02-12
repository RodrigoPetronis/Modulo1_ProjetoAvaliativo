import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AdicionarReceitas } from "../adicionarReceitas";
import { Input } from "@mui/material";
import BasicTextFields from "../atomComponents/inputComponent";
import Checkboxes from "../atomComponents/checkBoxComponent";
import CheckboxLabels from "../atomComponents/checkBoxComponent";
import ContainedButtons from "../atomComponents/buttonComponent";

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  bgcolor: "#C7C8CC",
  border: "2px solid #000",
  boxShadow: 24,
  color: "black",
  p: 4,
};

export default function CadastroReceitas() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ display: "flex", alignItems: "end" }}>
      <Button onClick={handleOpen}>
        <AdicionarReceitas />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h1">
            Adicionar Receita
          </Typography>
          <BasicTextFields name={"Nome da Receita"} rows={1} />
          <BasicTextFields name={"Ingredientes"} rows={2}/>
          <BasicTextFields name={"Modo de Preparo"} rows={4} />
          <div style={{display:"flex", alignItems:"center", width:"100%", justifyContent:"space-evenly"}}>
            <h4>Restrições</h4>
          <CheckboxLabels label={"Gluten"} />
          <CheckboxLabels label={"Lactose"} />
          </div>
          <ContainedButtons name={"Inserir"} size={"small"} color={"secondary"}/>
        </Box>
      </Modal>
    </div>
  );
}
