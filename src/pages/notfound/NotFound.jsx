import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="notfound">
      <div className="notfound-content">
        <h2>404 - Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="home-link">Go Back Home</Link>
      </div>
    </section>
  );
}

export default NotFound;