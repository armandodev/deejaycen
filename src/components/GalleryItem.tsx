import { MapPin } from "lucide-react";

export default function GalleryItem({
  image,
  location,
  title,
  description,
}: {
  image: string;
  location: string;
  title: string;
  description: string;
}) {
  return (
    <li className="group relative overflow-hidden rounded-lg hover:transform hover:scale-105 transition-transform duration-300">
      <header className="absolute inset-0 bg-gradient-to-b from-black/0 to-black flex flex-col items-start justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
        <p className="bg-teal-500 flex items-center gap-2 mb-2 text-sm rounded-full px-3 py-1">
          <MapPin className="w-4 h-4" /> {location}
        </p>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p>{description}</p>
      </header>
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
        loading="lazy"
      />
    </li>
  );
}
