import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface FoodState {
  foods: any;
  modal: boolean;
  edit: boolean;
  foodId: string;
}

const initialState: FoodState = {
  foods: null,
  modal: false,
  edit: false,
  foodId: "",
};

export const searchFoods = createAsyncThunk(
  "foods/searchFoods",
  async (name: string, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:5000/foods/search`, {
        params: { name: name },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить блюды");
    }
  }
);

export const getFoods = createAsyncThunk(
  "foods/getFoods",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:5000/foods");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить блюды");
    }
  }
);

export const foodSlice = createSlice({
  name: "food",
  initialState: initialState,
  reducers: {
    setFoods: (state, action: PayloadAction<any>) => {
      state.foods = action.payload;
    },
    setModalFood: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload;
    },
    setEditFood: (state, action: PayloadAction<boolean>) => {
      state.edit = action.payload;
    },
    setIdFood: (state, action: PayloadAction<string>) => {
      state.foodId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      searchFoods.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.foods = action.payload;
      }
    );
  },
});

export const { setModalFood, setEditFood, setIdFood, setFoods } =
  foodSlice.actions;

export default foodSlice.reducer;
