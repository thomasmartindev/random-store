import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../state/features/mensClothingSlice'
import { useEffect } from 'react'
import { Container, Heading, Wrapper, Loader, Overlay, Products } from '../utilities/ProductPage'
import { Product } from '../utilities/Product'

export const MensClothing = () => {
  const dispatch = useDispatch()
  const mensClothing = useSelector(state => state.mensClothing)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <Container>
      <Heading>
        Men's Clothing
      </Heading>
      {
        mensClothing.loading
          ? <Wrapper>
              <Overlay />
              <Loader />
            </Wrapper>
          : null
      }
      {
        !mensClothing.loading && mensClothing.error
          ? <Wrapper>
              Something went wrong.
            </Wrapper>
          : null
      }
      {
        !mensClothing.loading && mensClothing.products.length 
          ? <Products>
              {
                mensClothing.products.map(product =>
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