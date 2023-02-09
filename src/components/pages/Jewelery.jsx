import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../state/features/jewelerySlice'
import { useEffect } from 'react'
import { Container, Heading, Wrapper, Loader, Overlay, Products } from '../utilities/ProductPage'
import { Product } from '../utilities/Product'

export const Jewelery = () => {
  const dispatch = useDispatch()
  const jewelery = useSelector(state => state.jewelery)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <Container>
      <Heading>
        Jewelery
      </Heading>
      {
        jewelery.loading
          ? <Wrapper>
              <Overlay />
              <Loader />
            </Wrapper>
          : null
      }
      {
        !jewelery.loading && jewelery.error
          ? <Wrapper>
              Something went wrong.
            </Wrapper>
          : null
      }
      {
        !jewelery.loading && jewelery.products.length 
          ? <Products>
              {
                jewelery.products.map(product =>
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