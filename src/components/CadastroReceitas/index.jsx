import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AdicionarReceitas } from "../adicionarReceitas";
import { Checkbox, TextField } from "@mui/material";
import { toast } from "sonner";

const style = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
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

  const [recipe, setRecipe] = React.useState({
    recipeName: "",
    ingredients: "",
    preparation: "",
    glutenFree: true,
    lactoseFree: true,
  });
/* 
()=>{
    const recipeOnStorage = localStorage.getItem('recipes')
    return recipeOnStorage && JSON.parse(recipeOnStorage)}

    
const [ingredients, setIngredients] = React.useState("");
  const [preparation, setPreparation] = React.useState("");
  const [glutenFree, setGlutenFree] = React.useState(true);
  const [lactoseFree, setLactoseFree] = React.useState(true); */

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      recipeName:recipe.recipeName,
      ingredients:recipe.ingredients,
      preparation:recipe.preparation,
      glutenFree:recipe.glutenFree,
      lactoseFree:recipe.lactoseFree,
    };  
    
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    storedRecipes.push(newRecipe)
console.log(storedRecipes)
    
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
    const { name, value, checked, type } = e.target;
    setRecipe((el) => ({
      ...el,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

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
        <Box component="form" sx={style} onSubmit={handleSubmit}>
          <Typography id="modal-modal-title" variant="h4" component="h1">
            Adicionar Receita
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
              value={recipe.recipeName}
              onChange={handleChange}
            />
            <TextField
              label="Ingredientes"
              variant="outlined"
              name="ingredients"
              value={recipe.ingredients}
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
              value={recipe.preparation}
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
              value={recipe.glutenFree}
              onChange={handleChange}
            />
            <span>Lactose</span>
            <Checkbox
              defaultChecked
              name="lactoseFree"
              value={recipe.lactoseFree}
              onChange={handleChange}
            />
          </div>
          <Button
            variant="contained"
            type="submit"
            size={"small"}
            color={"secondary"}
          >
            Inserir
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
