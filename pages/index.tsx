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
            <Flex center className="p-12 " column>
              <div>
                <h1 className="text-4xl md:text-7xl pb-2">
                  <strong className="font-bold">Kervin</strong> Vasquez
                </h1>
                <h2 className="text-2xl">Fullstack Web Developer</h2>
              </div>
            </Flex>
            <Flex center className="relative">
              <MeSvg className="static md:absolute md:bottom-0" />
            </Flex>
          </Grid>
        </Section>
      </main>

      <footer className="w-full p-2 text-center">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
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
