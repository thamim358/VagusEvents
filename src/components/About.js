import SectionTitle from "./SectionTitle";

const About = ({ minHeight }) => {
  return (
    <section
      className="about wrapper"
      style={minHeight ? { minHeight: "100vh" } : null}
    >
      <SectionTitle title="About" />
      <p>
  Welcome to Vagus Events, where dreams unfold and moments become lifelong memories. We pride ourselves on being passionate architects of unforgettable experiences, dedicated to making your special occasions truly exceptional.
</p>
<p>
  With an unwavering commitment to creativity and precision, our adept team specializes in curating a diverse spectrum of events. From the elegance of weddings to the grandeur of corporate galas, we orchestrate every detail with finesse, ensuring each event reflects your unique vision and style.
</p>
<p>
  At Vagus Events, excellence is our standard. Our mission is not merely to meet expectations but to exceed them, crafting immersive experiences that captivate and inspire. With meticulous planning and personalized care, we transform ideas into realities, leaving an indelible mark on every occasion.
</p>
<p>
  Choosing Vagus Events means entrusting your aspirations to a dedicated partner committed to bringing your dreams to life. Together, let's embark on a journey to create extraordinary moments, etched forever in the tapestry of your memories.
</p>
    </section>
  );
};

export default About;
