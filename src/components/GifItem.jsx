
export const GifItem = ({ image }) => {

  const { title, url } = image;

  return (
    <img className="gif" src={ url } alt={ title } />
  )
}
