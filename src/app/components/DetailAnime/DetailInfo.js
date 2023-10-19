const DetailInfo = ({ info, infoValue }) => {
  return (
    <>
      <strong>
        {info}
        <span className="text-yellow-500 text-sm ml-2 bg-slate-500/30 py-0.5 px-1 rounded">
          {infoValue}
        </span>
      </strong>
    </>
  );
};

export default DetailInfo;
