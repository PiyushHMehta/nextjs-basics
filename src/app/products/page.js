// params give dynamic routes, searchParams give query params/search params
// getting current url path and searchParams in server componenet
function Products({params, searchParams}) {
    // http://localhost:3000/products?search=1
    // console.log(params);    // gives nothing(since in procudt page and not product details page)
    // console.log(searchParams.search);    // 1
    return (
        <div>Products</div>
    )
}

export default Products