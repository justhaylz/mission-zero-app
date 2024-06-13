import { useEffect, useState } from "react";
import styles from './NewsCard.module.css';

const NewsCard = () => {
  const [missionData, setMissionData] = useState([]);
  const url = '../public/data.json'; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setMissionData(data);
      } catch (error) {
        console.error('Unable to fetch data from API:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.gridContainer}>
      {missionData.map((data, index) => (
        <div key={index} className={styles.missionCard}>
          <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
            <div className="card-header">{data.type}</div>
            <img src={data.image} className="card-img-top" alt={data.title} />
            <div className="card-body">
              <h5 className="card-title">{data.title.slice(0, 50)}</h5>
              <p className="card-text">{data.description?.slice(0, 90)}</p>
              <a href={data.url} className="btn btn-primary">Read More</a>
              <p className="date-location">{data.date} {data.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;