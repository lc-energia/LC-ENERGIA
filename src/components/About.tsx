import FlippableCard from './FlippableCard';
import Image from 'next/image';
import FadeIn from './motion/FadeIn';

const About = () => {
  return (
    <section className="bg-[#F6F7F8] overflow-hidden my-16 sm:my-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap">
          {/* Text Content */}
          <FadeIn direction="right" delay={0.2} className="w-full lg:w-1/2 flex items-center py-12 px-4 sm:px-6 lg:px-8">
            <div>
              <h6 className="text-[#F49918]">Eccellenza nella Riqualificazione Energetica e Progettazione Tecnologica</h6>
              <h1 className="mb-4">Perché scegliere LC Energia?</h1>
              <p className="text-gray-600 leading-relaxed">
                LC ENERGIA è una società ingegneristica composta da tecnici qualificati con esperienza trentennale nel campo della consulenza, progettazione e realizzazione impiantistica civile e industriale. <br /> <br />
                Il plus aziendale è rappresentato dalla capacità di proporre soluzioni tecnologiche all’avanguardia, mediante una progettazione integrata con la struttura architettonica e nel pieno rispetto delle normative di settore.  <br /> <br />
                Per raggiungere questi risultati, LC Energia ha sempre considerato importante e prioritario il continuo e sistematico aggiornamento dei suoi tecnici con specifici programmi di formazione. L’obiettivo principale della nostra società rimane da sempre la soddisfazione del cliente:
              </p>
              <div className="flex flex-wrap -m-2 mt-6">
                <FadeIn direction="up" delay={0.3} className="w-full sm:w-1/2 p-2">
                  <FlippableCard text="Recependo e concretizzando al meglio le sue richieste." />
                </FadeIn>
                <FadeIn direction="up" delay={0.4} className="w-full sm:w-1/2 p-2">
                  <FlippableCard text="Offrendo la nostra professionalità e disponibilità." />
                </FadeIn>
              </div>
            </div>
          </FadeIn>

          {/* Image */}
          <FadeIn direction="left" delay={0.3} className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full">
            <div className="relative w-full h-full">
              <Image src="/img/1Trabajador campo paneles solares.jpg" alt="Lavoratore in un campo di pannelli solari" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;