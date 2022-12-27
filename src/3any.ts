// let hero // here "hero" is any

let hero: string // here inference won't work so declare the type

function getHero() {
    return 'thor'
}

hero = getHero()

export {}