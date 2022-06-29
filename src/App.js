import React from 'react';
import Product from './Product';
import pizza from './assets/pizza.png';
import tiramisu from './assets/tiramisu.png';
import pasta from './assets/pasta.png';
import { ReactComponent as ShoppingCart } from './assets/shop.svg';
import './App.css';

function App() {
    const [messageValue, setMessageValue] = React.useState('');
    const [checkedTerms, toggleCheckedTerms] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);

    function sendForm() {
        console.log(`The message: "${messageValue}" has been sent successfully.`);
        setSubmitted(true);
    }

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Blog</a>
                    </li>
                </ul>
                <ShoppingCart className="shopping-cart-icon" />
            </nav>
            <header>
                <h1>Italian Food</h1>
                <button
                    type="button"
                    onClick={() => console.log("This button works")}
                >
                    Shop for food
                </button>
            </header>
            <main>
                <Product
                    image={pizza}
                    title="Pizza"
                    description="Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as various types of sausage, anchovies, mushrooms, onions, olives, vegetables, meat, ham, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta. A person who makes pizza is known as a pizzaiolo."
                />
                <Product
                    image={tiramisu}
                    title="Tiramisu"
                    description="Tiramisu is a coffee-flavoured Italian dessert. It is made of ladyfingers (savoiardi) dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese, flavoured with cocoa. The recipe has been adapted into many varieties of cakes and other desserts. Its origins are often disputed among Italian regions Veneto and Friuli Venezia Giulia."
                />
                <Product
                    image={pasta}
                    title="Pasta"
                    description="Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking. Rice flour, or legumes such as beans or lentils, are sometimes used in place of wheat flour to yield a different taste and texture, or as a gluten-free alternative. Pasta is a staple food of Italian cuisine."
                />
            </main>
            <footer>
                <div className="form-container">
                    <h2>Contact</h2>

                    <form>
                        <input
                            type="text"
                            placeholder="Your message"
                            name="message"
                            className={messageValue.length > 20 ? 'input-error' : ''}
                            value={messageValue}
                            onChange={(e) => setMessageValue(e.target.value)}
                        />
                        {messageValue.length > 20 && <p className="error-message">This message is too long</p>}

                        <label htmlFor="terms-and-conditions">
                            <input
                                type="checkbox"
                                name="terms-and-conditions"
                                id="terms-and-conditions"
                                checked={checkedTerms}
                                onChange={() => toggleCheckedTerms(!checkedTerms)}
                            />

                            I agree with the terms and conditions
                        </label>

                        <button
                            type="submit"
                            disabled={!checkedTerms}
                            onClick={sendForm}
                        >
                            Send
                        </button>
                    </form>
                </div>
            </footer>
        </>
    );
}

export default App;