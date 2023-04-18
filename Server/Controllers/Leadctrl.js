import Leadmodel from "../Models/LeadModel.js";

export const CreateLeadctrl = async(req,resp)=>{
    try {
        const create = await Leadmodel.create(req.body);
        if (create) {
            return resp.status(200).send( {
                success: true,
                message: 'Lead Created',
            })
        }
    } catch (error) {
        resp.status(500).send( {
            success: false,
            message: 'Lead Not Created Yet',
        })
    }
}

export const MyLeadsctrl = async(req, resp) => {
    try {
        const already = await Leadmodel.find({empolyeeid: req.params.id}).populate(
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

export const EditLeadsctrl = async(req, resp) => {
    try {
        const already = await Leadmodel.findByIdAndUpdate(req.params.id, req.body,{new: true, runValidators: true});
        
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