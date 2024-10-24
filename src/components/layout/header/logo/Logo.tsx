import { Link } from 'react-router-dom';
import './Logo.scss';

function Logo() {
  return (
    <Link to="/" className="logo">
      <img src="https://i.pinimg.com/564x/70/ba/90/70ba90dc790c2167ed3cfcbb12ba5326.jpg" alt="Logo" />
    </Link>
  );
}

export { Logo };