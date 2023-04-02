import { Button } from "@mui/material";
import { useAppDispatch } from "../../helpers/hooks/redux";
import { setModalCategory } from "../../store/slices/categorySlice";

const AdminCategory = () => {
  const dispatch = useAppDispatch();
  const handleOpen = () => dispatch(setModalCategory(true));

  return (
    <>
      <Button variant="contained" size="large" onClick={handleOpen}>
        Добавить категорию
      </Button>
    </>
  );
};

export default AdminCategory;
