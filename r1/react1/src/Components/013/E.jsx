import { useContext } from "react"
import { DataContext } from "./Data"

function E() {

    const v = useContext(DataContext)

  return (
    <h2>{v}</h2>
  )
}

export default E