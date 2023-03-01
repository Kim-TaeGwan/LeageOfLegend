import React, {FC, ReactNode} from "react";
import Header from "./Header";
import { Container, Wrap } from "./styles";
import { useRouter } from "next/router";

interface Props {
    children:ReactNode
}
const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();
  return (
    <Wrap className={`${router.pathname == "/" ? "main" : ""}`}>
      <Header />
      <Container>{children}</Container>
    </Wrap>
  );
};

export default Layout;
