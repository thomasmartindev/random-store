import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../state/features/electronicsSlice'
import { useEffect } from 'react'
import { Container, Heading, Wrapper, Loader, Overlay, Products } from '../utilities/ProductPage'
import { Product } from '../utilities/Product'

export const Electronics = () => {
  const dispatch = useDispatch()
  const electronics = useSelector(state => state.electronics)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <Container>
      <Heading>
        Electronics
      </Heading>
      {
        electronics.loading
          ? <Wrapper>
              <Overlay />
              <Loader />
            </Wrapper>
          : null
      }
      {
        !electronics.loading && electronics.error
          ? <Wrapper>
              Something went wrong.
            </Wrapper>
          : null
      }
      {
        !electronics.loading && electronics.products.length 
          ? <Products>
              {
                electronics.products.map(product =>
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