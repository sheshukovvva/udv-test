import Block from "../block/block"
import { useAppSelector } from "../../hooks/store"

export default function App() {
  const fitstBlock = useAppSelector((state) => state.firstBlock)
  const secondBlock = useAppSelector((state) => state.secondBlock)
  const thirdBlock = useAppSelector((state) => state.thirdBlock)

  return (
    <div className="wrapper">
      <div className="contain-1">
        <main className="main">
          <Block widgets={fitstBlock} id="1"/>
          <Block widgets={secondBlock} id="2"/>
          <Block widgets={thirdBlock} id="3"/>
        </main>
      </div>
    </div>
  )
}
