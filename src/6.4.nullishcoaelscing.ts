let speed: number | null = null;
let ride = {
    // Falsy (undefined, null,'',false,0)
    speed:speed||30 // this will take 30 as input instead of 0 even when 0 is possible value for speed as 0 is falsy value
}

// a better way
ride = {
    speed: speed !== null ? speed : 30
}
// yet another better way
ride = {
    // Nullish coalescing operator
    speed:speed??30 // if speed is not null than the value of speed property is equal to speed variable else it is equal to 30
}