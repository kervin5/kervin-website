import Section from "@/components/layout/Section";
import Grid from "@/components/layout/Grid";
import Flex from "@/components/layout/Flex";
import MeSvg from "@/components/svg/MeSvg";

export default function Home() {
  return (
    <div>
      <main>
        <Section fullHeight>
          <Grid>
            <Flex center className="pt-20 md:p-12 " column>
              <div>
                <h1 className="text-4xl md:text-7xl pb-2">
                  <strong className="font-extrabold">Kervin</strong> Vasquez
                </h1>
                <h2 className="text-2xl">Fullstack Web Developer</h2>
              </div>
            </Flex>
            <Flex center className="relative">
              <MeSvg className="static md:absolute md:-bottom-4" />
            </Flex>
          </Grid>
        </Section>
        <Section className="p-12 bg-black text-white" fullHeight id="contacto">
          <Flex center column className="h-full">
            <h1 className="text-4xl md:text-7xl pb-5 font-extrabold">
              Contacto
            </h1>
            <p className="text-lg max-w-3xl pb-5">
              No dudes en escribirme si necesitas información acerca el
              desarrollo de un <strong>sitio</strong> o{" "}
              <strong>aplicaión</strong> web, o si simplemente tienes alguna
              duda o sugerencia sobre alguno de los articulos de mi blog.
            </p>
            <a className="text-4xl" href="mailto:contact@kervin.tech">
              contact@kervin.tech
            </a>
          </Flex>
        </Section>
      </main>

      <footer className="w-full p-2 text-center">
        <a
          href="https://github.com/kervin5"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by{" "}
          <span>
            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
            <strong className="font-bold">Kervin</strong>
          </span>
        </a>
      </footer>
    </div>
  );
}
