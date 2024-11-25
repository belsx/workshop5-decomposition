/**
 * Advertising: реклама с карnинкой и переходом на другой сайт
 */

const Advertising = ({ img, link, text }) => (
  <div>
    <a href={link}>
      <img src={img} alt={text} />
    </a>
  </div>
);

export default Advertising;