import { Outlet } from "react-router-dom"
import HeaderDetail from "../components/HeaderDetail"

const DetailLayout = () => {
  return (
    <>
      <HeaderDetail />
      <Outlet />
    </>
  )
}

export default DetailLayout