import React, { useEffect, useState } from 'react'

export default function List({ getItems }) {
   const [items, setItems] = useState([])

   useEffect(() => {
      setItems(getItems(1))
      console.log('Updating Items')
   }, [getItems])

  return items.map(item => <div key={item}>{item}</div>)
}

//useMemo returns the value of the function, white useCallback returns the entire function
