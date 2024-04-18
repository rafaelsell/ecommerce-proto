import { Stack, Text, Tab, Tabs, TabList } from "@chakra-ui/react";
import { useProducts, useCategories } from "../services/api/queries";
import { ProductCard } from "../components/ProductCard";
import { useState, useEffect } from "react";
import { Product } from "../types/ProductType";

export const HomePage = () => {

    const [categoryIndex, setCategoryIndex] = useState(0);

    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const {
    data: productData,
    error: productError,
    isLoading: productIsLoading,
  } = useProducts();
  const {
    data: categoriesData,
    error: categoriesError,
    isLoading: categoriesIsLoading,
  } = useCategories();

  useEffect(() => {
    if(categoryIndex === 0){
        setFilteredProducts(productData ?? []);
    } else if(categoryIndex > 0){
        const filtered = productData?.filter((product) => product.category.id === categoryIndex);
        setFilteredProducts(filtered ?? []);
    }
}, [categoryIndex, productData]);

  return (
    <Stack w={"100%"} dir={"column"}>
      <Stack direction={"row"} wrap={"wrap"}>
        {categoriesIsLoading && <Text>loading...</Text>}
        {categoriesError && <Text>Something went wrong</Text>}
        <Tabs onChange={(index) => setCategoryIndex(index)} variant='soft-rounded'>
          <TabList>
            <Tab color={'white'} key={'all'} _selected={{bgColor: 'brand.400', color:'brand.100'}}>All</Tab>
            {categoriesData?.map((category) => {
              return <Tab color={'white'} _selected={{bgColor: 'brand.400', color:'brand.100'}} key={category.id}>{category.name}</Tab>;
            })}
          </TabList>
        </Tabs>
      </Stack>
      {productIsLoading && <Text>loading...</Text>}
      {productError && <Text>Something went wrong</Text>}
      <Stack
        w={"100%"}
        justify={"center"}
        minH={"100%"}
        direction={"row"}
        wrap={"wrap"}
        gap={4}
        align={"center"}
      >
        {filteredProducts?.map((product) => {
          return <ProductCard product={product} />;
        })}
      </Stack>
    </Stack>
  );
};
