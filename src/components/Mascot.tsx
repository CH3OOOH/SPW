'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SplineScene from './SplineScene';

export default function Mascot() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="mascot" className="section py-16 md:py-24">
      <div className="container mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          互动IP形象
        </motion.h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.p
            className="text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            沙坡尾街区原创IP形象，代表着这个充满活力的文创空间。通过互动体验，感受沙坡尾的艺术气息和创意精神。
          </motion.p>
        </div>
        
        <div className="my-8">
          <motion.h3
            className="text-xl font-bold mb-4 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            互动表情IP - 试试点击形象改变表情
          </motion.h3>
          <div className="h-[500px] mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full h-full"
            >
              <SplineScene scene="https://prod.spline.design/4442Tna0ri7fnAzt/scene.splinecode" />
            </motion.div>
          </div>
        </div>

        <div className="mt-16">
          <motion.p
            className="text-center text-lg font-semibold"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            沙坡尾IP形象是街区文化的视觉符号，代表着这片创意空间的活力与个性
          </motion.p>
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <a 
              href="#" 
              className="px-6 py-2 bg-white text-black font-medium rounded hover:bg-opacity-90 transition-all mx-2"
            >
              了解更多
            </a>
            <a 
              href="#" 
              className="px-6 py-2 border border-white text-white font-medium rounded hover:bg-white hover:bg-opacity-10 transition-all mx-2"
            >
              访问沙坡尾
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 