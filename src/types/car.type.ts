

export default interface Car {
    id: string;
    name: string;
    category: "Popular Car" | "Recommended Car";
    type: "Sport" | "SUV" | "MPV" | "Sedan" | "Coupe"| "Hatchback"
    image: string;
    gear: "Manual" | "Automatic";
    fuel: string;
    capacity: number;
    pricePerDay: number;
    liked?: boolean;
    

}