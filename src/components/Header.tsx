'use client';

import SplineScene from './SplineScene';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <SplineScene scene="https://prod.spline.design/HEZB1E70Swe7huf3/scene.splinecode" />
      </div>
      <div className="container relative z-10 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          沙坡尾
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          文化创意与历史交融的城市港湾
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10"
        >
          <a 
            href="#overview" 
            className="px-8 py-3 bg-white text-black font-medium rounded hover:bg-opacity-90 transition-all"
          >
            探索沙坡尾
          </a>
        </motion.div>
      </div>
    </section>
  );
} 