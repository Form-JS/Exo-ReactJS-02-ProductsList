import style from './product-list.module.css';

const ProductListItem = ({ name, price, promo }) => {

    const priceEuro = price.toLocaleString('fr-be', {
        style: 'currency',
        currency: 'EUR'
    });

    return (
        <li>
            {name} {priceEuro} {promo && (
                <span className={style.promo}>(Promo)</span>
            )}
        </li>
    );
};

const ProductList = (props) => {
    const productsJSX = props.products.map(
        p => <ProductListItem {...p} key={p.id} />
    );

    return (
        <>
            <h3>Liste de produit : </h3>
            <ul>
                {productsJSX}
            </ul>
        </>
    );
};

ProductList.defaultProps = {
    products: []
};

export default ProductList;