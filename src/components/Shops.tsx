'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

// 特色店铺数据
const shopsData = [
  {
    name: '咸鱼俱乐部',
    description: '集潮牌售卖、冰淇淋、饮品与打卡摄影场景于一体的复合型潮流空间',
    image: '/images/潮牌商店.JPG'
  },
  {
    name: '查查斯',
    description: '以原创IP形象为核心，开发包括公仔、文具、T恤在内的系列周边产品',
    image: '/images/文创杂货店.JPG'
  },
  {
    name: '蜕壳俱乐部',
    description: '融合黑胶音乐、酒吧与服饰于一体的多功能空间，为夜生活增添质感',
    image: '/images/啤酒屋.JPG'
  },
  {
    name: '咖飛狮',
    description: '通过石雕与咖啡的结合，将闽南传统技艺以当代方式重新演绎',
    image: '/images/疯狂的石头.JPG'
  },
  {
    name: '食光屋',
    description: '提供厦门特色小吃，在怀旧复古氛围中品尝传统美食',
    image: '/images/食光屋.JPG'
  },
  {
    name: '绿皮火车茶',
    description: '以铁路文化为主题的特色茶饮店，融合闽南茶文化与现代饮品',
    image: '/images/绿皮火车茶.JPG'
  },
  {
    name: '一封情酥',
    description: '以书信为主题的传统糕点店，将厦门特色糕点与文艺氛围结合',
    image: '/images/一封情酥.JPG'
  },
  {
    name: '显眼包',
    description: '手工制作的个性化背包和配饰店，每件作品都独一无二',
    image: '/images/显眼包.JPG'
  }
];

export default function Shops() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="shops" className="section py-16 md:py-24">
      <div className="container mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          特色店铺
        </motion.h2>
        <p className="text-center text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          沙坡尾的文创街区因其独特的地理环境和历史氛围，吸引了众多具有创意与个性的店铺入驻。这些店铺大多由年轻艺术家或文创创业者创办，充分融合了地域文化、现代审美与商业创新。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {shopsData.map((shop, index) => (
            <motion.div
              key={index}
              className="shop-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-60 w-full">
                <Image
                  src={shop.image}
                  alt={shop.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{shop.name}</h3>
                <p className="text-gray-300 text-sm">{shop.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg text-gray-300">
            这些店铺不仅提供多元的消费体验，也塑造了沙坡尾鲜明的个性标签，推动其由传统渔港向文创商业区的转型。
          </p>
        </motion.div>
      </div>
    </section>
  );
} 