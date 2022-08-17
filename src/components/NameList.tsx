import { Name } from './Person.types'

type NameListProps = {
    names: Name[]
}

export default function NameList(props: NameListProps) {
  return (<>
    <div>Guest list:</div>
    <ul>{
        props.names.map((name, i) =>
            <li key={i}>{name.first} {name.last}</li>)
    }
    </ul>
    </>
  )
}
