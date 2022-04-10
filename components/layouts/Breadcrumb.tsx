import Link from 'next/link';
import React from 'react';

type Props = {
  name: string;
};

function Breadcrumb({ name }: Props) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center">
        <li key="products">
          <Link href="/" passHref>
            <a className="text-sm font-medium text-sky-500 hover:text-sky-700">
              Products
            </a>
          </Link>
        </li>
        <li key={name}>
          <div className="flex items-center">
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
            </svg>

            <span
              className="text-sm font-medium text-gray-500"
              aria-current={'page'}
            >
              {name}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
