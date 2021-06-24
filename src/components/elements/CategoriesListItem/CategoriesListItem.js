import cn from 'classnames';
import styled from 'styled-components';

const StyledContainer = styled.li`
  margin-right: 10px;
  margin-bottom: 10px;

  &:last-child {
    margin-right: 0;
  }

  .button {
    display: inline-block;
    padding: 11px 18px;
    cursor: pointer;
    text-transform: uppercase;
    border: 1px solid #817E71;
    border-radius: 20px;
    color: #817E71;
    text-align: center;
    transition: all .3s ease;
  }

  .button:hover {
    background-color: #817E71;
    color: #fff;
  }

  .active {
    background-color: #f90;
    color: #fff;
    border-color: #f90;
  }

  .active:hover {
    background-color: #f90;
    color: #fff;
    border-color: #f90;
  }
`

 const CategoriesListItem = ({ category, isActive, onClick }) => {
  return (
        <StyledContainer>
          <button
           className={cn('button', {
            ['active'] : isActive
            })}
            onClick={onClick}
          >
            {category.name}
          </button>  
        </StyledContainer>
  )
}

export default CategoriesListItem;