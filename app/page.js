import Overons from "@/components/Overons";
import Image from "next/image";
import wandelaars2 from "../public/images/wandelaars2.png"
import Totop from "@/components/Totop";
export default function Home() {
  return (
    <>
      <section className="hero w-full h-[735px] flex flex-row items-start justify-between relative">
        <div className="w-full flex flex-col pt-32 px-20">
          <span className="font-bold text-4xl blue_gradient tracking-[3px] pt-8">
            LEERHUIS AMSTERDAM
          </span>
          <span className="header_subtext font-bold text-2xl mt-2 tracking-[9px] blue_gradient pb-6">
            voor zinvol samenleven
          </span>
        </div>

        <div className="w-1/2 h-full absolute bg-gradient-to-l from-white to-transparent right-0"></div>

        <div
          className="w-[500px] flex flex-col items-center max-md:flex-col absolute right-20 top-[165px] rounded-lg
        bg-gradient-to-b from-[#cad1cc] to-[#a7b0a9] pt-8 pb-10 shadow-md border-t border-white max-herotext:hidden"
        >
          <span className="w-80 text-2xl text-green-950 flex justify-center font-semibold border-b border-green-950 pb-2">
            Over het Leerhuis
          </span>
          <div className="w-full flex flex-row justify-center max-md:flex-col">
            <div className="w-full p-8 text-green-950 flex flex-col leading-8 text-lg">
              Leerhuis Amsterdam richt zich op zinvol samen leven in een
              complexe wereld die ons voor veel vragen stelt.
              <br /> Vanuit de Bijbel en andere bronnen voor oriëntatie en de
              hedendaagse wereld van kunst en cultuur zoeken wij hierover het
              gesprek.
              <br /> We organiseren daarom bijeenkomsten, dialogen en cursussen,
              in de Muiderkerk, waarin deze werelden elkaar ontmoeten.
            </div>
          </div>

          <Image src={wandelaars2} width={280} height={100} />
        </div>
      </section>

      {/* <div className="w-full h-[40px] bg-[#cad1cc]"></div> */}

      <div className="w-full h-[700px] flex flex-row max-hamburger:flex-col">
        <div className="w-1/2 h-[700px] bg-[url('../public/images/overonsbg.png')] bg-no-repeat p-20 text-red-800 max-hamburger:w-full">
          <span className="w-full flex justify-center text-2xl font-semibold">Lorem Ipsum, where does it come from? </span>
          <br />
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. <br />Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.<br />Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. <br />This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </div>
        <div className="w-1/2 h-[700px] bg-black/90 bg-[url('../public/images/overonsbg.png')] bg-no-repeat bg-right max-hamburger:w-full">
          2
        </div>
      </div>

      <div className="w-full h-[700px] bg-[#cad1cc] text-white text-4xl flex items-center justify-center"></div>

      <Overons />

      <div className="w-full h-[700px] bg-[url('../public/images/muiderkerk3.jpg')] bg-center"></div>
      <div
        id="agenda"
        className="w-full h-[700px] bg-white text-green-950/40 text-4xl flex items-center justify-center"
      >
        Activiteiten
      </div>
      <div
        id="contact"
        className="w-full h-[700px] bg-green-950/30 text-white text-4xl flex items-center justify-center"
      >
        contact
      </div>
      <div className="w-full h-[700px] bg-black text-white text-4xl flex items-center justify-center bg-[url('../public/images/overonsbg.png')]">
        Footer
      </div>

      <Totop />
    </>
  );
}