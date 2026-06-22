import calliopePhoto from "../assets/calliopePhoto.jpeg";
import decodedPhoto from "../assets/decodedPhoto.jpg";

export default function Bands() {
  return (
    <section id="bands" className="bg-black text-white px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <p className="text-pink-400 uppercase tracking-[0.45em] text-xs font-semibold">
          Live Performance
        </p>

        <h2 className="mt-4 text-4xl md:text-6xl font-black tracking-tight">
          Bands, Performances & Community
        </h2>

        <p className="mt-6 text-zinc-400 max-w-2xl">
          Performing with projects including DECODED and Calliope Wren, creating
          memorable live experiences and connecting with audiences across Long
          Island.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          <div>
            <img
              src={decodedPhoto}
              alt="Decoded crowd photo"
              className="w-full rounded-xl"
            />

            <h3 className="mt-5 text-2xl font-black">DECODED</h3>

            <p className="mt-3 text-zinc-400">
              Pop-punk and rock performances featuring energetic live shows and
              audience engagement.
            </p>
          </div>

          <div>
            <img
              src={calliopePhoto}
              alt="Calliope Wren band photo"
              className="w-full rounded-xl"
            />

            <h3 className="mt-5 text-2xl font-black">Calliope Wren</h3>

            <p className="mt-3 text-zinc-400">
              Original music collaboration combining modern rock influences with
              theatrical live performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
