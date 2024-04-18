import { Input, Stack, Text } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <Stack
      w={"100%"}
      justifyContent={"space-between"}
      justifyItems={"center"}
      alignItems={"center"}
      borderRadius={"md"}
      direction={"row"}
      justify={"space-between"}
      py={2}
      px={4}
    >
      <Text color={"brand.400"} fontSize={"md"} fontWeight={"bold"}>
        Ecommerce
      </Text>

      <Input
        maxW={"200px"}
        bgColor={'brand.200'}
        fontSize={"x-small"}
        color={"white"}
        placeholder={"Type a product name..."}
        _placeholder={{ color: "rgba(255, 255, 255, 0.3)" }}
        border={"none"}
        outline={"none"}
        _focus={{ border: "none", outline: "none" }}
        focusBorderColor={'brand.400'}
        h={'30px'}
      ></Input>
    </Stack>
  );
};
