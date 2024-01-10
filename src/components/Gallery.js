import SectionTitle from "./SectionTitle";
import GalleryItem from "./GalleryItem";
import birthday from "../img/birthday1.jpg"
import wedding from "../img/wedding.jpg"
import festive from "../img/festive.jpg"
import mice from "../img/mice.jpg"

const images = [
  {
    id: 1,
    src:birthday,
    title: "Celebrate Birthdays with Us",
    category: "Birthday Events",
  },
  {
    id: 2,
    src: wedding,
    title: "Making Your Wedding Unforgettable",
    category: "Wedding Events",
  },
  {
    id: 3,
    src:festive,
    title: "Joyful Festive Occasions",
    category: "Festive Occasions",
  },
  {
    id: 4,
    src: mice,
    title: "Host Your MICE Events with Excellence",
    category: "MICE Events",
  },
];

const Gallery = () => {
  return (
    <section className="gallery">
      <SectionTitle title="Gallery" needMargin={true} />
      <div className="gallery-wrapper">
        {images.map((image) => (
          <GalleryItem key={image.id} {...image} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
