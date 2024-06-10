import PropTypes from 'prop-types';

const NewsItem = ({ title, displayed_link, link, snippet }) => (
  <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
    <img src={displayed_link} alt={title} className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">{title.slice(0, 50)}</h5>
      <p className="card-text">{snippet?.slice(0, 90)}</p>
      <a href={link} className="btn btn-primary">Read More</a>
    </div>
  </div>
);

NewsItem.propTypes = {
  displayed_link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  snippet: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NewsItem;
