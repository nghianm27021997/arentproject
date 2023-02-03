import TransitImage from "../../../assets/Transit/transit.png";

import "./detail.scss";

type Props = {
  transitLogo: string;
  description: string;
};

const TransitComponent = ({ transitLogo, description }: Props) => {
  return (
    <div className='detail-transit'>
      <img src={TransitImage} alt='transit' />
      <div className='content'>
        <img src={transitLogo} alt='transit-logo' />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TransitComponent;
