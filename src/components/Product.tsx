import React from 'react'
import axios from 'axios'
import style from '../styles/Product.module.css'

interface ProductTypes {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}

const Product = () => {
  // FIXME: benerin untuk buat load produk ketika di klik
  const [allProduct, setAllProduct] = React.useState<ProductTypes[]>([])
  const [product, setProduct] = React.useState<ProductTypes[]>([])
  const [number, setNumber] = React.useState(1)

  React.useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get('https://fakestoreapi.com/products')
      const { data } = response
      setAllProduct(data)
    }

    const timer = setTimeout(() => {
      getProduct()
    }, 1000);
    return () => {
      clearTimeout(timer)
    }
  }, [])

  console.log(number)

  return (
    <div className={style.wrapper}>
      <div className={style.product}>
        {product.map((item) => {
          return (
            <div key={item.id} className={style.card}>
              <img src={item.image} alt={item.title} />
              <div className={style.layer}></div>
              <div className={style.title_price}>
                <p className={style.title}>{item.title}</p>
                <p>$ {item.price}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className={style.btn_wrapper}>
        <button onClick={() => setNumber((prev) => prev + 1)} className={style.btn}>Load More</button>
      </div>
    </div>
  )
}

export default Product