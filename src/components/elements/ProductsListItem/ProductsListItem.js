import Button from 'components/ui-kit/Button/Button';
import styled from 'styled-components';

const StyledContainer = styled.li`
  width: 25%;
  padding: 0 15px;
  margin-bottom: 30px;

  .product-wrapper {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    padding: 15px;
    height: 100%;
    box-shadow: 0 0 15px rgba(185, 185, 185, 0.43);
    box-sizing: border-box;
  }

  .product-image {
    max-width: 100%;
    height: auto;
    cursor: pointer;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .product-name {
    margin-top: 10px;
    margin-bottom: 12px;
    font-size: 16px;
    font-weight: bold;
    line-height: 1;
    text-transform: uppercase;
    color: #000;
    min-height: 35px;
    cursor: pointer;
  }

  .controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .product-price {
    color: #615D49;
    font-size: 15px;
    font-weight: 700;
  }

  .product-ingredients {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin-bottom: 15px;
  }

  .product-ingredients-text::first-letter {
    text-transform: uppercase;
  }

  .product-additional-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`

 const ProductsListItem = ({ product }) => {
  return (
        <StyledContainer>
          <div className='product-wrapper'>
            <img
              className='product-image'
              src={product.imageSrc}
              alt={product.name}
            />
            <div className='product-info'>
              <h2 className='product-name'>
                {product.name}
              </h2>
              <div className='product-additional-info'>
                <div className='product-ingredients'>
                  <p className='product-ingredients-text'>
                    {
                      product.ingredients.map((ingredient) => (
                        ingredient.name
                      )).join(', ')
                    }
                  </p>
                </div>
                <div className='controls'>
                  <Button theme='primary'>Купить</Button>
                  <p className='product-price'>{product.price} руб.</p>
                </div>
              </div>
            </div>
          </div>
        </StyledContainer>
  )
}

export default ProductsListItem;