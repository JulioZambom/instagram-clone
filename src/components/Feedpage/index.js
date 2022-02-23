import React from "react";
import PostCard from "./PostCard/index.js";
import { MainContainer } from "./styles.js";

const state = [
  {
    id: 1,
    profilepic: "https://i.imgur.com/gLh9qCE.jpg",
    user: "arrudonimous.js",
    image: "https://i.imgur.com/gLh9qCE.jpg",
    description: "Há duas coisas infinitas: O universo e a tolice dos Homens.",
    likes: "112",
  },
  {
    id: 2,
    profilepic: "https://i.imgur.com/8jBZXvl.jpg",
    user: "guusto._",
    image: "https://i.imgur.com/8jBZXvl.jpg",
    description:
      "um amor atemporal obrigado por deixar tudo mais brilhante te amo meu sol! @meend._",
    likes: "67",
  },
  {
    id: 3,
    profilepic: "https://i.imgur.com/zWYdF86.jpg",
    user: "_jwlio",
    image: "https://i.imgur.com/zWYdF86.jpg",
    description: "já era hora",
    likes: "77",
  },
  {
    id: 4,
    profilepic: "https://i.imgur.com/tY3wY9D.png",
    user: "bznmxz",
    image: "https://i.imgur.com/tY3wY9D.png",
    description: "Acomodação é morte. Evoluir virou um vício",
    likes: "107",
  },
  {
    id: 5,
    profilepic: "https://i.imgur.com/6d8PkPO.png",
    user: "_henrique_46_",
    image: "https://i.imgur.com/6d8PkPO.png",
    description: "",
    likes: "37",
  },
  {
    id: 6,
    profilepic: "https://i.imgur.com/hkNWyN2.jpeg",
    user: "jvvab",
    image: "https://i.imgur.com/hkNWyN2.jpeg",
    description: "",
    likes: "302",
  },
  {
    id: 7,
    profilepic: "https://i.imgur.com/72JbTJm.jpg",
    user: "isa_dantasz",
    image: "https://i.imgur.com/72JbTJm.jpg",
    description: ":)",
    likes: "182",
  },
];

const Feedpage = () => {
  return (
    <MainContainer>
      {state.map((postcard, i) => (
        <PostCard key={postcard.id} postcard={postcard} />
      ))}
    </MainContainer>
  );
};

export default Feedpage;
