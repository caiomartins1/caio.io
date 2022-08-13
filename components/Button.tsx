import Link from 'next/link';
import classnames from 'classnames';

interface ButtonProps {
  text: string;
  to: string;
  primary?: boolean;
  secondary?: boolean;
}

export default function Button({ text, to, primary, secondary }: ButtonProps) {
  return (
    <Link href={to}>
      <a
        className={classnames(
          'px-9 py-2 font-light rounded-lg shadow-lg hover:shadow-xl transition-shadow min-w-[16rem] text-center duration-300',
          {
            'bg-cta-blue-300 text-white': primary,
            'bg-white text-brand-grey-300': secondary,
          },
        )}
      >
        {text}
      </a>
    </Link>
  );
}
