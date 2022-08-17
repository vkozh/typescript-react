type NameListProps = {
    names: {
        first: string
        second: string
    }[]
}

export default function NameList(props: NameListProps) {
  return (<>
    <div>Guest list:</div>
    <ul>{
        props.names.map((name, i) =>
            <li key={i}>{name.first} {name.second}</li>)
    }
    </ul>
    </>
  )
}
