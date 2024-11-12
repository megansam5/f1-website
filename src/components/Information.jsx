const driverImages = [
  {
    code: "max_verstappen",
    url: "https://media.api-sports.io/formula-1/drivers/25.png",
  },
  {
    code: "perez",
    url: "https://media.api-sports.io/formula-1/drivers/10.png",
  },
  {
    code: "leclerc",
    url: "https://media.api-sports.io/formula-1/drivers/34.png",
  },
  {
    code: "sainz",
    url: "https://media.api-sports.io/formula-1/drivers/24.png",
  },
  {
    code: "norris",
    url: "https://media.api-sports.io/formula-1/drivers/49.png",
  },
  {
    code: "piastri",
    url: "https://media.api-sports.io/formula-1/drivers/97.png",
  },
  {
    code: "russell",
    url: "https://media.api-sports.io/formula-1/drivers/51.png",
  },
  {
    code: "alonso",
    url: "https://media.api-sports.io/formula-1/drivers/4.png",
  },
  {
    code: "hamilton",
    url: "https://media.api-sports.io/formula-1/drivers/20.png",
  },
  {
    code: "stroll",
    url: "https://media.api-sports.io/formula-1/drivers/31.png",
  },
  {
    code: "tsunoda",
    url: "https://media.api-sports.io/formula-1/drivers/82.png",
  },
  {
    code: "bearman",
    url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OLIBEA01_Oliver_Bearman/olibea01.png.transform/2col/image.png",
  },
  {
    code: "hulkenberg",
    url: "https://media.api-sports.io/formula-1/drivers/6.png",
  },
  {
    code: "kevin_magnussen",
    url: "https://media.api-sports.io/formula-1/drivers/2.png",
  },
  {
    code: "albon",
    url: "https://media.api-sports.io/formula-1/drivers/50.png",
  },
  { code: "zhou", url: "https://media.api-sports.io/formula-1/drivers/83.png" },
  {
    code: "ricciardo",
    url: "https://media.api-sports.io/formula-1/drivers/14.png",
  },
  { code: "ocon", url: "https://media.api-sports.io/formula-1/drivers/28.png" },
  {
    code: "gasly",
    url: "https://media.api-sports.io/formula-1/drivers/36.png",
  },
  {
    code: "bottas",
    url: "https://media.api-sports.io/formula-1/drivers/5.png",
  },
  {
    code: "sargeant",
    url: "https://media.api-sports.io/formula-1/drivers/92.png",
  },
  {
    code: "colapinto",
    url: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2024Drivers/colapinto"
  },
  {
    code: "lawson",
    url: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2024Drivers/lawson"
  },
];

const constructorImages = [
  {
    code: "red_bull",
    url: "https://media.api-sports.io/formula-1/teams/1.png",
  },
  { code: "ferrari", url: "https://media.api-sports.io/formula-1/teams/3.png" },
  { code: "mclaren", url: "https://media.api-sports.io/formula-1/teams/2.png" },
  {
    code: "mercedes",
    url: "https://media.api-sports.io/formula-1/teams/5.png",
  },
  {
    code: "aston_martin",
    url: "https://media.api-sports.io/formula-1/teams/17.png",
  },
  { code: "rb", url: "https://media.api-sports.io/formula-1/teams/7.png" },
  { code: "haas", url: "https://media.api-sports.io/formula-1/teams/14.png" },
  {
    code: "williams",
    url: "https://media.api-sports.io/formula-1/teams/12.png",
  },
  { code: "sauber", url: "https://media.api-sports.io/formula-1/teams/18.png" },
  { code: "alpine", url: "https://media.api-sports.io/formula-1/teams/13.png" },
];

