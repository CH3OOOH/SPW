'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// 时间轴数据（根据实际情况可以补充更多）
const timelineData = [
  {
    year: '1950s',
    title: '渔港形成期',
    description: '沙坡尾始建于上世纪50年代，最初作为厦门最后一个避风港，为渔民提供停泊和避风港湾。'
  },
  {
    year: '1980s',
    title: '传统渔业兴盛',
    description: '80年代，沙坡尾作为传统渔业产业基地，拥有众多渔船和水产加工厂，成为当时厦门重要的渔业经济支柱。'
  },
  {
    year: '2000s',
    title: '转型探索期',
    description: '随着城市化进程加速，沙坡尾传统渔业开始衰退，渔港功能逐渐弱化，进入了转型探索期。'
  },
  {
    year: '2010-2015',
    title: '文创启动期',
    description: '沙坡尾开始谋求转型，政府启动了以"保留、改造、开放"为理念的旧港区升级改造计划，鼓励文创产业入驻。'
  },
  {
    year: '2016-2020',
    title: '文创繁荣期',
    description: '文艺青年和创意设计师陆续进驻，形成了集美食、文创、艺术展览于一体的文创聚落。多家特色店铺开业，成为厦门文艺地标。'
  },
  {
    year: '2021至今',
    title: '多元融合期',
    description: '沙坡尾逐渐发展成为集历史文化保护、创意产业、旅游观光、休闲生活为一体的多元化滨海空间，持续吸引年轻群体关注。'
  }
];

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="timeline" className="section py-16 md:py-24 bg-black bg-opacity-50">
      <div className="container mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          发展时间轴
        </motion.h2>
        <motion.div
          className="mt-12 px-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {timelineData.map((item, index) => (
            <motion.div 
              key={index} 
              className="timeline-item mb-12"
              variants={itemVariants}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="md:w-1/6">
                  <h3 className="text-2xl font-bold text-white">{item.year}</h3>
                </div>
                <div className="md:w-5/6">
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 