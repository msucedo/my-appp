function MyButton() {
    // logic
    return (
        // ui
        <button>I'm a button</button>
    );
}

// array of products
const products = [
    { title: 'Cabbage', id:1 },
    { title: 'Garlic', id: 2},
    { title: 'Apple', id: 3},
];

export default function MyApp() {
    // logic - javascript
    let paramClassname = "avata"
    const paramImgURL = 'https://i.imgur.com/yXOvdOSs.jpg'
    let paramSize = 90
    
    if (paramClassname === "avata") {
        paramClassname = "avatar"
    } else {
        // else logic
    }

    const listItems = products.map(product =>
        <li key={product.id}>
            {product.title}
        </li>    
    );

    return (
        //ui - jsx
        <>
            <h1>welcome to my app {/*escaping to javascript*/}</h1>
            <MyButton />
            <img
                className={paramClassname}
                src={paramImgURL}
                alt={"photofromuser"}
                style={{
                    width: {paramSize},
                    height: {paramSize}
                }}
            />
            <ul>{listItems}</ul>
        </>
    );
}