const circuitInformation = [
  {
    name: "Bahrain International Circuit",
    country: "Bahrain",
    city: "Sakhir",
    date: "2nd March",
    laps: 57,
    url: "https://media.api-sports.io/formula-1/circuits/2.png",
    website: "https://www.formula1.com/en/racing/2024/Bahrain.html",
  },
  {
    name: "Jeddah Corniche Circuit",
    country: "Saudi Arabia",
    city: "Jeddah",
    date: "9th March",
    laps: 50,
    url: "https://media.api-sports.io/formula-1/circuits/29.png",
    website: "https://www.formula1.com/en/racing/2024/Saudi_Arabia.html",
  },
  {
    name: "Albert Park Circuit",
    country: "Australia",
    city: "Melbourne",
    date: "24th March",
    laps: 58,
    url: "https://media.api-sports.io/formula-1/circuits/1.png",
    website: "https://www.formula1.com/en/racing/2024/Australia.html",
  },
  {
    name: "Suzuka International Racing Course",
    country: "Japan",
    city: "Suzuka",
    date: "7th April",
    laps: 53,
    url: "https://media.api-sports.io/formula-1/circuits/19.png",
    website: "https://www.formula1.com/en/racing/2024/Japan.html",
  },
  {
    name: "Shanghai International Circuit",
    country: "China",
    city: "Shanghai",
    date: "21st April",
    laps: 56,
    url: "https://media.api-sports.io/formula-1/circuits/4.png",
    website: "https://www.formula1.com/en/racing/2024/China.html",
  },
  {
    name: "Miami International Autodrome",
    country: "United States",
    city: "Miami",
    date: "5th May",
    laps: 57,
    url: "https://media.api-sports.io/formula-1/circuits/31.png",
    website: "https://www.formula1.com/en/racing/2024/Miami.html",
  },
  {
    name: "Autodromo Enzo e Dino Ferrari",
    country: "Italy",
    city: "Imola",
    date: "19th May",
    laps: 63,
    url: "https://media.api-sports.io/formula-1/circuits/27.png",
    website: "https://www.formula1.com/en/racing/2024/EmiliaRomagna.html",
  },
  {
    name: "Circuit de Monaco",
    country: "Monaco",
    city: "Monte-Carlo",
    date: "26th May",
    laps: 78,
    url: "https://media.api-sports.io/formula-1/circuits/7.png",
    website: "https://www.formula1.com/en/racing/2024/Monaco.html",
  },
  {
    name: "Circuit Gilles-Villeneuve",
    country: "Canada",
    city: "Montreal",
    date: "9th June",
    laps: 70,
    url: "https://media.api-sports.io/formula-1/circuits/9.png",
    website: "https://www.formula1.com/en/racing/2024/Canada.html",
  },
  {
    name: "Circuit de Barcelona-Catalunya",
    country: "Spain",
    city: "Montmelo",
    date: "23rd June",
    laps: 66,
    url: "https://media.api-sports.io/formula-1/circuits/6.png",
    website: "https://www.formula1.com/en/racing/2024/Spain.html",
  },
  {
    name: "Red Bull Ring",
    country: "Austria",
    city: "Spielberg",
    date: "30th June",
    laps: 71,
    url: "https://media.api-sports.io/formula-1/circuits/11.png",
    website: "https://www.formula1.com/en/racing/2024/Austria.html",
  },
  {
    name: "Silverstone Circuit",
    country: "Great Britain",
    city: "Silverstone",
    date: "7th July",
    laps: 52,
    url: "https://media.api-sports.io/formula-1/circuits/12.png",
    website: "https://www.formula1.com/en/racing/2024/Great_Britain.html",
  },
  {
    name: "Hungaroring",
    country: "Hungary",
    city: "Mogyorod",
    date: "21st July ",
    laps: 70,
    url: "https://media.api-sports.io/formula-1/circuits/14.png",
    website: "https://www.formula1.com/en/racing/2024/Hungary.html",
  },
  {
    name: "Circuit de Spa-Francorchamps",
    country: "Belgium",
    city: "Stavelot",
    date: "28th July",
    laps: 44,
    url: "https://media.api-sports.io/formula-1/circuits/15.png",
    website: "https://www.formula1.com/en/racing/2024/Belgium.html",
  },
  {
    name: "Circuit Zandvoort",
    country: "Netherlands",
    city: "Zandvoort",
    date: "25th August",
    laps: 72,
    url: "https://media.api-sports.io/formula-1/circuits/5.png",
    website: "https://www.formula1.com/en/racing/2024/Netherlands.html",
  },
  {
    name: "Autodromo Nazionale Monza",
    country: "Italy",
    city: "Monza",
    date: "1st September",
    laps: 53,
    url: "https://media.api-sports.io/formula-1/circuits/16.png",
    website: "https://www.formula1.com/en/racing/2024/Italy.html",
  },
  {
    name: "Baku City Circuit",
    country: "Azerbaijan",
    city: "Baku",
    date: "15th September",
    laps: 51,
    url: "https://media.api-sports.io/formula-1/circuits/8.png",
    website: "https://www.formula1.com/en/racing/2024/Azerbaijan.html",
  },
  {
    name: "Marina Bay Street Circuit",
    country: "Singapore",
    city: "Singapore",
    date: "22nd September",
    laps: 62,
    url: "https://media.api-sports.io/formula-1/circuits/17.png",
    website: "https://www.formula1.com/en/racing/2024/Singapore.html",
  },
  {
    name: "Circuit of the Americas",
    country: "United States",
    city: "Austin",
    date: "20th October",
    laps: 56,
    url: "https://media.api-sports.io/formula-1/circuits/20.png",
    website: "https://www.formula1.com/en/racing/2024/United_States.html",
  },
  {
    name: "Autódromo Hermanos Rodríguez",
    country: "Mexico",
    city: "Mexico City",
    date: "27th October",
    laps: 71,
    url: "https://media.api-sports.io/formula-1/circuits/21.png",
    website: "https://www.formula1.com/en/racing/2024/Mexico.html",
  },
  {
    name: "Autódromo José Carlos Pace",
    country: "Brazil",
    city: "São Paulo",
    date: "3rd November",
    laps: 71,
    url: "https://media.api-sports.io/formula-1/circuits/22.png",
    website: "https://www.formula1.com/en/racing/2024/Brazil.html",
  },
  {
    name: "Las Vegas Strip Circuit",
    country: "United States",
    city: "Las Vegas",
    date: "23rd November",
    laps: 50,
    url: "https://media.api-sports.io/formula-1/circuits/32.png",
    websit: "https://www.formula1.com/en/racing/2024/Las_Vegas.html",
  },
  {
    name: "Lusail International Circuit",
    country: "Qatar",
    city: "Al Daayen",
    date: "1st December",
    laps: 57,
    url: "https://media.api-sports.io/formula-1/circuits/30.png",
    website: "https://www.formula1.com/en/racing/2024/Qatar.html",
  },
  {
    name: "Yas Marina Circuit",
    country: "United Arab Emirates",
    city: "Abu Dhabi",
    date: "8th December",
    laps: 58,
    url: "https://media.api-sports.io/formula-1/circuits/23.png",
    website:
      "https://www.formula1.com/en/racing/2024/United_Arab_Emirates.html",
  },
];


export { driverImages, constructorImages, circuitInformation };
