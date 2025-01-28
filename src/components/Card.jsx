import { FaStar } from "react-icons/fa";

const Card = ({ data }) => {
  let language = data['original_language'].toUpperCase();
  const rating = Math.round(data['vote_average'] / 2);

  switch (language) {
    case 'EN':
      language = 'GB';
      break;
    case 'KN':
      language = 'KR';
      break;
    case 'JA':
      language = 'JP';
      break;
    case 'HI':
      language = 'IN';
      break;
  }

  const flagApiEndpoint = `https://flagsapi.com/${language}/flat/32.png`

  const getRatingStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar />);
    }
    return stars;
  }

  return (
    <div className="relative card">
      <img
        className="card-poster absolute -z-10"
        src={`https://image.tmdb.org/t/p/w342/${data['poster_path']}`}
        alt={data.title || data.name}
        onError={(e) => e.currentTarget.src = `https://via.assets.so/img.jpg?w=200&h=300&tc=blue&bg=#cecece`}
      />
      <ul className="w-full h-full bg-black opacity-0 hover:opacity-90 transition-opacity cursor-pointer p-4">
        <li className="text-xl font-bold">{data.title || data.name}</li>
        <li className="text-sm py-1">{data['original_title'] || data['original_name']}</li>
        <li><img src={flagApiEndpoint} alt="" /></li>
        <li>
          <ul className="flex mt-2 text-yellow-400">
            {getRatingStars().map((star, index) => (
              <li key={index}>{star}</li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Card