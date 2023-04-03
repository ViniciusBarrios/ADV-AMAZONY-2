import { Montserrat } from "@next/font/google";

import Comments from "./components/Comments";
import Header from "./components/Header";
import Picture from "./components/Picture";
import { Container, Wrapper, Text, Title } from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

export default () => (
  <Container>
    <Header />

    <Wrapper>
      <Text className={montserrat.className}>
        O creme mais usado pelas modelos e celebridades do Brasil está sendo
        muito comentado nos últimos meses, utiliza ingrediente pouco conhecido
        chamado “Rosa Mosqueta”.
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Em 26 de fevereiro de 2023 foi aprovado pela Agência Nacional de
        Vigilância Sanitária (Anvisa) a comercialização do Óleo Rosa Mosqueta.
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        A Fabricante Amazony (Empresa de cosméticos Francesa) com reconhecimento
        Mundial em tecnologia, líder no seguimento de cosméticos europeu, com
        excelência de manipulação e ativos selecionados, está comercializando no
        Brasil o que é de maior eficácia para a epiderme e aderme, trazendo
        firmeza e elasticidade a sua pele, reduzindo aparência de rugas,
        manchas, pé de galinha e bigode chinês também ajuda no combate de
        estrias e foliculite.
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        O sérum “Rosa Amazônica” contém uma incrível fórmula que junta 4
        poderosos ingredientes para o rejuvenescimento da pele que são eles:
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        <strong>Rosa Mosqueta:</strong>
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        A Rosa Mosqueta contém um poderoso componente capaz de inativar uma
        proteína que promove o envelhecimento que seria uma das responsáveis
        pelas rugas na pele, estimulando a produção de novas células do zero,
        deixando a pele jovem, uniforme e sem manchas.
      </Text>

      <Picture
        image="/assets/imgs/rosa-mosqueta.jpg"
        description="Óleo da Rosa Mosqueta. (Foto: Reprodução/Murilo Serra G1)"
        marginTop="30px"
      />

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Comprovou-se que combate rugas sem nenhum efeito colateral. Com
        garantias e comprovações científicas, também tendo sua eficácia
        comprovada pela FDA (Departamento de saúde e serviços humanos dos
        Estados Unidos).
      </Text>

      <Picture
        image="/assets/imgs/fda.jpg"
        description="Centro de pesquisas do FDA, agência federal do departamento de saúde e serviços humanos dos Estados Unidos. (Foto: Reprodução/Murilo Serra G1)"
        marginTop="30px"
      />

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        A Rosa Mosqueta, ajuda a manter a sustentação e a hidratação da pele,
        evitando a flacidez, as linhas e sinais de expressão, preenchendo e
        mantendo a pele hidratada, viva e revitalizada.
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Por ser um componente natural, essa substância é totalmente absorvida
        pelas camadas da pele. Pesquisa feita com 345 pacientes utilizando o
        sérum junto a Rosa Mosqueta, mostrou que as células durante 3 meses de
        uso do creme rejuvenesceram e reidrataram.
      </Text>

      <Picture
        marginTop="30px"
        image="/assets/imgs/laboratório.jpg"
        description="Laboratório Europeu especializado em combate a rugas, no centro de pesquisas Amazony. (Foto: Reprodução/Murilo Serra G1)"
      />

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        O óleo Rosa Mosqueta inclui componentes vitais, como vitamina A, C, E,
        complexo B e minerais como ferro, cálcio, manganês, selênio, fósforo,
        magnésio, silício, enxofre e zinco. Além disso, contém compostos
        orgânicos como pectina, licopeno e beta-caroteno essenciais para a pele.
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Vitamina C promove a produção de colágeno e reduz a aparência de linhas
        finas e rugas.
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Vitamina A aumenta o teor de umidade da pele.
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        O óleo também ajuda a neutralizar os danos UV causados ​​pelo sol. Os
        antioxidantes ajudam a promover o tom e a textura uniforme da pele e
        também tratam a pigmentação (manchas na pele). Este óleo possui ácidos
        graxos essenciais que previnem cicatrizes e promovem a regeneração da
        pele. O óleo de Rosa Mosqueta consegue regenerar novas células da pele e
        também é útil no tratamento de queimaduras, acne e cicatrizes. Ela
        reidrata a pele e mantém a umidade.
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        <strong>Ácido Hialurônico:</strong>
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        O Ácido Hialurônico é uma substância natural produzida pelo nosso corpo,
        famoso por manter a hidratação e firmeza da pele. Mas, à medida que
        envelhecemos, essa produção diminui, reduzindo também a hidratação e
        elasticidade da pele.
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        <strong>Colágeno Verisol:</strong>
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        O colágeno é muito importante para manter as células firmes e unidas,
        sendo não só importante para a pele, mas também para outros tecidos;
        como para a integridade dos músculos, dos ligamentos, dos tendões e das
        articulações. Além disso, hidrata o cabelo e estimula o crescimento de
        novos fios.
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        <strong>Retinol:</strong>
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Estimula a renovação celular e a síntese de colágeno no rosto.
      </Text>

      <Title css={{ marginTop: "30px" }} className={montserrat.className}>
        Utilizado por modelos e celebridades do Brasil:
      </Title>

      <Picture
        image="/assets/imgs/virginia.png"
        description="Virgínia Fonseca é uma youtuber e influenciadora."
        marginTop="30px"
      />

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Virgínia Fonseca, influencer e celebridade que elogiou os efeitos do
        sérum “Rosa Amazônica” em sua pele, diz - “Eu amei a Rosa Amazônica, dez
        que comecei a usar minha pele anda mais hidratada e com aspecto mais
        vivo, para resumir em uma palavra Amei!”
      </Text>

      <Picture
        image="/assets/imgs/gisele.png"
        description="Gisele Caroline Bündchen é uma supermodelo, filantropa, ativista ambiental e empresária brasileira."
        marginTop="30px"
      />

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Até mesmo a modelo Gisele Bündchen indicou o uso do sérum Rosa
        Amazônica, ela diz que sempre utilizou os cremes da empresa Amazony e
        quando viajava para Europa não esquecia de comprar um kit da empresa
        Amazony.
      </Text>

      <Title css={{ marginTop: "30px" }} className={montserrat.className}>
        Resultados surpreendentes:
      </Title>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Muitas mulheres amaram o sérum Rosa Amazônica pelo motivo dele deixar a
        pele 10 anos mais nova com apenas 3 meses de uso, são pessoas comuns que
        testaram e aprovaram os efeitos em sua pele:
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        A senhora Maria de 63 anos de São Paulo vinha usando o sérum “Rosa
        Amazônica” há 4 meses e percebeu resultados impressionantes em sua pele.
      </Text>

      <Picture
        image="/assets/imgs/before-after1.png"
        description="Maria de 63 anos de São Paulo"
        marginTop="30px"
      />

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Diz ela - “Acho que foi o melhor investimento que fiz, me sinto feliz e
        com a auto estima lá em cima!”
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Lia de 36 anos do Rio Grande do Sul usou o sérum Rosa Amazônica e depois
        de 3 meses de uso as rugas ao lado dos seus olhos que a incomodava
        muito, melhoraram.
      </Text>

      <Picture
        image="/assets/imgs/before-after2.png"
        description="Lia de 36 anos do Rio Grande do Sul"
        marginTop="30px"
      />

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Diz ela - “Vinha me incomodando com as marcas ao redor dos meus olhos,
        tentei usar cremes de várias marcas, mas o único creme que realmente
        percebi resultados foi o sérum da Rosa Amazônica”
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Melissa de 27 anos de Pernambuco vinha se incomodando com as marcas do
        bigode chines em sua pele, depois de 1 meses e meio de uso da Rosa
        Amazônica, o bigode chines que lhe incomodava diminuiu.
      </Text>

      <Picture
        image="/assets/imgs/before-after3.png"
        description="Melissa de 27 anos de Pernambuco"
        marginTop="30px"
      />

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Diz ela - “Comecei a perceber o bigode chines aparecer em meu rosto,
        fiquei preocupada porque as marcas do envelhecimento começaram a
        aparecer na minha pele, mas quando comecei a usar a Rosa Amazônica, o
        bigode chines diminuiu quase que completamente!”
      </Text>

      <Title css={{ marginTop: "30px" }} className={montserrat.className}>
        Indicado por especialistas:
      </Title>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Dr. Daphné Thioly-Bensoussan, médica da Amazony eleita uma das 100
        melhores cirurgiães plásticas do mundo pela Academia Internacional de
        Cirurgia Plástica.
      </Text>

      <Picture
        image="/assets/imgs/médica.jpg"
        description="Médica Daphné Thioly-Bensoussan. (Foto: Anti Age Magazine)"
        marginTop="30px"
      />

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Diz - “Eu me recuso a arriscar minha reputação em produtos ou terapias
        que não funcionam. Aqui, está um creme tópico que pode ajudar a atrasar
        seu relógio de envelhecimento, ajudando você a produzir células jovens
        da pele como você fazia na adolescência e na casa dos 20 anos. Isso é
        ciência antienvelhecimento, e ajudamos mulheres a recuperarem sua
        confiança e auto estima.” - Dr. Daphné Thioly-Bensoussan cirurgiã e
        dermatologista certificada
      </Text>

      <Title css={{ marginTop: "30px" }} className={montserrat.className}>
        Os médicos concordam:
      </Title>

      <Picture
        image="/assets/imgs/médico.jpg"
        description="Médico Dermatologista certificado pelo Conselho de M.D."
        marginTop="30px"
      />

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Dr. Dave D. Hayes, diz - “O segredo não está em uma seringa, está dentro
        de você! O creme Rosa Amazônica apenas reidrata as células velhas de sua
        pele, fazendo elas ficarem jovens novamente, por isso os efeitos são tão
        surpreendentes.” - Dermatologista certificado pelo Conselho de M.D.
      </Text>

      <Title css={{ marginTop: "30px" }} className={montserrat.className}>
        Existem contraindicações ou efeitos colaterais?
      </Title>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Segundo o fabricante, o sérum Rosa Amazônica é um produto que passou
        pelos mais rigorosos testes de qualidade e não apresenta contraindicação
        ou efeito colateral. Isso significa que mesmo pessoas portadoras de
        doenças crônicas podem usar o produto. Mas é aconselhável a grávidas e
        mulheres amamentando que consultem o médico antes do início do
        tratamento.
      </Text>

      <Title css={{ marginTop: "30px" }} className={montserrat.className}>
        Qual a forma correta de uso?
      </Title>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Para resultados satisfatórios, é recomendado aplicar 3 gotas do produto
        1x ao dia na pele do rosto após sair do banho, ou antes de dormir. Cada
        dose tem quantidade suficiente para garantir um intenso efeito do
        produto nas camadas da pele por 18 até 24 horas.
      </Text>

      <Title css={{ marginTop: "30px" }} className={montserrat.className}>
        Onde comprar?
      </Title>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        No Brasil, assim como na Europa e Estados Unidos pós-pandemia, o Rosa
        Amazônica trabalhará apenas com o sistema de vendas online, onde o
        cliente poderá adquirir pelo site oficial e receber no conforto da sua
        casa. CUIDADO: A marca Amazony não vende pelo Mercado Livre, OLX, ou
        outros sites. Certifique-se estar comprando o produto ORIGINAL, por
        isso, sempre adquira do{" "}
        <a href={process.env.NEXT_PUBLIC_SALE_PAGE_URL}>Site Oficial.</a>
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Conseguimos uma oportunidade especial para nossos leitores, durante a
        produção dessa reportagem, o fabricante entrou em contato com nossa
        produção e ofereceu um desconto especial de até 70% e a condição de
        parcelamento em até 12x no cartão de crédito para nossos leitores
        interessados em experimentar o sérum Rosa Amazônica, a Amazony também
        oferece uma garantia de 90 dias isso é, se você adquirir o sérum Rosa
        Amazônica e não gostar dos resultados, dentro de 90 dias poderá pedir
        seu dinheiro de volta.
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        <strong>Atenção:</strong> O desconto é válido apenas enquanto durarem os
        estoques, sendo aplicado automaticamente ao clicar na imagem abaixo.
      </Text>

      <a href={process.env.NEXT_PUBLIC_SALE_PAGE_URL}>
        <Picture
          image="/assets/imgs/produto.png"
          marginTop="30px"
          description="Últimas 14 unidades com desconto de até 70% e a condição de parcelamento em até 12x no cartão de crédito"
        />
      </a>
    </Wrapper>

    <Comments />
  </Container>
);
