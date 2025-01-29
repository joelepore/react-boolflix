import { FaStar, FaRegStar } from "react-icons/fa";


const Card = ({ data }) => {
  let language = data['original_language'].toUpperCase();
  const rating = Math.round(data['vote_average'] / 2);

  switch (language) {
    case 'EN':
      language = 'GB';
      break;
    case 'KN':
      language = 'HI';
      break;
    case 'JA':
      language = 'JP';
      break;
    case 'HI':
    case 'TA':
      language = 'IN';
      break;
    case 'KO':
      language = "KR";
      break;
    case 'DA':
      language = 'DK';
      break;
    case 'ZH':
      language = 'CN';
      break;
  }

  const flagApiEndpoint = `https://flagsapi.com/${language}/flat/16.png`;
  const imageApiEndpoint = `https://image.tmdb.org/t/p/w342`;
  const imagePlaceholderEndpoint = `https://placehold.co/400x600`;

  const getRatingStars = () => {
    let i = 0;
    const stars = [];
    for (i = 0; i < 5; i++) {
      if (i < rating)
        stars.push(<FaStar />);
      else
        stars.push(<FaRegStar />);
    }
    return stars;
  }

  return (
    <div className="relative card ">
      <img
        className="card-poster absolute -z-10"
        src={`${imageApiEndpoint}/${data['poster_path']}`}
        alt={data.title || data.name}
        onError={(e) => e.currentTarget.src = imagePlaceholderEndpoint}
      />
      <ul className="w-full h-full bg-black opacity-0 hover:opacity-90 transition-opacity cursor-pointer p-4 overflow-y-scroll no-scrollbar">
        <li className="text-xl font-bold">{data.title || data.name}</li>
        <li className="text-sm py-1">{data['original_title'] || data['original_name']}</li>
        <li className="flex items-center gap-2 text-xs"><img src={flagApiEndpoint} alt="" />{language}</li>
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