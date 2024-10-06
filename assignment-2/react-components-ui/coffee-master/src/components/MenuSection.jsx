const MenuSection = () => {
    const coffeeMenu = [
        { name: 'Cappuccino', price: '$49' },
        { name: 'Americano', price: '$49' },
        { name: 'Espresso', price: '$49' },
        { name: 'Macchiato', price: '$49' },
        { name: 'Mocha', price: '$49' },
        { name: 'Coffee Latte', price: '$49' },
        { name: 'Piccolo Latte', price: '$49' },
        { name: 'Ristretto', price: '$49' },
        { name: 'Affogato', price: '$49' },
    ];

    return (
        <section className="menu-area section-gap" id="coffee">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="menu-content pb-60 col-lg-10">
                        <div className="title text-center">
                            <h1 className="mb-10">What kind of Coffee we serve for you</h1>
                            <p>Who are in extremely love with eco friendly system.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {coffeeMenu.map((coffee, index) => (
                        <div className="col-lg-4" key={index}>
                            <div className="single-menu">
                                <div className="title-div justify-content-between d-flex">
                                    <h4>{coffee.name}</h4>
                                    <p className="price float-right">{coffee.price}</p>
                                </div>
                                <p>Usage of the Internet is becoming more common due to rapid advance.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
