export const getImagen = async() => {

    try {

        const apiKey = '4ROcDwziMCHNgP4m8Q4VdaL7xC9I4f2Y';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        return 'No existe'
    }
    
    
    
}


