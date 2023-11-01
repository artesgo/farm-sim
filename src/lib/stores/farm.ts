import { writable } from "svelte/store";
import { plantables, type IPlantable } from "../models/plantables";

// this farm writable is only created once
const farm = writable([] as IPlantable[][]);

export function createFarm() {
    // this exposes the writable stores methods
    const { subscribe, update, set } = farm;

    // with this return, we expose our farm data update methods
    return {
        // a function signature is how we can call the function
        // what it needs to work, and these things are called, parameters
        updatePlot: (rowToUpdate: number, colToUpdate: number, plantToUpdateTo: IPlantable) => {
            update(state => {
                // explain map
                state = state.map((_row, rowNumber) => {
                    if (rowToUpdate === rowNumber) { // does the row match the parameter that we want to update
                        return _row.map((_plant, colNumber) => {
                            if (colToUpdate === colNumber) { // does the column match the one we're looking for
                                return plantToUpdateTo; // if it is, we update the data to the new plant
                            }
                            return _plant; // if not, use the existing plant
                        });
                    }
                    return _row;
                });
                return state;
            })
        },
        harvest: (rowToUpdate: number, colToUpdate: number) => {
            update(state => {
                state = state.map((_row, rowNumber) => {
                    if (rowToUpdate === rowNumber) {
                        return _row.map((_plant, colNumber) => {
                            if (colToUpdate === colNumber) {
                                return plantables.dirt;
                            }
                            return _plant;
                        });
                    }
                    return _row;
                });
                return state;
            })
        },
        // checkPlot: (x: number, y: number) => {
        //     return get(farm).find((plot) => (plot.x === x && plot.y === y)) as Plot;
        // },
        resetFarm: () => {
            const rows = 10;
            // to start, we initialize 10 empty rows
            let grid = new Array(rows).fill([]); // [] is empty array (another word for list)
    
            // the map here transforms the empty rows, into filled rows
            grid = grid.map((row) => {
                const columns = 30;
                console.log(row);
                // we need custom logic here to populate with different tiles
                return new Array(columns).fill(plantables.dirt);
            });

            grid = grid.map((row) => {
                // what do you think this will console log out
                console.log(row);
                return row;
            })
            set(grid);
        },
        subscribe
    }
}