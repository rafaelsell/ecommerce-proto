import { Product } from '../../types/ProductType';
import { useQuery } from '@tanstack/react-query';

import axios from 'axios';
import { Category } from '../../types/CategorieType';

const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get("https://api.escuelajs.co/api/v1/products");
  return data;
};


export const useProducts = () => {
  return useQuery({ queryKey: ['products'], queryFn: fetchProducts })
}

const fetchCategories = async (): Promise<Category[]> => {
    const { data } = await axios.get("https://api.escuelajs.co/api/v1/categories");
    return data;
  };
  
  
  export const useCategories = () => {
    return useQuery({ queryKey: ['categories'], queryFn: fetchCategories })
  }


