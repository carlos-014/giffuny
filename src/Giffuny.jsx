import { useEffect, useState } from "react";

import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid";
import { getGifs } from "./helpers/getGifs";

export const Giffuny = () => {

  const [category, setCategory] = useState([]);

  const onAddCategory = ( newCategory ) => {
    if( category.includes(newCategory) ) return;

    setCategory([ newCategory ]);
  }

  return (
    <div className="container">
      <h1 className="title">Giffuny</h1>

      <AddCategory onNewCategory={ value => onAddCategory(value) } />

      {
        category.map( cat => 
          <GifGrid 
            key={ cat }
            category={ cat } />  
        )
      }

    </div>
  )
}
