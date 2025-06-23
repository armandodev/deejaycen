import GalleryItem from "./GalleryItem";

export default function Gallery() {
  const galleryItems = [
    {
      image: "/gallery/01.webp",
      location: "Location 1",
      title: "Image 1",
      description: "Description for Image 1",
    },
    {
      image: "/gallery/01.webp",
      location: "Location 2",
      title: "Image 2",
      description: "Description for Image 2",
    },
    {
      image: "/gallery/01.webp",
      location: "Location 3",
      title: "Image 3",
      description: "Description for Image 3",
    },
    {
      image: "/gallery/01.webp",
      location: "Location 4",
      title: "Image 4",
      description: "Description for Image 4",
    },
    {
      image: "/gallery/01.webp",
      location: "Location 5",
      title: "Image 5",
      description: "Description for Image 5",
    },
    {
      image: "/gallery/01.webp",
      location: "Location 6",
      title: "Image 6",
      description: "Description for Image 6",
    },
  ];

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {galleryItems.map((item, index) => (
        <GalleryItem
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
          location={item.location}
        />
      ))}
    </ul>
  );
}
