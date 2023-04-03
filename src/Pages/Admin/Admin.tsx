import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import AdminCategory from "../../components/AdminCategory/AdminCategory";
import AdminItem from "../../components/AdminItem/AdminItem";
import CategoryModal from "../../components/CategoryModal/CategoryModal";
import ChangePasswordModal from "../../components/ChangePasswordModal/ChangePasswordModal";
import FoodModal from "../../components/FoodModal/FoodModal";
import { useAppDispatch, useAppSelector } from "../../helpers/hooks/redux";
import { useGetAllCategoriesWithFoodsQuery } from "../../store/services/apiService";
import { check, setAuthModal } from "../../store/slices/authSlice";
import { Category } from "../../types/Category";
import "./Admin.css";

const notifyFood = () => toast("Блюдо не загрузился");

const notifyCategory = () => toast("Категория не загрузился");

const Admin = () => {
  const dispatch = useAppDispatch();
  const { data: categories } = useGetAllCategoriesWithFoodsQuery(null);
  const { name, phone, token } = useAppSelector((state) => state.auth);

  const handleOpenModalAuth = () => {
    dispatch(setAuthModal(true));
  };

  useEffect(() => {
    dispatch(check(token));
  }, [dispatch, token]);

  return (
    <div className="admin">
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <NavLink to={"/"} className="admin-navlink">
          <Typography variant="h3" sx={{ textDecoration: "", color: "black" }}>
            Logo
          </Typography>
        </NavLink>
        <Box sx={{ marginRight: 5, marginLeft: 5 }}>
          <Typography variant="h6">Телефон</Typography>
          <Typography>{phone}</Typography>
        </Box>
        <Box sx={{ marginRight: 5 }}>
          <Typography variant="h6">Имя</Typography>
          <Typography>{name}</Typography>
        </Box>
        <Button onClick={handleOpenModalAuth} variant="contained">
          Изменить пароль
        </Button>
      </Box>

      {categories?.map((item: Category) => (
        <AdminItem category={item} key={item.id} />
      ))}
      <AdminCategory />
      <ChangePasswordModal />
      <FoodModal notify={notifyFood} />
      <CategoryModal notify={notifyCategory} />
    </div>
  );
};

export default Admin;
