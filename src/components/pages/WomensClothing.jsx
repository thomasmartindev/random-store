import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../state/features/womensClothingSlice'
import { useEffect } from 'react'
import { Container, Heading, Wrapper, Loader, Overlay, Products } from '../utilities/ProductPage'
import { Product } from '../utilities/Product'

export const WomensClothing = () => {
  const dispatch = useDispatch()
  const womensClothing = useSelector(state => state.womensClothing)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <Container>
      <Heading>
        Women's Clothing
      </Heading>
      {
        womensClothing.loading
          ? <Wrapper>
              <Overlay />
              <Loader />
            </Wrapper>
          : null
      }
      {
        !womensClothing.loading && womensClothing.error
          ? <Wrapper>
              Something went wrong.
            </Wrapper>
          : null
      }
      {
        !womensClothing.loading && womensClothing.products.length 
          ? <Products>
              {
                womensClothing.products.map(product =>
                  <Product
                    id={product.id}
                    image={product.image}
                    key={product.id}
                    price={product.price}
                    title={product.title}
                  />
                )
              }
            </Products>
          : null
      }
    </Container>
  )
}