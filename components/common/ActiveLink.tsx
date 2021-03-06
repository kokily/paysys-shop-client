import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Props {
  href: string;
  activeClassName: string;
  children: React.ReactElement;
}

const ActiveLink: React.FC<Props> = ({ href, activeClassName, children }) => {
  const router = useRouter();
  const child = React.Children.only(children);
  let className = child.props.className || '';

  if (router.pathname === href && activeClassName) {
    className = `${className} ${activeClassName}`.trim();
  }

  return <Link href={href}>{React.cloneElement(child, { className })}</Link>;
};

export default ActiveLink;
