import React from 'react'

type ListProps<T> = {
    items: T[]
    onClick: (value: T) => void
}

export const List = <T extends {}>({items, onClick}: ListProps<T>) => {
  return (
    <div>
        <h3>List of items</h3>
        {items.map((item, index) => 
            <div key={index} onClick={() => onClick(item)}>
                {JSON.stringify(item)}
            </div>
        )}
    </div>
  )
}
