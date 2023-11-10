export const icons = {
  album: "/assets/icons/album.jpg",
  user: "/assets/icons/user.png",
};

export default function Icon({ type }) {
  const src = icons[type];

  if (!src) {
    return null;
  }

  return <img src={src} alt={`Icon ${type}`} className="h-6" />;
}
