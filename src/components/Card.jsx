const Card = ({ data }) => {
  return (
    <div className="">
      <ul>
        <li>{data.title}</li>
        <li>{data['original_title']}</li>
        <li>{data['original_language']}</li>
        <li>{data['vote_average']}</li>
      </ul>
    </div>
  )
}

export default Card