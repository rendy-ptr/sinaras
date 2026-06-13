'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      <motion.a
        href="https://wa.me/6285777005969?text=Halo%20Sinaras%20saya%20mau%20order%20Buku%20Cerita%20Si%20Manis"
        target="_blank"
        rel="noreferrer"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          y: {
            repeat: Infinity,
            duration: 2,
            ease: 'easeInOut',
          },
        }}
        whileHover={{ scale: 1.1, rotate: 6 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 bg-[#25D366] text-white flex items-center justify-center rounded-2xl border-3 border-slate-800 shadow-[4px_4px_0px_0px_#1e293b] hover:shadow-[2px_2px_0px_0px_#1e293b] active:translate-x-0.5 active:translate-y-0.5 transition-all duration-150 cursor-pointer"
        title="Hubungi Kami lewat WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.742.002-2.599-1.01-5.048-2.852-6.894-1.838-1.848-4.284-2.865-6.886-2.865-5.437 0-9.863 4.373-9.868 9.743-.001 1.761.485 3.479 1.411 4.968l-.935 3.413 3.538-.918zm10.59-4.71c-.29-.145-1.72-.848-1.986-.944-.266-.096-.46-.145-.653.144-.193.29-.748.944-.917 1.137-.17.192-.338.216-.628.072-.29-.145-1.226-.452-2.336-1.439-.863-.768-1.447-1.717-1.616-2.006-.17-.29-.017-.446.128-.59.13-.13.29-.338.435-.507.145-.17.193-.29.29-.483.097-.193.048-.362-.024-.507-.072-.145-.653-1.57-.894-2.148-.235-.567-.473-.49-.653-.49-.17 0-.363-.012-.556-.012-.193 0-.507.072-.773.362-.266.29-1.014.99-1.014 2.415 0 1.425 1.038 2.8 1.182 2.993.145.193 2.043 3.118 4.949 4.373.69.298 1.23.477 1.65.61.696.22 1.33.19 1.83.115.556-.084 1.72-.7 1.962-1.374.242-.675.242-1.253.17-1.374-.072-.12-.265-.192-.555-.337z" />
        </svg>
      </motion.a>
    </div>
  );
}
