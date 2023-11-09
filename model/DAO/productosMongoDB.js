class ModelMongoDB {
    obtenerProductos = async id => {    
        if(id) {
            return {}
        }
        else {
            return []
        }
    }

    guardarProducto = async producto => {
        return {}
    }

    actualizarProducto = async (id, producto) => {
        return {}
    }

    borrarProducto = async id => {
        return {}
    }
}

export default ModelMongoDB