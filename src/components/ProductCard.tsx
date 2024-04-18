import { AspectRatio, Stack, Text, Image, Button } from "@chakra-ui/react";
import { Product } from "../types/ProductType";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Stack
      bgColor={"brand.200"}
      maxW={"250px"}
      h={"370px"}
      px={2}
      py={4}
      borderRadius={"lg"}
      justify={"space-between"}
    >
      {product.images ? (
        <AspectRatio ratio={1} h={"100px"}>
          <Image src={product.images[1]} />
        </AspectRatio>
      ) : null}

      <Text
        lineHeight={1}
        fontWeight={"bold"}
        fontSize={"sm"}
        color={"white"}
        noOfLines={2}
      >
        {product.title}
      </Text>

      <Text
        lineHeight={1}
        fontWeight={"light"}
        fontSize={"sm"}
        color={"brand.400"}
      >
        {product.category.name}
      </Text>
      <Text
        fontWeight={"light"}
        fontSize={"x-small"}
        color={"white"}
        noOfLines={3}
      >
        {product.description}
      </Text>
      <Text
        lineHeight={1}
        textDecor={"line-through"}
        textAlign={"right"}
        fontWeight={"bold"}
        fontSize={"12px"}
        color={"grey"}
      >
        R$ {product.price - product.price * 0.1}
      </Text>
      <Text
        lineHeight={1}
        textAlign={"right"}
        fontWeight={"bold"}
        fontSize={"lg"}
        color={"white"}
      >
        R$ {product.price},00
      </Text>
      <Text
        lineHeight={1}
        textAlign={"right"}
        fontWeight={"bold"}
        fontSize={"12px"}
        color={"grey"}
      >
        a vista no pix
      </Text>
      <Button
        size={"sm"}
        bgColor={"brand.400"}
        _hover={{ bgColor: "brand.500" }}
      >
        Comprar
      </Button>
    </Stack>
  );
};
