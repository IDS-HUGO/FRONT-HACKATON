import './CardHome.scss';

interface CardHomeProps {
  projectName: string;
  projectDescription: string;
  projectImage: string;
  companyLogo: string;
  companyName: string;
  donateButtonText: string;
  coinLogo: string;
}

function CardHome({
  projectName,
  projectDescription,
  projectImage,
  companyLogo,
  companyName,
  donateButtonText,
  coinLogo,
}: CardHomeProps) {
  return (
    <div className="card-home">
      <div className="project-image">
        <img src={projectImage} alt={projectName} />
      </div>
      <div className="company-info">
        <img src={companyLogo} alt={companyName} />
        <p>{companyName}</p>
      </div>
      <div>
        <h2>{projectName}</h2>
      </div>
      <div className="description">
        <p>{projectDescription}</p>
      </div>
      <div>
        <button className="donate-button">
          {donateButtonText} <img src={coinLogo} alt="logo moneda" />
        </button>
      </div>
    </div>
  );
}

export { CardHome };