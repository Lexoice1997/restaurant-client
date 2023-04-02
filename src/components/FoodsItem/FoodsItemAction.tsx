import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  IconButton,
  Popper,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { useRemoveFoodMutation } from "../../store/services/apiService";

interface FoodsItemAction {
  id: string;
  setEdit?: () => void;
}

const FoodsItemAction = ({ id, setEdit }: FoodsItemAction) => {
  const [removeFood, { error: createError }] = useRemoveFoodMutation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openPopper = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const onHandleRemoveFood = () => {
    removeFood(id);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box>
        <Tooltip title="Удалить">
          <IconButton aria-label="delete" onClick={handleClick}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Popper
          id={id}
          open={openPopper}
          anchorEl={anchorEl}
          placement="top"
          sx={{ zIndex: 2 }}
        >
          <Box sx={{ border: 1, p: 1, bgcolor: "white" }}>
            <Typography>Вы точно хотите удалить?</Typography>
            <Box sx={{ marginTop: 2 }}>
              <Button
                onClick={onHandleRemoveFood}
                variant="contained"
                color="error"
                sx={{ marginRight: 2 }}
                size="small"
              >
                Да
              </Button>
              <Button
                onClick={handleClick}
                variant="contained"
                color="success"
                size="small"
              >
                Нет
              </Button>
            </Box>
          </Box>
        </Popper>
      </Box>

      <Tooltip title="Изменить">
        <IconButton aria-label="edit" onClick={setEdit}>
          <EditIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default FoodsItemAction;
