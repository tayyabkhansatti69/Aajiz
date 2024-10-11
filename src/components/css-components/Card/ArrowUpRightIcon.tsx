import { memo, SVGProps } from 'react';

const ArrowUpRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M7 17L17 7M17 7H7M17 7V17' stroke='#101828' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(ArrowUpRightIcon);
export { Memo as ArrowUpRightIcon };
