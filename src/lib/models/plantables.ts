export interface IPlantableStage {
    time: number,
    src: string,
}

export interface IPlantable {
    name: string,
    stages: {
        growing: IPlantableStage,
        ripe: IPlantableStage,
        wilted: IPlantableStage,
    }
}

export const plantables = {
    strawberry: {
        name: 'strawberry',
        stages: {
            growing: {time: 0, src: 'sapling.svg'},
            ripe: {time: 5, src: 'strawberry.svg'},
            wilted: {time: 10, src: 'strawberry-brown.svg'},
        }
    },
    carrot: {
        name: 'carrot',
        stages: {
            growing: {time: 0, src: 'sapling.svg'},
            ripe: {time: 5, src: 'carrot.svg'},
            wilted: {time: 10, src: 'carrot-wilted.svg'},
        }
    },
    pineapple: {
        name: 'pineapple',
        stages: {
            growing: {time: 0, src: 'sapling.svg'},
            ripe: {time: 20, src: 'pineapple.svg'},
            wilted: {time: 40, src: 'lettuce.svg'},
        }
    },
    dirt: {
        name: 'dirt',
        stages: {
            growing: {time: 0, src: 'dirt.svg'},
            ripe: {time: 0, src: 'dirty.svg'},
            wilted: {time: 0, src: 'dirty.svg'},
        }
    },
}