import Reveal from "./Reveal";
import aboutPhoto from "../assets/jaclyn.jpg";

export default function About() {
  return (
    <section id="about" className="py-28 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-13 items-center">
            <img
              src={aboutPhoto}
              alt="Jaclyn Rose"
              className="w-full h-[440px] object-cover rounded-[18px]"
            />
            <div>
              <p className="text-[0.68rem] font-semibold tracking-[0.36em] uppercase text-[#b75fd0]">
                About
              </p>
              <h2 className="font-semibold uppercase tracking-[0.02em] leading-[1.18] mt-4 text-[clamp(1.6rem,3.2vw,2.2rem)]">
                Guitarist, performer, and content creator.
              </h2>
              <p className="text-[#b6b6c2] leading-[1.9] mt-5 text-[1.02rem]">
                I'm Jaclyn Rose, a guitarist creating rock, metal, pop-punk, and
                acoustic guitar content for a growing audience across social
                media.
              </p>
              <p className="text-[#8f8f9c] leading-[1.9] mt-4 text-[1.02rem]">
                When I'm not performing live or creating guitar covers, I teach
                one-on-one guitar lessons and collaborate with brands and fellow
                musicians.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
