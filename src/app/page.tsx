import Experiencia from "@/components/sections/Experiencia";
import Inicio from "@/components/sections/Inicio";
import { Portfolio } from "@/components/sections/Portfolio";
import Sobre from "@/components/sections/Sobre";
import Tecnologias from "@/components/sections/Tecnologias";
import PageWrapper from "@/components/utils/PageWrapper";

export default function Home() {
  return (
    <div className="  ">
      <PageWrapper>
        <section
          id="inicio"
          className=" min-h-[90vh] lg:min-h-[auto] pt-2 relative lg:p-[2px] px-2 pb-2 flex flex-col justify-center h-[auto] lg:h-[auto] md:min-w-full md:min-h-full"
        >
          <Inicio />
        </section>
        {/* <section
          id="portfolio"
          className="  min-h-[90vh] lg:min-h-[auto] pt-28 relative px-0 pb-5 flex flex-col justify-start h-[auto] lg:h-[auto] md:min-w-full md:min-h-full mt-20"
        >
          <Portfolio />
        </section> */}
        {/* <section
          id="experiencia"
          className="min-h-[90vh] lg:min-h-[auto] pt-28 relative px-0 pb-5 flex flex-col justify-start h-[auto] lg:h-[auto] md:min-w-full md:min-h-full"
        >
          <Portfolio />
        </section>
        <section
          id="tecnologias"
          className="min-h-[90vh] lg:min-h-[auto] pt-28  relative px-0 pb-5 flex flex-col justify-start h-[auto] lg:h-[auto] md:min-w-full md:min-h-full lg:mt-0"
        >
          <Portfolio />
        </section>
        <section
          id="sobre"
          className=" min-h-[auto] lg:min-h-[auto] pt-24 relative px-0 pb-5 flex flex-col justify-start h-[auto] lg:h-[auto] md:min-w-full md:min-h-full lg:mt-0 mt-20"
        >
          <Portfolio />
        </section> */}
      </PageWrapper>
    </div>
  );
}
