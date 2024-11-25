import Header from "./components/Header";
import Advertising from "./components/Advertising";
import NewsList from "./components/NewsList";
import Stock from "./components/Stock";
import SearchBar from "./components/SearchBar";
import Widget from "./components/Widget";

function App() {

  return (
    <>
    <Header news={news} dateTime={dateTime}/>
    <NewsList news={newsList} />
    <Stock exchahge={exchahge} rate={rate} delta={delta} />
    <SearchBar logo={logo} menuItems={menuItems} placeholder={placeholder} onSearch={onSearch} />
    <Advertising img={img} link={link} text={text} />
    <Widget title={title}>
      <div>...</div>
    </Widget>
    </>
  )
}

export default App
