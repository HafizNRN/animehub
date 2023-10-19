import Link from "next/link";


const LinkList = ({ linkListHref, linkListIcon, linkListTitle }) => {
  return (
    <>
      <Link href={linkListHref} className="w-fit flex items-center gap-2">
        {linkListIcon}
        {linkListTitle}
      </Link>
    </>
  );
};

export default LinkList;
