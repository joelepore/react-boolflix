import { ThreeCircles } from "react-loader-spinner"
const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center">

      <ThreeCircles
        height={80}
        width={80}
        color="red"
      />
    </div>
  )
}

export default Loader