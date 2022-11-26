export const BASE_URL = process.env.REACT_APP_BASE_URL;

export const AUTH_URLS = {
  LOGIN_URL: `${BASE_URL}auth/login`,
  LOGOUT_URL: `${BASE_URL}auth/logout`,
};

export const PRODUCTS_URLS = {
  PRODUCTS_CATEGORY_URL: `${BASE_URL}products/categories`,
  CATEGORY_URL: `${BASE_URL}products/category`,
};
