import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const img = (id) => `https://images.unsplash.com/${id}?w=300&q=80`;

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', image: img('photo-1593482892290-f54927ae1bb6'), cost: 15 },
      { name: 'Spider Plant', image: img('photo-1572688484438-313a6e50c333'), cost: 12 },
      { name: 'Peace Lily', image: img('photo-1593691509543-c55fb32d8de5'), cost: 18 },
      { name: 'Boston Fern', image: img('photo-1616690248297-a2d4b9a6c4b9'), cost: 14 },
      { name: 'Rubber Plant', image: img('photo-1598880940080-ff9a29891b85'), cost: 20 },
      { name: 'Aloe Vera', image: img('photo-1596547609652-9cf5d8d76921'), cost: 10 },
    ],
  },
  {
    category: 'Aromatic Plants',
    plants: [
      { name: 'Lavender', image: img('photo-1611909023032-2d6b3134ecba'), cost: 16 },
      { name: 'Jasmine', image: img('photo-1592729645009-b96d1e63d14b'), cost: 17 },
      { name: 'Mint', image: img('photo-1628556270448-4d4e4148e1b1'), cost: 8 },
      { name: 'Rosemary', image: img('photo-1515586000433-45406d8e6662'), cost: 11 },
      { name: 'Basil', image: img('photo-1618164435735-413d3b066c9a'), cost: 9 },
      { name: 'Lemon Balm', image: img('photo-1600411833196-7c1f6b1a8b90'), cost: 10 },
    ],
  },
  {
    category: 'Low Maintenance Plants',
    plants: [
      { name: 'ZZ Plant', image: img('photo-1632207691143-643e2a9a9361'), cost: 22 },
      { name: 'Pothos', image: img('photo-1572688484438-313a6e50c333'), cost: 13 },
      { name: 'Cast Iron Plant', image: img('photo-1604762524889-3e2fcc145683'), cost: 19 },
      { name: 'Jade Plant', image: img('photo-1509423350716-97f9360b4e09'), cost: 15 },
      { name: 'Succulent Mix', image: img('photo-1459156212016-c812468e2115'), cost: 12 },
      { name: 'Money Tree', image: img('photo-1512428813834-c702c7702b78'), cost: 25 },
    ],
  },
];

export function Navbar({ onNavigate }) {
  const items = useSelector((s) => s.cart.items);
  const totalQty = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <nav className="navbar">
      <span className="brand">Paradise Nursery</span>
      <div className="nav-links">
        <a onClick={() => onNavigate('home')}>Home</a>
        <a onClick={() => onNavigate('plants')}>Plants</a>
        <a onClick={() => onNavigate('cart')} className="cart-link">
          🛒 <span className="cart-count">{totalQty}</span>
        </a>
      </div>
    </nav>
  );
}

function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((s) => s.cart.items);
  const inCart = (name) => cartItems.some((i) => i.name === name);

  return (
    <div>
      <Navbar onNavigate={onNavigate} />
      <div className="product-grid-wrapper">
        {plantsArray.map((group) => (
          <section key={group.category}>
            <h2 className="category-title">{group.category}</h2>
            <div className="product-grid">
              {group.plants.map((plant) => (
                <div className="product-card" key={plant.name}>
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p className="price">${plant.cost}</p>
                  <button
                    disabled={inCart(plant.name)}
                    onClick={() => dispatch(addItem(plant))}
                  >
                    {inCart(plant.name) ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
export default ProductList;