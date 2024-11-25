/**
 * SearchBar: отображает логотип, строку поиска с кнопкой, меню переключателей
 */

const SearchBar = ({ logo, menuItems, placeholder, onSearch }) => (
  <div>
    <img src={logo} alt="Logo" />
    {menuItems.map((item) => (
      <div key={item.id}>{item.menu}</div>
    ))}
    <div>
      <input type="text" placeholder={placeholder} />
      <button onClick={onSearch}>Найти</button>
      <p>Найдется все. Например, фаза луны сегодня</p>
    </div>
  </div>
);

export default SearchBar;

