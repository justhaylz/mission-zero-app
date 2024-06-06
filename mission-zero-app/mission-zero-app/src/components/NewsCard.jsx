import NewsItem from "./NewsItem";
import { useEffect, useState } from "react";

const NewsCard = (category) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null); // New state for error handling

    useEffect(() => {
      const url = `https://newsapi.org/v2/top-headlines?country=nz&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
        .then((res) => {
          if (!res.ok) {
          throw new Error("Network response was not ok"); // Handle non-200 status codes
        }
        return res.json();
      })
      .then((data) => setArticles(data.articles))
      .catch((err) => {
        setError(err.message); // Set error message
      });
  }, [category]);

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {error ? (
        <p className="text-danger">Error fetching news: {error}</p>
      ) : (
        articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}/>
        ))
      )}
    </div>
  );
};

export default NewsCard;