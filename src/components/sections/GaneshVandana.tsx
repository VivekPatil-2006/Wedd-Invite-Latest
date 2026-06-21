"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GaneshVandana() {
  return (
    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      flex
      items-center
      justify-center
      px-4
      py-20
      "
      style={{
        backgroundImage: "url('/assets/g-welcome-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Ganesh + Invitation Content */}

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="
        relative
        z-10
        w-full
        max-w-3xl
        text-center
        "
      >
        {/* Ganesh Idol */}

        <div className="flex justify-center mb-4">
          <Image
            src="/assets/ganesh-idol.png"
            alt="Ganesh"
            width={110}
            height={110}
            priority
          />
        </div>

        {/* Single unified blurred overlay box */}
        <div
          className="
          bg-white/30
          backdrop-blur-xl
          rounded-[28px]
          border
          border-[#d4af37]
          shadow-xl
          px-6
          py-10
          md:px-12
          md:py-12
          "
        >
          {/* Ganesh Mantra */}
          <div
            className="
            inline-block
            bg-white/80
            px-8
            py-3
            rounded-full
            border
            border-[#d4af37]
            shadow-lg
            "
          >
            <p
              className="
              font-title
              text-[#7b1c2a]
              tracking-[3px]
              text-sm
              md:text-base
              "
            >
              || OM SHREE GANESHAYA NAMAH ||
            </p>
          </div>

          {/* Shloka */}
          <h2
            className="
            mt-8
            text-[#5C0F14]
            text-2xl
            md:text-3xl
            leading-loose
            "
          > <br/>
            मङ्गलं भगवान विष्णुः
            <br />
            मङ्गलं गरुडध्वजः ।
            <br />
            मङ्गलं पुण्डरीकाक्षः
            <br />
            मङ्गलाय तनो हरिः ॥
          </h2>

          <p
            className="
            mt-6
            text-[#7b1c2a]
            italic
            text-base
            md:text-lg
            "
          ><br/>
            Mangalam Bhagwan Vishnu · Mangalam Garudadhwajah
            <br />
            Mangalam Pundarikakshah · Mangalaya Tano Harih
          </p>

          {/* Invitation Text */}
          <p
            className="
            mt-10
            text-[#6a4a4a]
            text-lg
            md:text-2xl
            leading-relaxed
            "
          ><br/>
            We request the honor of your gracious presence
            <br />
            on the auspicious occasion of the wedding
            celebration of
          </p>
        </div>
      </motion.div>
    </section>
  );
}
