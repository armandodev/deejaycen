import Review from "./Review";

export default function ReviewsList() {
  const reviews = [
    {
      name: "María González",
      review:
        "DJ Cen hizo de nuestra boda un evento inolvidable. La música fue perfecta, todos bailaron hasta el amanecer. ¡Súper recomendado!",
      event: "Boda",
      date: "Noviembre 2024",
      location: "Playa del Carmen",
      stars: 5,
    },
    {
      name: "Carlos Rodríguez",
      review:
        "Excelente servicio para nuestro evento corporativo. Profesionalismo total, equipos de primera calidad y gran ambiente. Volveremos a contratar.",
      event: "Evento Corporativo",
      date: "Octubre 2024",
      location: "Cancún",
      stars: 5,
    },
    {
      name: "Ana Martínez",
      review:
        "La iluminación y efectos especiales fueron espectaculares. Jorge realmente sabe cómo crear el ambiente perfecto. ¡Gracias por todo!",
      event: "XV años",
      date: "Septiembre 2024",
      location: "Ciudad de México",
      stars: 5,
    },
    {
      name: "Roberto Sánchez",
      review:
        "Puntualidad, calidad y excelente trato. DJ Cen superó nuestras expectativas. El mejor DJ que hemos contratado sin duda.",
      event: "Graduación",
      date: "Agosto 2024",
      location: "Monterrey",
      stars: 5,
    },
    {
      name: "Laura Pérez",
      review:
        "Increíble experiencia. La música estuvo perfecta para todas las edades. Definitivamente lo recomendaré a todos mis amigos.",
      event: "Fiesta de Aniversario",
      date: "Julio 2024",
      location: "Guadalajara",
      stars: 5,
    },
    {
      name: "Diego Fernández",
      review:
        "El mejor precio-calidad del mercado. Equipo profesional, música actualizada y excelente servicio. 100% satisfecho.",
      event: "Fiesta Privada",
      date: "Junio 2024",
      location: "Ciudad de México",
      stars: 5,
    },
  ];

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {reviews.map((review, index) => (
        <Review
          key={index}
          name={review.name}
          review={review.review}
          event={review.event}
          date={review.date}
          location={review.location}
          stars={review.stars}
        />
      ))}
    </ul>
  );
}
