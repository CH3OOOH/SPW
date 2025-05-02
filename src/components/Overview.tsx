'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SplineScene from './SplineScene';

export default function Overview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="overview" className="section py-16 md:py-24">
      <div className="container mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          沙坡尾概述
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed mb-6">
              沙坡尾作为厦门最后一个避风港，承载着深厚的海洋文化与渔港记忆，其改造发展过程中，在推进城市更新与文化创意产业布局的同时，也始终重视海洋生态环境的保护。
            </p>
            <p className="text-lg leading-relaxed mb-6">
              改造初期，相关部门首先着手治理水体污染，通过封堵非法排污口、升级污水处理系统、引入潮汐水循环机制等手段显著提升了港内水质；同时，部分硬质岸线被改造为生态亲水岸，种植红树林和水生植物以恢复滨海生态系统，使昔日污水横流的港湾逐步恢复生机。
            </p>
            <p className="text-lg leading-relaxed">
              在开发利用层面，沙坡尾以"文创+旅游"的方式推动旧城更新，保留原有渔港肌理和历史建筑，吸引艺术家、文创工作室与特色小店入驻，形成独特的滨海文艺聚落。整个改造过程中始终强调"微更新、低干预"，在文化传承与生态修复之间寻找平衡，使沙坡尾不仅成为市民与游客喜爱的滨海公共空间，也成为海洋环境友好型开发的典范。
            </p>
          </motion.div>
          <motion.div
            className="order-1 md:order-2 h-[400px] md:h-[500px]"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <SplineScene scene="https://prod.spline.design/OLLWgJ13nrea2vcY/scene.splinecode" />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 