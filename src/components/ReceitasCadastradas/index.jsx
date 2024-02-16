import { PiCookingPotFill } from "react-icons/pi";
import { RiInformationFill } from "react-icons/ri";
import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Modal,
  TextField,
  Typography,
} from "@mui/material";

const style = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  transform: "translate(-50%, -50%)",
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "400px",
  bgcolor: "#C7C8CC",
  border: "2px solid #000",
  boxShadow: 24,
  color: "black",
  p: 4,
};

export const ReceitasCadastradas = () => {
  const [open, setOpen] = useState(false);

  const [recipe, setRecipe] = React.useState({
    recipeName: "",
    ingredients: "",
    preparation: "",
    glutenFree: true,
    lactoseFree: true,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      recipeName: recipe.recipeName,
      ingredients: recipe.ingredients,
      preparation: recipe.preparation,
      glutenFree: recipe.glutenFree,
      lactoseFree: recipe.lactoseFree,
    };

    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    storedRecipes.push(newRecipe);
    console.log(storedRecipes);

    localStorage.setItem("recipes", JSON.stringify(storedRecipes));

    toast.success("Receita Cadastrada com Sucesso", {
      style: {
        color: "green",
      },
      position: "top-center",
      duration: 1000,
    });
    handleClose();
  };

  const handleChange = (e) => {
    const { name, defaultValue, checked, type } = e.target;
    setRecipe((el) => ({
      ...el,
      [name]: type === "checkbox" ? checked : defaultValue,
    }));
  };

  const receitasSalvas = JSON.parse(localStorage.getItem("recipes")) || [];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#5c5e5d",
        borderRadius: "8px",
        padding: "15px",
        color: "#f0f2f1",
      }}
    >
      <div>
        <h2>Receitas Cadastradas</h2>
      </div>
      {receitasSalvas.map((nome, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center " }}>
          <PiCookingPotFill
            style={{ width: "20px", height: "25px", verticalAlign: "middle" }}
          />
          <h4
            style={{
              paddingLeft: "5px",
              paddingRight: "5px",
              margin: "0px",
              minWidth: "130px",
            }}
          >
            {nome.recipeName}
          </h4>
          <Button
            onClick={handleOpen}
            style={{ minWidth: "0px", padding: "0px", color: "lightBlue" }}
          >
            <RiInformationFill
              style={{ width: "20px", height: "25px", verticalAlign: "middle" }}
            />
          </Button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box component="form" sx={style} onSubmit={handleSubmit}>
              <Typography id="modal-modal-title" variant="h4" component="h1">
                Editar Receita
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginTop: "15px",
                }}
              >
                <TextField
                  label="Nome da Receita"
                  variant="outlined"
                  name="recipeName"
                  defaultValue={nome.recipeName || recipe.recipeName}
                  onChange={handleChange}
                />
                <TextField
                  label="Ingredientes"
                  variant="outlined"
                  name="ingredients"
                  defaultValue={nome.ingredients}
                  rows={2}
                  multiline
                  onChange={handleChange}
                />
                <TextField
                  label="Modo de Preparo"
                  variant="outlined"
                  name="preparation"
                  rows={3}
                  multiline
                  defaultValue={nome.preparation}
                  onChange={handleChange}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <h4 style={{ marginRight: "12%" }}>Restrições</h4>
                <span>Gluten</span>
                <Checkbox
                  defaultChecked
                  name="glutenFree"
                  defaultValue={nome.glutenFree}
                  onChange={handleChange}
                />
                <span>Lactose</span>
                <Checkbox
                  defaultChecked
                  name="lactoseFree"
                  defaultValue={nome.lactoseFree}
                  onChange={handleChange}
                />
              </div>
              <div style={{ display: "flex" }}>
                <Button
                  style={{ margin: "20px" }}
                  variant="contained"
                  type="submit"
                  size={"small"}
                  color={"primary"}
                >
                  Editar
                </Button>
                <Button
                  style={{ margin: "20px" }}
                  variant="contained"
                  type="button"
                  size={"small"}
                  color={"error"}
                >
                  Excluir
                </Button>
              </div>
            </Box>
          </Modal>
        </div>
      ))}
    </div>
  );
};
