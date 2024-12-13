
import one from "../assets/Images/perfume1.jpg"
import two from "../assets/Images/perfume2.jpg"
import three from "../assets/Images/perfume3.jpg"



function Products()
{
  return(
    <div className="products">
      <div className="products_img">
        <img src={one} alt="No Such Image Found"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/> Explicabo eligendi repudiandae repellat sapiente corporis voluptatem quae consectetur et cum autem.</p>
      </div>
      <div className="products_img">
        <img src={two} alt="No Such Image Found"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/> Explicabo eligendi repudiandae repellat sapiente corporis voluptatem quae consectetur et cum autem.</p>
      </div>
      <div className="products_img">
        <img src={three} alt="No Such Image Found"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/> Explicabo eligendi repudiandae repellat sapiente corporis voluptatem quae consectetur et cum autem.</p>
      </div>
    </div>
  )
}



export default Products