import React, { useState } from 'react'

const data = [
    {
        id: 1,
        title: 'buttermilk pancakes',
        category: 'breakfast',
        price: 15.99,
        img: './images/item-1.jpeg',
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: 'diner double',
        category: 'lunch',
        price: 13.99,
        img: './images/item-2.jpeg',
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: 'godzilla milkshake',
        category: 'shakes',
        price: 6.99,
        img: './images/item-3.jpeg',
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: 'country delight',
        category: 'breakfast',
        price: 20.99,
        img: './images/item-4.jpeg',
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: 'egg attack',
        category: 'lunch',
        price: 22.99,
        img: './images/item-5.jpeg',
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: 'oreo dream',
        category: 'shakes',
        price: 18.99,
        img: './images/item-6.jpeg',
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: 'bacon overflow',
        category: 'breakfast',
        price: 8.99,
        img: './images/item-7.jpeg',
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: 'american classic',
        category: 'lunch',
        price: 12.99,
        img: './images/item-8.jpeg',
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: 'quarantine buddy',
        category: 'shakes',
        price: 16.99,
        img: './images/item-9.jpeg',
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
]
const Menu = () => {
    const [menuData] = useState(data);
    const [filteredData, setFilteredData] = useState(menuData);

    return (
        <div  style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px" }}>
            <h1 style={{ color: "#333", marginBottom: "20px" }}>Our Menu</h1>
            <div style={{ marginBottom: "20px" }}>
                <button style={buttonStyle} onClick={() => setFilteredData(data)}>All</button>
                <button style={buttonStyle} onClick={() => setFilteredData(menuData.filter((item) => item.category === "breakfast"))}>Breakfast</button>
                <button style={buttonStyle} onClick={() => setFilteredData(menuData.filter((item) => item.category === "lunch"))}>Lunch</button>
                <button style={buttonStyle} onClick={() => setFilteredData(menuData.filter((item) => item.category === "shakes"))}>Shakes</button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", justifyContent: "center" }}>
                {filteredData.map((item) => (
                    <div key={item.id} style={{ margin: "auto", border: "1px solid #ddd", padding: "10px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", maxWidth: "300px" }}>
                        {/* <img src={item.img} alt={item.title} style={{ width: "100%", borderRadius: "8px 8px 0 0", marginBottom: "10px" }} /> */}
                        <h2 style={{ color: "#333", fontSize: "1.2em" }}>{item.title}</h2>
                        <p style={{ color: "#999", fontWeight: "bold", fontSize: "1em" }}>${item.price}</p>
                        <p style={{ color: "#666", fontSize: "0.9em" }}>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const buttonStyle = {
    margin: "0 10px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#333",
    color: "#fff",
    fontSize: "1em",
};

export default Menu