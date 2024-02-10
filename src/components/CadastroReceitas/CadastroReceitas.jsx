import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AdicionarReceitas } from "../adicionarReceitas";
import { Flex } from "@radix-ui/themes";

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  bgcolor: "beige",
  border: "2px solid #000",
  boxShadow: 24,
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
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h1"
            style={{ color: "black", backgroundColor: "beige" }}
          >
            Adicionar Receita
          </Typography>
          <form
            action=""
            onSubmit={{}}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "end",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <label
                  htmlFor=""
                  style={{
                    color: "purple",
                    marginRight: "5vw",
                    alignSelf: "start",
                  }}
                >
                  Nome
                </label>
                <textarea type="text" cols={24} rows={1} />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <label
                  htmlFor=""
                  style={{ color: "purple", marginRight: "5vw" }}
                >
                  Ingredientes
                </label>
                <textarea type="text" rows={3} cols={24} />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <label
                  htmlFor=""
                  style={{ color: "purple", marginRight: "5vw" }}
                >
                  Modo de Preparo
                </label>
                <textarea type="text" rows={5} cols={24} />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <label
                  htmlFor=""
                  style={{ color: "purple", marginRight: "5vh" }}
                >
                  Restrições
                </label>

                <input type="checkbox" style={{ marginLeft: "40px" }} />
                <label htmlFor="" style={{ color: "purple" }}>
                  Lactose
                </label>
                <input type="checkbox" />
                <label htmlFor="" style={{ color: "purple" }}>
                  Gluten
                </label>
              </div>
            </div>
            <button style={{ marginTop: "10px" }}>Inserir</button>
          </form>
         
        </Box>
      </Modal>
    </div>
  );
}
