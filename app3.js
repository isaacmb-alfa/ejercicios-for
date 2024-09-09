const array = [4, 'dos', 8, 'tres', 5, 9, 1, 'cero'];
let arr = [];

for (let i = 0; i < array.length; i++) {

    let esNumero = Number(array[i]);

    if (!isNaN(esNumero)) {
        arr.push(esNumero);
    }

}
for (let ind = 0; ind < arr.length; ind++) {
    if (ind <= 1) {
        console.log(arr[ind]);
    }

}