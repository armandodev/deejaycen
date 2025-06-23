import { MapPin, Star } from "lucide-react";

export default function Review({
  name,
  stars,
  review,
  date,
  event,
  location,
}: {
  name: string;
  stars: number;
  review: string;
  date: string;
  event: string;
  location: string;
}) {
  const firstLetter = name.charAt(0).toUpperCase();
  const namePlaceholder = `https://ui-avatars.com/api/?name=${firstLetter}&background=random&color=fff`;
  return (
    <li className="bg-gray-200 rounded-2xl p-6 border border-gray-400 flex flex-col justify-between gap-4">
      <header className="flex items-center">
        <img
          src={namePlaceholder}
          alt="Cliente"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h4 className="font-bold">{name}</h4>
          <div className="flex text-yellow-500">
            {Array.from({ length: stars }, (_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>
      </header>
      <p className="text-gray-600">
        <span>{review}</span>
      </p>
      <footer>
        <p className="text-gray-500 text-sm">
          {event} - {date} - {location}
        </p>
      </footer>
    </li>
  );
}
