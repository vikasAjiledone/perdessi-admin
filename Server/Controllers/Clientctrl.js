import Clientmodel from "../Models/ClientModel.js"

export const Addclientctrl = async(req, resp) => {
    try {
        const already = await Clientmodel.findOne({email: req.body.email})
        if (already) {
           return resp.status(200).send( {
                success: false,
                message: 'Client already exist',
            })
        }
        const add =await Clientmodel.create(req.body);
        if (add) {
            return resp.status(200).send(
                {
                    Succes: true,
                    message: "Client Added Successfully"
                });
        }
    } catch (error) {
        resp.status(500).send( {
            success: false,
            message: 'client Not Created Yet',
        })
    }
}

export const MyClintsctrl = async(req, resp) => {
    try {
        const already = await Clientmodel.findOne({empolyeeid: req.quary.id})
        if (already) {
            return resp.status(200).send(
                {
                    Succes: true,
                    already
                });
        }
    } catch (error) {
        resp.status(500).send( {
            success: false,
            message: 'Data Not Fatched',
        })
    }
}

export const EditClintsctrl = async(req, resp) => {
    try {
        const already = await Clientmodel.findByIdAndUpdate(
            {_id: req.quary.id},
            {$set: req.body}
            );
        if (already) {
            return resp.status(200).send(
                {
                    Succes: true,
                    already
                });
        }
    } catch (error) {
        resp.status(500).send( {
            success: false,
            message: 'Data Not Fatched',
        })
    }
}