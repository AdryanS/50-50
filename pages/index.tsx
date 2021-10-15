import { useMemo, useState } from "react";
import type { NextPage } from "next";

import Link from "next/link";
import Head from "next/head";

import {
  Background,
  Container,
  ContainerProjects,
  TextLarge,
  TextSmall,
  Pesquisa,
  StyledProjects,
  StyledContainer,
} from "../src/components/styleIndex";

import array from "../src/components/projectsComponets/projects/projects.json";

const Home: NextPage = () => {
  const [busca, setBusca] = useState("");

  const lowerBusca = busca.toLowerCase();

  const arrFiltrado = array.filter((arr) => arr.name.toLowerCase().startsWith(lowerBusca));
  return (
    <>
      <Head>
        <title>Projeto - 50/50</title>
      </Head>

      <Background>
        <Container>
          <TextLarge>Projeto - 50/50</TextLarge>
          <TextSmall>
            Esse Projeto Foi Inspirado No Repositorio Chamado{" "}
            <Link href="https://github.com/bradtraversy/50projects50days">
              50projects50days
            </Link>
          </TextSmall>

          <form action="">
            <Pesquisa
              type="text"
              placeholder="faça uma pesquisa"
              onChange={(ev) => {
                setBusca(ev.target.value);
              }}
              value={busca}
            />
          </form>

          <ContainerProjects>
            {arrFiltrado.map((e) => (
              <StyledProjects key={e.id}>
                <StyledContainer>
                  <p>Project - {e.id}</p>
                  <Link href={e.link}>{e.name}</Link>
                </StyledContainer>
              </StyledProjects>
            ))}
          </ContainerProjects>
        </Container>
      </Background>
    </>
  );
};

export default Home;
