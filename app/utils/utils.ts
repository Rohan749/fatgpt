export const stringReducer = (val:string | undefined) => {
    return val ? val.slice(0,4) + "....." + val.slice(-4) : ""
}


export const contractAddress = "98mb39tPFKQJ4Bif8iVg9mYb9wsfPZgpgN1sxoVTpump"