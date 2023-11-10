export default function UserCard({ name, username, email, phone, website }) {
  return (
    <div>
      <div className="text-black text-xl font-bold">{name}</div>
      <div className="text-slate-500 ">Username: {username}</div>
      <div className="text-slate-500 ">
        Email:{" "}
        <a className="underline" href={`mailto:${email}`}>
          {email}
        </a>
      </div>
      <div className="text-slate-500 ">
        Phone:{" "}
        <a className="underline" href={`tel:${phone}`}>
          {phone}
        </a>
      </div>
      <div className="text-slate-500 ">
        Site:{" "}
        <a className="underline" href={"http://" + website}>
          {website}
        </a>
      </div>
    </div>
  );
}
