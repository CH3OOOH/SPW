'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">沙坡尾</h3>
            <p className="text-gray-400 mb-4">
              厦门市思明区沙坡尾街区
              <br />
              文化创意与历史交融的城市港湾
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">探索</h4>
            <ul className="space-y-2">
              <li><a href="#overview" className="text-gray-400 hover:text-white">沙坡尾概述</a></li>
              <li><a href="#timeline" className="text-gray-400 hover:text-white">发展时间轴</a></li>
              <li><a href="#shops" className="text-gray-400 hover:text-white">特色店铺</a></li>
              <li><a href="#culture" className="text-gray-400 hover:text-white">潮流文化</a></li>
              <li><a href="#mascot" className="text-gray-400 hover:text-white">IP形象</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">资源</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">景点地图</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">交通指南</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">活动日历</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">摄影指南</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">联系我们</h4>
            <p className="text-gray-400 mb-2">邮箱: info@shapoyou.com</p>
            <p className="text-gray-400 mb-2">电话: (0592) 123-4567</p>
            <p className="text-gray-400">
              营业时间: 9:00 - 22:00 (周一至周日)
            </p>
          </div>
        </div>
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} 沙坡尾文创街区. 保留所有权利.</p>
        </motion.div>
      </div>
    </footer>
  );
} 