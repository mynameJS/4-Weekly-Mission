import './Card.css';
import { getFormattedDate, getTimeAgo } from '../../utils/date.js';

export default function Card({ data }) {
  const defaultImageSource = 'https://placehold.co/600x400';
  return (
    <a href={data.url} target="_blank" rel="noopener noreferrer" className="cardBox">
      <img src={data.imageSource || defaultImageSource} alt="카드썸네일" />
      <div className="cardDataArea">
        <div className="cardTimeAgo">{getTimeAgo(data.createdAt)}</div>
        <div className="cardDesc">{data.description}</div>
        <div className="cardCreatedAt">{getFormattedDate(data.createdAt)}</div>
      </div>
    </a>
  );
}