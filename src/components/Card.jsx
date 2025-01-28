const Card = ({ data }) => {
  let language = data['original_language'].toUpperCase();

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
  return (
    <div className="">
      <ul>
        <li>{data.title || data.name}</li>
        <li>{data['original_title'] || data['original_name']}</li>
        {/* <li>{data['original_language']}</li> */}
        <li><img src={flagApiEndpoint} alt="" /></li>
        <li>{data['vote_average']}</li>
      </ul>
    </div>
  )
}

export default Card