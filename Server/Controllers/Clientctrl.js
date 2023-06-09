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
        const already = await Clientmodel.find({empolyeeid: req.params.id}).populate(
            {
                path: 'empolyeeid',
                select: 'first_name last_name email'
            }
        )
        if (already) {
            return resp.status(200).send(
                {
                    Succes: true,
                    already
                }
            );
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
        const already = await Clientmodel.findByIdAndUpdate(req.params.id, req.body,{new: true, runValidators: true});
        
        if (already) {
            return resp.status(200).send(
                {
                    Succes: true,
                    already
                }
            );
        }
    } catch (error) {
        resp.status(500).send( {
            success: false,
            message: 'Data Not Fatched',
        })
    }
}

export const GetAllClintsctrl = async(req, resp) => {
    try {
        const already = await Clientmodel.find().populate(
            {
                path: 'empolyeeid',
                select: 'first_name last_name email'
            }
        )
        if (already) {
            return resp.status(200).send(
                {
                    Succes: true,
                    already
                }
            );
        }
    } catch (error) {
        resp.status(500).send( {
            success: false,
            message: 'Data Not Fatched',
        })
    }
}