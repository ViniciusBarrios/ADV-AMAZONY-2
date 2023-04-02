import { Montserrat } from "@next/font/google";

import {
  Container,
  Title,
  Description,
  Informations,
  By,
  Date,
  Icons,
  FacebookIcon,
  TwitteIcon,
  WhatsappIcon,
  TelegramIcon,
  LinkedinIcon,
  ShareIcon,
} from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

export default () => (
  <Container>
    <Title className={montserrat.className}>
      O novo e incrível “creme” usado por modelos e celebridades do Brasil,
      permite que você pareça anos mais jovem!
    </Title>

    <Description className={montserrat.className}>
      Você gostaria de parecer tão jovem quanto você se sente?
    </Description>

    <Informations>
      <div>
        <By className={montserrat.className}>Por Bem Estar</By>

        <Date className={montserrat.className}>
          26/03/2023 12h44
          <span />
          Atualizado há 20 minutos
        </Date>
      </div>

      <Icons>
        <FacebookIcon />
        <TwitteIcon />
        <WhatsappIcon />
        <TelegramIcon />
        <LinkedinIcon />
        <ShareIcon />
      </Icons>
    </Informations>
  </Container>
);
