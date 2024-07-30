import Plant from "./../models/Plant.js"

const postPlant = async (req, res) => {
    const { name, category, image, price, description } = req.body

    // if(!name){
    //     return res.json({
    //         success: false,
    //         data: null,
    //         message: "Please enter a name for the plant."
    //     })
    // }    
    // if(!category){
    //     return res.json({
    //         success: false,
    //         data: null,
    //         message: "Please enter a category of the plant."
    //     })
    // }    
    // if(!image){
    //     return res.json({
    //         success: false,
    //         data: null,
    //         message: "Please the image of the plant."
    //     })
    // }    
    // if(!price){
    //     return res.json({
    //         success: false,
    //         data: null,
    //         message: "Please enter price for the plant."
    //     })
    // }    
    // if(!description){
    //     return res.json({
    //         success: false,
    //         data: null,
    //         message: "Description can not be empty."
    //     })
    // }

    // const randomId = Math.round(Math.random() * 1000)

    // const newPlant = { id: randomId, name: name, category:category, image: image, price: price, description: description}

    // plants.push(newPlant)
    try {
        const newPlant = new Plant({
            name: name,
            category: category,
            image: image,
            price: price,
            description: description

        })
        const savedPlant = await newPlant.save();

        res.json({
            success: true,
            data: savedPlant,
            message: "New plant added!!!"
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            data: null,
            message: err,
        })
    }
}

const getPlants = async (req, res) => {

    const allPlants = await Plant.find()

    res.json({
        success: true,
        data: allPlants,
        message: "plants fetched successfully"
    })
}

const getPlantId = async (req, res) => {
    const { id } = req.params

    const plant = await plant.findById({ id })

    res.json({
        success: plant ? true : false,
        data: plant || null,
        message: plant ? "plant fetched successfully" : "plant not found"
    })
}

const putPlantId = async (req, res) => {
    const { name, category, image, price, description } = req.body

    const { id } = req.params

    await Plant.updateOne({ _id: id },
        {
            $set: {
                name: name,
                category: category,
                image: image,
                price: price,
                description: description,
            }
        }
    )
    const updatePlant = await Plant.findById(id)

    res.json({
        success: true,
        data: updateResult,
        message: "plant updated successfully"
    })
}

const deletePlantId = async (req, res) => {
    const { id } = req.params

    await Plant.deleteOne({
        _id: id
    })

    // let index = -1;

    // plants.forEach((plant, i)=>{
    //     if(plant.id == id)
    //     {
    //         index = i
    //     }
    // })

    // if(index==-1){
    //     return res.json({
    //         success: false,
    //         data: null,
    //         message: `plant not found for id ${id}`
    //     })
    // }

    // plants.splice(index, 1) 

    res.json({
        success: true,
        data: null,
        message: "plant deleted successfully"
    })
}

export { postPlant, getPlants, getPlantId, putPlantId, deletePlantId }