declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.gif' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value: any;
  export = value;
}
