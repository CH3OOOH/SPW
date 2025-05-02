// 这个文件用于解决TypeScript中找不到React命名空间的问题
import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
} 