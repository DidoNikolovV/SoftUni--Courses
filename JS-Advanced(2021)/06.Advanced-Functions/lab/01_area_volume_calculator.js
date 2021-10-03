function solve(area, vol, input) {
    let myObj = [];
    const cubes = JSON.parse(input);

    for(let cube of cubes) {
        const cubeArea = area.apply(cube);
        const cubeVol = vol.apply(cube);
        myObj.push({area: cubeArea,
        volume: cubeVol})
    }
   
   return myObj;
}

solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    )


function area() {
    return Math.abs(this.x * this.y);
};


function vol() {
    return Math.abs(this.x * this.y * this.z);
};
