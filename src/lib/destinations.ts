import andaman from "@/assets/andaman.jpg.asset.json";
import chandigarh from "@/assets/chandigarh.jpg.asset.json";
import daman from "@/assets/daman-coast.jpg.asset.json";
import delhi from "@/assets/delhi.jpg.asset.json";
import kashmir from "@/assets/kashmir.jpg.asset.json";
import ladakh from "@/assets/ladakh-correct.jpg.asset.json";
import lakshadweep from "@/assets/lakshadweep-island.jpg.asset.json";
import puducherry from "@/assets/puducherry.jpg.asset.json";

export type Destination = { id: string; name: string; image: string; alt: string; description: string; category: string; months: number[]; season: string; url: string; highlights: string[]; credit: string; };
export const destinations: Destination[] = [
  { id: "andaman", name: "Andaman and Nicobar Islands", image: andaman.url, alt: "Turquoise water and mangroves in the Andaman Islands", description: "Turquoise waters, coral reefs and islands that feel a world away.", category: "Islands & beaches", months: [10,11,12,1,2,3,4,5], season: "Oct – May", url: "https://tourism.andamannicobar.gov.in/", highlights: ["Swaraj Dweep", "Radhanagar Beach", "Cellular Jail"], credit: "Unsplash" },
  { id: "chandigarh", name: "Chandigarh", image: chandigarh.url, alt: "Sculptural stone arches in Chandigarh's Rock Garden", description: "Thoughtful architecture, green gardens and the City Beautiful.", category: "Heritage & cities", months: [10,11,12,1,2,3], season: "Oct – Mar", url: "https://chandigarhtourism.gov.in/", highlights: ["Rock Garden", "Sukhna Lake", "Capitol Complex"], credit: "Unsplash" },
  { id: "daman", name: "Dadra and Nagar Haveli and Daman and Diu", image: daman.url, alt: "The seaside promenade and coast in Daman", description: "Coastal escapes, Portuguese heritage and forest landscapes.", category: "Islands & beaches", months: [10,11,12,1,2,3], season: "Oct – Mar", url: "https://www.dnhddtourism.in/", highlights: ["Diu Fort", "Daman's seafront", "Silvassa"], credit: "DNH & DD Tourism" },
  { id: "delhi", name: "Delhi", image: delhi.url, alt: "India Gate at sunset in Delhi", description: "Ancient stories, grand monuments and unforgettable local flavours.", category: "Heritage & cities", months: [10,11,12,1,2,3], season: "Oct – Mar", url: "https://delhitourism.gov.in/", highlights: ["Red Fort", "Qutub Minar", "Chandni Chowk"], credit: "Unsplash" },
  { id: "kashmir", name: "Jammu and Kashmir", image: kashmir.url, alt: "Houseboats on Dal Lake below the snow-covered Kashmir mountains", description: "Alpine valleys, quiet lakes and a little everyday wonder.", category: "Mountains & nature", months: [4,5,6,9,10], season: "Apr – Jun · Sep – Oct", url: "https://jandktourism.jk.gov.in/", highlights: ["Dal Lake", "Pahalgam", "Jammu's temples"], credit: "Unsplash", },
  { id: "ladakh", name: "Ladakh", image: ladakh.url, alt: "A rider on a high-altitude road through Ladakh's mountains", description: "Himalayan horizons, ancient monasteries and the open road.", category: "Mountains & nature", months: [4,5,6,7,9,10], season: "Apr – Jul · Sep – Oct", url: "https://tourism.ladakh.gov.in/", highlights: ["Pangong Tso", "Nubra Valley", "Thiksey Monastery"], credit: "Unsplash" },
  { id: "lakshadweep", name: "Lakshadweep", image: lakshadweep.url, alt: "Aerial island view of Lakshadweep surrounded by the Arabian Sea", description: "Coral lagoons, gentle island rhythms and endless shades of blue.", category: "Islands & beaches", months: [9,10,11,12,1,2,3,4,5], season: "Sep – May", url: "https://lakshadweep.gov.in/tourism/", highlights: ["Agatti", "Kadmat", "Kavaratti"], credit: "Lakshadweep Administration" },
  { id: "puducherry", name: "Puducherry", image: puducherry.url, alt: "French colonial yellow facade in Puducherry", description: "French-quarter lanes, seaside mornings and a slower kind of journey.", category: "Heritage & cities", months: [10,11,12,1,2,3], season: "Oct – Mar", url: "https://tourism.py.gov.in/", highlights: ["French Quarter", "Promenade Beach", "Sri Aurobindo Ashram"], credit: "Unsplash" },
];
export const heroImage = kashmir.url;
export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];