import NewsItem from "./NewsItem";
import { useEffect, useState } from "react";

const NewsCard = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null); // New state for error handling

  useEffect(() => {
    const url = `https://api.scaleserp.com/search?api_key=${import.meta.env.VITE_API_KEY}&q=marketing-industry-news&location=New+Zealand&google_domain=google.co.nz&gl=nz&hl=en&time_period=last_year&device=desktop&output=json&sort_by=relevance&engine=google`;
  
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setArticles(data.articles))
      .catch((err) => {
        setError(err.message); // Set error message
      });
  }, []);

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {error ? (
        <p className="text-danger">Error fetching news: {error}</p>
      ) : (
        articles.map((data, index) => (
          <NewsItem
            key={index}
            displayed_link={data.displayed_link}
            title={data.title}
            snippet={data.snippet}
            link={data.link}/>
        ))
      )}
    </div>
  );
};

export default NewsCard;
