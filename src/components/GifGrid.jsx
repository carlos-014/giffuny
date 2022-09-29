import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category);

  return (
    <>

      {
        isLoading && <h2 className="cargando-text">Loading...</h2>
      }
      <div className="gif-grid">
        {
          images.map( (image) => (
            <GifItem 
              key={ image.id } 
              image={ image } />
          ))
        }
      </div>
    </>
  );
}
