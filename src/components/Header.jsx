/**
 * Header: отвечает за отображение шапки с переключателем меню новостей и текущим временем
 */
const Header = ({ news, dateTime }) => (
  <div>
    {news.map((item) => (
      <a href={item.link}>{item.text}</a>
    ))}
    <div>{dateTime}</div>
  </div>
);

export default Header;
