const filters = {
    every: {
        label: 'WSZYSTKIE',
        predicate: advice => true
    },
    cat: {
        label: 'koty',
        predicate: advice => advice.tag === 'kot'
    },
    dog: {
        label: 'psy',
        predicate: advice => advice.tag === 'pies'
    },
    degu: {
        label: 'koszatniczki',
        predicate: advice => advice.tag === 'koszatniczka'
    },
    snake: {
        label: 'węże',
        predicate: advice => advice.tag === 'wąż'
    },
    spider: {
        label: 'pająki',
        predicate: advice => advice.tag === 'pająk'
    },
    hamster: {
        label: 'chomiki',
        predicate: advice => advice.tag === 'chomik'
    },
};

export default filters