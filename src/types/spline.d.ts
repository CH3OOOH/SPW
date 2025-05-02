declare module '@splinetool/react-spline' {
  import { FC, ReactNode } from 'react';
  
  interface SplineProps {
    scene: string;
    className?: string;
    children?: ReactNode;
    [key: string]: any;
  }
  
  const Spline: FC<SplineProps>;
  
  export default Spline;
}

declare module '@splinetool/runtime' {
  export default class SplineLoader {
    load(url: string): Promise<any>;
  }
} 