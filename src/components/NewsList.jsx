import NewsItem from "./NewsItem";
/**
 * NewsList: выводит список новостей из массива news c передачей пропсов в компонент NewsItem
 */
const NewsList = ({ news }) => (
  <div>
    {news.map((item, index) => (
      <NewsItem key={index} icon={item.icon} text={item.text} link={item.link} />
    ))}
  </div>
);

export default NewsList;