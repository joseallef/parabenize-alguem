'use client'

import ReactConfetti from "react-confetti";
import { useWindowSize } from "./hooks/useWindowSize";
import { Card } from "./components/Card";

export default function Home() {
  const size = useWindowSize();

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 p-6 md:p-12">
        <ReactConfetti
          width={size.width - 10}
          height={size.height - 10}
        />

        <div className="flex items-center justify-center">
          <span className="relative flex shrink-0 overflow-hidden rounded-full">
            <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
              {/* <img src="https://media.licdn.com/dms/image/D4D03AQEh-qNSzAsiJw/profile-displayphoto-shrink_100_100/0/1683594689756?e=1711584000&v=beta&t=UjCvUDM4NEAUE3cucM5CNlqkVcnYmmkmIV5rmpqKSqM"
              alt="Avatar"

            /> */}

              <img src="https://scontent-gru2-2.cdninstagram.com/v/t51.2885-19/271584834_1602793080060536_1893086025038218511_n.jpg?stp=dst-jpg_s100x100&_nc_cat=102&ccb=1-7&_nc_sid=294b3b&_nc_ohc=YNaPxdC5oyYAX_Xz_x_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-gru2-2.cdninstagram.com&oh=00_AfBh0E08QIKz96_7paFOgRCx-pTq3hgMU8OMjeFQCZFsBg&oe=65B227EC"
                alt="Avatar"
              />
            </span>
          </span>
        </div>

        <div className="flex flex-col gap-6">
          <Card>
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">Parabéns!</h3>
            </div>

            <div className="p-6 text-center">
              <p className="text-lg">
                Parabéns pelo seu dia! Que cada momento seja marcado por sorrisos e emoções positivas.
                Que este novo ano de vida traga muito sucesso, saúde e amor. 🎈🎁.
              </p>
              <p className="text-lg">
                E que hoje seja apenas o início de um ano cheio de surpresas maravilhosas, conquistas grandiosas e momentos inesquecíveis. 🎊🎂
              </p>
            </div>
          </Card>

          <Card>
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">Feliz aniversário!</h3>
            </div>

            <div className="p-6 text-center">
              <p className="text-lg">
                Que este dia especial seja repleto de alegrias, realizações e momentos incríveis.
                🎉🎂 desejo a você um ano cheio de felicidade e conquistas!
              </p>
            </div>
          </Card>
        </div>

        <div className="flex items-center justify-center">
          <span className="relative flex shrink-0 overflow-hidden rounded-full">
            <span className="flex h-48 w-48 items-center justify-center rounded-full bg-muted">
              <img src="https://www.datocms-assets.com/45981/1705867193-out-0-1.png?auto=format&w=283.75"
                alt="Avatar"
              />
            </span>
          </span>
        </div>

      </div>
      <footer className="border w-full rounded-full">
        <div className="text-cyan-900 flex justify-center items-center">
          <p className="py-3">
            Desenvolvido por
          </p>
          <a href="https://github.com/joseallef" target="_blanck" className="text-cyan-900 flex justify-center items-center">
            <p className="px-1">
              @joseallef
            </p>
            <div className="bg-black rounded-full">
              <img src="https://jose-allef.vercel.app/image/githubIcon.svg" alt="Github" width="30" />
            </div>
          </a>
        </div>
      </footer>
    </main>
  );
}
