import "./News.css";
import news from "../../data/news";

// Render *italic* and [[red highlight pill]] spans inline.
const renderText = (text) => {
  const parts = text.split(/(\[\[[^\]]+\]\]|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("[[") && part.endsWith("]]")) {
      return (
        <span key={i} className="news-highlight">
          {part.slice(2, -2)}
        </span>
      );
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return <span key={i}>{part}</span>;
  });
};

const News = () => {
  return (
    <section id="news" className="news">
      <div className="section-inner">
        <h2 className="section-title">News</h2>
        <ul className="news-list">
          {news.map((item, i) => (
            <li className="news-item" key={i}>
              <span className="news-date">{item.date}</span>
              <span className="news-text">{renderText(item.text)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default News;
