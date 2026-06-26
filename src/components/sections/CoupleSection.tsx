"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CoupleSection() {
  return (
    <section className="relative py-8 sm:py-10 px-4 overflow-hidden">
      {/* Background */}

      <div className="absolute inset-0 opacity-20">
        <Image
          src="/assets/g-welcome-bg.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="
          relative
          z-10
          max-w-5xl
          mx-auto
          glass-card
          rounded-[32px]
          p-8
          md:p-12
          text-center
        "
      >
        

        

        {/* Bride */}

        <h2
          className="
          font-script
          text-[#8B1E2D]
          text-[48px]
          sm:text-[70px]
          md:text-[110px]
          leading-tight
          "
        >
          Pranali
        </h2>

        <p className="mt-4 text-lg text-[#5C0F14]">
          D/o Mr. Jitendra Patil & Mrs. Vandana Patil
        </p>

    


        {/* WEDS */}

        <div className="my-8">
          <p className="font-script text-4xl text-[#5C0F14]">
            weds
          </p>
        </div>

        {/* Groom */}

        <h2
          className="
          font-script
          text-[#8B1E2D]
          text-[48px]
          sm:text-[70px]
          md:text-[110px]
          leading-tight
          "
        >
          Rupesh
        </h2>

        <p className="mt-4 text-lg text-[#5C0F14]">
          S/o Mr. Rajendra Shinde & Mrs. Suvarna Shinde
        </p>


        {/* Shiva Parvati */}

        <div className="mt-10 flex justify-center">
          <Image
            src="/assets/g-shiva-parvati.png"
            alt="Shiva Parvati"
            width={420}
            height={420}
            className="w-full max-w-[320px] sm:max-w-[420px] object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
}