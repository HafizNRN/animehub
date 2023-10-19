import Link from "next/link";

const Header = ({ pageTitle, pageHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="font-bold text-xl text-yellow-500">{pageTitle}</h1>
      {pageHref && linkTitle ? <Link href={pageHref} className="underline text-white">
        {linkTitle}
      </Link>: null}
      
    </div>
  );
};

export default Header;
