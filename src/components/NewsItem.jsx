/**
 * NewsItem: отображает одну новость (иконка, текст, ссылка).
 */
const NewsItem = ({ icon, text, link }) => (
    <div>
      <img src={icon} alt="News icon" />
      <a href={link}>{text}</a>
    </div>
  );
  
  
  export default NewsItem;