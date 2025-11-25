const Card = ({ name, phone, email, website }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-xl shadow p-4 border">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-slate-600 text-sm">Email: {email}</p>
      <p className="text-slate-600 text-sm">Phone: {phone}</p>
      <p className="text-slate-600 text-sm">
        Website:{" "}
        <a
          href={`https://${website}`}
          className="text-blue-600 underline"
          target="_blank"
        >
          {website}
        </a>
      </p>
    </div>
  );
};
export default Card;
