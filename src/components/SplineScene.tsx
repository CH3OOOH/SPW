'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// 动态导入 Spline 组件以避免 SSR 问题
const Spline = dynamic(() => import('@splinetool/react-spline').then(mod => mod.default), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center">加载中...</div>,
});

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export default function SplineScene({ scene, className = '' }: SplineSceneProps) {
  return (
    <div className={`spline-container ${className}`}>
      <Suspense fallback={<div className="w-full h-full flex items-center justify-center">加载中...</div>}>
        <Spline scene={scene} />
      </Suspense>
    </div>
  );
} 