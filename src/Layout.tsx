import { Stack } from "@chakra-ui/react";
import { Navbar } from "./components";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Stack w={"100%"} minH={"100vh"} bgColor={"brand.100"}>
      <Stack maxW={"1200px"} h={'100%'} px={6} py={2}>
        <Navbar/>
        {children}
      </Stack>
    </Stack>
  );
};
