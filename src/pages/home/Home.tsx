import { CardHome } from "@/components";
import { cardsData } from '../../sql/data'
import './Home.scss';

function Home() {
  return (
    <div className="home-container">
      {cardsData.map((card) => (
        <CardHome
          key={card.id}
          projectName={card.projectName}
          projectDescription={card.projectDescription}
          projectImage={card.projectImage}
          companyLogo={card.companyLogo}
          companyName={card.companyName}
          donateButtonText={card.donateButtonText}
          coinLogo={card.coinLogo}
        />
      ))}
    </div>
  );
}

export { Home };
