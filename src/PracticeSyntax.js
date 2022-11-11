function MyButton() {
    // logic
    return (
        // ui
        <button>I'm a button</button>
    );
}

export default function MyApp() {
    // logic - javascript
    let paramClassname = "avata"
    const paramImgURL = 'https://i.imgur.com/yXOvdOSs.jpg'
    let paramSize = 90
    
    if (paramClassname === "avata") {
        paramClassname = "avatar"
    } else {
        // logic
    }

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
        </>
    );
}