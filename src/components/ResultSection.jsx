import Card from './Card'

const ResultSection = ({ title, data }) => {
  return (
    <div>
      <h2 className="uppercase text-3xl font-bold">{title}</h2>
      <div className='grid grid-cols-6 gap-y-8'>
        {data.map(item => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  )
}

export default ResultSection