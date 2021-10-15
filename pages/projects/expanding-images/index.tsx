import { useEffect } from "react";
import { NextPage } from "next";

import { Global } from "./styles";

import Head from "next/head";

const index: NextPage = () => {
  useEffect(() => {
    const images = document.querySelectorAll(".image");

    images.forEach((image) => {
      image.addEventListener("click", () => {
        removeActiveClasses();
        image.classList.add("true");
      });
    });

    function removeActiveClasses() {
      images.forEach((image) => {
        image.classList.remove("true");
      });
    }
  });

  return (
    <>
      <Head>
        <title>expanding - images</title>
      </Head>

      <Global />
      <div>
        <div
          className="image true"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
          }}
        >
          <p>Explore o mundo</p>
        </div>

        <div
          className="image"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
          }}
        >
          <p>Belas Praias</p>
        </div>

        <div
          className="image"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/3560024/pexels-photo-3560024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
          }}
        >
          <p>Cidades Calmas</p>
        </div>

        <div
          className="image"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/2901581/pexels-photo-2901581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
          }}
        >
          <p>Cidade Movimentadas</p>
        </div>

        <div
          className="image"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/355241/pexels-photo-355241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
          }}
        >
          <p>Montanhas</p>
        </div>
      </div>
    </>
  );
};

export default index;
