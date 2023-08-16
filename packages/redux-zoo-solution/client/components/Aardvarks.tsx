import { useAppSelector } from '../hooks.ts'
import Aardvark from './Aardvark.tsx'

function Aardvarks() {
  const aardvarks = useAppSelector((state) => state.aardvarks)

  return (
    <section>
      <h1>Aardvarks</h1>
      <ul>
        {aardvarks.map((aardvark) => (
          <li key={aardvark}>
            <Aardvark name={aardvark} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Aardvarks
