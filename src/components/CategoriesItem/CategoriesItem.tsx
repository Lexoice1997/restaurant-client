import { useAppDispatch } from "../../helpers/hooks/redux";
import { setCategoryId, setCategoryName } from "../../store/slices/categorySlice";
import { Category } from "../../types/Category";

const CategoriesItem = ({ id, name, categoryActiveId }: Category) => {
  const dispatch = useAppDispatch();

  const handleSetCategoryId = () => {
    dispatch(setCategoryId(id));
    dispatch(setCategoryName(name));
  };
  return (
    <div
      className={categoryActiveId === id ? "category category-active" : "category"}
      onClick={handleSetCategoryId}
    >
      {name}
    </div>
  );
};

export default CategoriesItem;
