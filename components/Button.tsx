import Link from 'next/link';
import classnames from 'classnames';
import { FaGithub } from 'react-icons/fa';

type ButtonType = 'primary' | 'secondary' | 'github' | 'contact';

interface ButtonProps {
  text: string;
  to: string;
  type: ButtonType;
}

export default function Button({ text, to, type }: ButtonProps) {
  return (
    <>
      <Link href={to}>
        <a
          className={classnames(
            'px-9 py-2 font-light rounded-lg  text-center',
            {
              'bg-cta-blue-300 text-white min-w-[16rem] shadow-lg  hover:shadow-xl transition-shadow duration-300':
                type === 'primary',
              'bg-white text-brand-grey-300 min-w-[16rem] shadow-lg  hover:shadow-xl transition-shadow duration-300':
                type === 'secondary',
              'flex items-center gap-2 text-white bg-black border hover:text-gray-700 hover:bg-white hover:border-gray-700 transition-colors':
                type === 'github',
              'text-gray-700 border hover:text-gray-700 hover:bg-white hover:border-gray-700 transition-colors':
                type === 'contact',
            },
          )}
        >
          {type === 'github' && <FaGithub />}
          {text}
        </a>
      </Link>
    </>
  );
}
