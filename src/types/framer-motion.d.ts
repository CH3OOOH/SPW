declare module 'framer-motion' {
  import { FC, ReactNode, RefObject, ComponentType } from 'react';
  
  // 基础属性
  interface MotionProps {
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
    variants?: any;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
    viewport?: any;
    className?: string;
    style?: any;
    children?: ReactNode;
    [key: string]: any;
  }
  
  // 动画组件
  export const motion: {
    [tag: string]: FC<MotionProps>;
  };
  
  // Hooks
  export function useInView(ref: RefObject<any>, options?: any): boolean;
  export function useAnimation(): any;
  export function useScroll(): any;
  export function useSpring(value: number, options?: any): any;
  
  // 动画控制器
  export function AnimatePresence(props: { children: ReactNode; exitBeforeEnter?: boolean; initial?: boolean; }): JSX.Element;
  
  // 工具函数
  export const transform: any;
} 