import TopBar from "../../components/TopBar"
import Cards from "../../components/Cards"

export default function Home() {
   const cards = [
    {
     title: "Rock Paper Scissor", imageSrc: "/rpc.png" },
  ];
    return (
        <>
        <TopBar /> 
        <Cards items={cards} />
    </>
    )
}
