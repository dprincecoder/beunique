import { AddProductApi, GetProductCategoriesApi } from "../../axios/apis/admin";
import { dispatch } from "../../store";
import { setCategories } from "./adminSlice";

const AddProduct = (data) => async () => {
  try {
    const res = await AddProductApi(data);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

const GetCategories = () => async () => {
  try {
    const res = await GetProductCategoriesApi();
    console.log(res.data.detail);
    dispatch(setCategories(res.data.detail));
  } catch (error) {
    console.log(error);
  }
};

export { AddProduct, GetCategories };
