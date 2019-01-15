
let cropInfo = [
    {
        crop: "Blueberries",
        nativeTo: "Origin: North America,",
        latin: "Latin: Vaccinium corymbosum",
        historicalFact: "Blueberries are one of only three berries native to North America. The continent’s earliest inhabitants were first to use the tiny berries, both fresh and dried, for their flavor, nutrition, and healing qualities.",
        medicinal: "Blueberries have the highest antioxidant capacity of all the popular fruits and vegetables. ",
        myth: "Native North Americans believed the Wild Blueberry had magical powers. Atop each berry is the base of its earlier flower, a calyx in the shape of a five-pointed star. Legend has it that during a time of starvation, the Great Spirit sent these “star berries” down from the heavens to relieve the hunger of his children.",
        georgia: "The blueberry industry is concentrated in the flatwoods of southeast Georgia. In 2014, Georgia produced more bueberries than any other state."
    },
    {
        crop: "Peaches",
        nativeTo: "Origin: Northwest China",
        latin: "Latin: Prunus persica",
        historicalFact: "The name 'persica' refers to its widespread cultivation in Persia (modern-day Iran), from where it was transplanted to Europe. One of the old meanings of Tao is 'peach'.",
        medicinal: "Peaches are a great source of zinc, which also has anti-aging properties. Eating peaches also may decrease neurodegenerative risk of disorders, such as Alzheimer's disease.",
        myth: "In Chinese mythology, the 'Peaches of Immortality' are consumed by people to make them immortal. The peach was also a standard symbol of female genitalia and was connected with Taoist sexual mysticism.",
        georgia: "Georgia ranks third, in the US, for peach production, but China wins for the world.",
    },
    {
        crop: "Honey",
        nativeTo: "Origin: Anywhere that has flowers or trees",
        latin: "Latin: apis mellifera (though, that's the honey bee)",
        historicalFact: "Humans have been cultivating honey since ancient times. A cave painting of a honey-seeker in Valencia Spain dates back 8,000 years.",
        medicinal: "Honey can be used to treat mild burns, chronic and acute coughs, and can also be useful for controlling the side effects of radiation and chemotherapy.",
        myth: "In Greek mythology, bees were considered messengers of the gods and honey to be a source of wisdom and poetry. The gods of Olympus lived on honey (nectar) and honey wine (ambrosia). In Greek, the word 'nectar' means 'victory over death'. ",
        georgia: "Decatur is Georgia's first officially 'Bee-Friendly city. Georgia also has a State Prison Beekeeping Program. Types of honey commonly sold in Georgia are Orange Blossom, Sourwood, Tupelo, Tulip Poplar, Clover, Gallberry, and Wildflower Honey."
    },
    {
        crop: "Collard Greens",
        nativeTo: "Origin: Greece",
        latin: "Latin: brassica oleracea",
        historicalFact: "They've been eaten for at least 2000 years, with evidence pointing to Ancient Greeks cultivating several varities.",
        medicinal: "Collard greens are tastier and more nutritious when cultivated in the colder months. They've have been associated with cancer prevention, detoxification, anti-inflammatory properties, heart health, and digestive support.",
        myth: "Eating collard greens on New Years Day is said to bring one good luck.",
        georgia: "A popular cultivar of collard greens includes the 'Georgia Southern'."
    },
]

// do we have some data on berries? (some)

// some takes 1 arg, a callback function
// this callback will run on every element in the array
// if ANY of the callbacks returns true on any element
// then some returns true
const anyOneHave = cropInfo.some((aPlant)=>{
    // console.log(aPlant.crop);
    if(aPlant.crop.indexOf("berries") > -1){
        return true;
    } else{
        return false;
    }
})

// console.log(anyOneHave);

// does every element have a set value for crop? (every)

// every takes one arg : a callback
// that callback will run on EVERY element in thee array
// if all return true, then every returns true
// if ANY return false, then every returns false

const everyoneHave = cropInfo.every((aPlant)=>{
    if(aPlant.crop !== undefined){
        return true;
    } else {
        return false;
    }
})

// console.log(everyoneHave);

// Find the first one that has an origin in China (find and findIndex) 

const inChina = cropInfo.find((aPlant)=>{
    // console.log(aPlant.nativeTo);
    if(aPlant.nativeTo.indexOf("China") > -1){
        return true;
    } else{
        return false;
    }
})

// console.log(inChina);

// Loop through all and add a prop of rank (Rank randomly - forEach)

// function callback(aPlant){
//     aPlant.rank = Math.floor(Math.random*10);
// };

// Array.prototype.forEach = function(callback){
//     for(let i = 0; i < array.length; i++){
//         callback(array[i]);
//     }
// };

// const rank = cropInfo.forEach((aPlant)=>{
//     aPlant.rank = Math.floor(Math.random()*10);
// });

// console.log(cropInfo);

// repeat above with (map)
// map takes 1 arg, a callback to run on every element
// map will return a new array
const newArray = cropInfo.map((aPlant)=>{
    aPlant.rank = Math.random();
    return aPlant;
});

// console.log(newArray);

// Reduce...
// takes two arguments
// 
const arr = [1,2,3,4,5];
const sum = arr.reduce((n,aggregateTotal)=>{
    aggregateTotal += n;
    return aggregateTotal;
})

// console.log(sum);

// get only those native to North America (DO NOT MUTATE - filter)
// filter is exactly the same as map EXCEPT 
// map pushes something on for every element while filter only pushes something on for elements that return true

const inNA = cropInfo.filter((aPlant)=>{
    return aPlant.nativeTo.indexOf("North America") > -1
})

console.log(inNA);


// Sort them by crop, asc (sort)

const arr2 = [1,4,5,3,2];

const sorted = arr2.sort();

console.log(sorted);
