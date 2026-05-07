// About component - displays blog logo and description
// Connected to: App (parent)
// Props received: image (string URL), about (string)

function About({ image, about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
