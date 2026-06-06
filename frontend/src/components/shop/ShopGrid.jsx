import ShopCard from "./ShopCard";

function ShopGrid({ shops }) {
  return (
    <div className="shops-grid">

      {shops.map((shop) => (
        <ShopCard
          key={shop.id}
          shop={shop}
        />
      ))}

    </div>
  );
}

export default ShopGrid;