import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredItems = items.filter(item => {
    if (selectedCategory === 'All') {
      return items;
    }
    else {
      return item.category === selectedCategory
    }});

  return (
    <div className="ShoppingList">
      <div className="Filter" onChange={e => setSelectedCategory(e.target.value)}>
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
