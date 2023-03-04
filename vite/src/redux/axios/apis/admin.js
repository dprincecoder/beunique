import api from "../axios";

const AddProductApi = (data) => {
  return api.post("/admin/add_product", data);
};

const GetProductCategoriesApi = () => {
  return api.get("/admin/all_categories");
};

export { AddProductApi, GetProductCategoriesApi };
