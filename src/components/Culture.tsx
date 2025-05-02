'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SplineScene from './SplineScene';
import Image from 'next/image';

export default function Culture() {
  const ref = useRef(null);
  const splineRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const isSplineInView = useInView(splineRef, { once: true, amount: 0.1 });

  return (
    <section id="culture" className="section py-16 md:py-24 bg-black bg-opacity-50">
      <div className="container mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          潮流文化
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">涂鸦、潮玩等新潮文化</h3>
            <p className="text-lg leading-relaxed mb-6">
              新潮文化的介入，是沙坡尾从避风港转型为城市文创地标的关键驱动力。街区内大量自由创作的街头涂鸦，不仅保留了空间的开放性与实验性，也成为年轻人表达自我与创意的载体。
            </p>
            <p className="text-lg leading-relaxed mb-6">
              这些涂鸦作品风格多样，有的带有海洋文化符号，有的融入流行元素，使得整条街道既具地方性又充满国际化气息。与此同时，潮玩文化在沙坡尾迅速发展，许多店铺不仅售卖盲盒、艺术玩偶等潮流商品，还与本地艺术家合作推出联名款，提升了街区的文化消费层次。
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative h-80 rounded-lg overflow-hidden"
          >
            <Image 
              src="/images/涂鸦墙.JPG"
              alt="沙坡尾涂鸦墙"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
        
        <div className="my-16">
          <motion.h3
            className="text-2xl font-bold mb-6 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            互动涂鸦体验
          </motion.h3>
          <div ref={splineRef} className="h-[500px] mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isSplineInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <SplineScene scene="https://prod.spline.design/SHk1l0Ie40GLHjdR/scene.splinecode" />
            </motion.div>
          </div>
          <motion.p
            className="text-center text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            这些新潮文化的融入，不仅刷新了人们对"传统港湾"的印象，也激发了本地青年与外来游客的参与热情。各类主题展览、快闪活动、潮流市集频繁举办，使沙坡尾成为潮流生活方式的聚集地和厦门城市文化的新象征。
          </motion.p>
        </div>
      </div>
    </section>
  );
} 