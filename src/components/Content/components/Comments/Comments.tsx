import { Montserrat } from "@next/font/google";

import CommentsData from "@data/comments.json";

import Comment from "./components/Comment";
import Header from "./components/Header";
import { Container, Warning } from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

export default () => {
  return (
    <Container>
      <Header />

      {CommentsData.map(({ id, name, avatar, mensage, createdAt }) => (
        <Comment
          key={id}
          name={name}
          avatar={avatar}
          mensage={mensage}
          createdAt={createdAt}
        />
      ))}

      <Warning className={montserrat.className}>
        <p>Cadastre-se no site para fazer seu comentário</p>
      </Warning>
    </Container>
  );
};
