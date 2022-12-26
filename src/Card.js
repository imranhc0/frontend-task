export const Card = ({ info, handleClick }) => {
  return (
    <a
      onClick={() => handleClick(info.id)}
      className="relative block rounded-xl border border-gray-100 p-8 shadow-xl pointer"
    >
      <span className="absolute right-4 top-4 rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600">
        {info.isAgree ? "True" : "False"}
      </span>
      <div className="mt-4 text-gray-500 sm:pr-8">
        <h3 className="mt-4 text-xl font-bold text-gray-900">{info.name}</h3>
        <p className="mt-2 hidden text-sm sm:block">{info.sector}</p>
      </div>
    </a>
  );
};
