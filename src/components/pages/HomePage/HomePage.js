import CategoriesList from 'components/elements/CategoriesList/CategoriesList';
import ProductsList from 'components/elements/ProductsList/ProductsList';

 const HomeContent = () => {
  return (
        <main>
          <CategoriesList />
          <ProductsList />
        </main>
  )
}

export default HomeContent;