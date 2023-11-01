export interface IPlantableStage {
    time: number,
    src: string,
}

export interface IPlantable {
    name: string,
    price: number,
    quality: number,
    stages: {
        growing: IPlantableStage,
        ripe: IPlantableStage,
        wilted: IPlantableStage,
    }
}

export const plantables: { [key: string]: IPlantable } = {
    strawberry: {
        name: 'strawberry',
        price: 10,
        quality: 1,
        stages: {
            growing: {time: 0, src: 'sapling.svg'},
            ripe: {time: 5, src: 'strawberry.svg'},
            wilted: {time: 10, src: 'strawberry-brown.svg'},
        }
    },
    carrot: {
        name: 'carrot',
        price: 10,
        quality: 1,
        stages: {
            growing: {time: 0, src: 'sapling.svg'},
            ripe: {time: 5, src: 'carrot.svg'},
            wilted: {time: 10, src: 'carrot-wilted.svg'},
        }
    },
    pineapple: {
        name: 'pineapple',
        price: 10,
        quality: 1,
        stages: {
            growing: {time: 0, src: 'sapling.svg'},
            ripe: {time: 20, src: 'pineapple.svg'},
            wilted: {time: 40, src: 'lettuce.svg'},
        }
    },
    dirt: {
        name: 'dirt',
        price: 0,
        quality: 1,
        stages: {
            growing: {time: 0, src: 'dirt.svg'},
            ripe: {time: 0, src: 'dirty.svg'},
            wilted: {time: 0, src: 'dirty.svg'},
        }
    },
}