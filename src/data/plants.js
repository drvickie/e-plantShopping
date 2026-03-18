import snakePlant from "../assets/images/snake-plant.jpeg";
import peaceLily from "../assets/images/peace-lily.jpeg";
import aloeVera from "../assets/images/aloe-vera.jpeg";
import echeveria from "../assets/images/echeveria.jpeg";
import orchid from "../assets/images/orchid.jpeg";
import anthurium from "../assets/images/anthurium.jpeg";
const plants = {
  Indoor: [
    { id: 1, name: "Snake Plant", price: 10, image: snakePlant },
    { id: 2, name: "Peace Lily", price: 12, image: peaceLily }
  ],
  Succulents: [
    { id: 3, name: "Aloe Vera", price: 8, image: aloeVera },
    { id: 4, name: "Echeveria", price: 9, image: echeveria }
  ],
  Flowering: [
    { id: 5, name: "Orchid", price: 15, image: orchid },
    { id: 6, name: "Anthurium", price: 14, image: anthurium }
  ]
};

export default plants;