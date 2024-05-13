import raw from "../../middleware/route.async.wrapper.mjs";
import express from "express";
import log from '@ajar/marker';
import user_model from "./user.model.mjs";
import { updateUser, createUser,} from "../../validation/userValidation.js";

const router = express.Router();

// parse json req.body on post routes
router.use(express.json())

// CREATES A NEW USER
router.post("/", raw(async (req, res, next) => {
    const {error} = createUser.validate(req.body);
    if(error){
      return res.status(400).send(error.details[0].message);
    }
    try{ 
      const user = await user_model.create(req.body);
      res.status(200).json(user);
    }catch(err){
      next(err)
    }
}));


// GET ALL USERS
router.get( "/",raw(async (req, res) => {
    const users = await user_model.find()
                                  // .select(`-_id 
                                  //       first_name 
                                  //       last_name 
                                  //       email
                                  //       phone`);
    res.status(200).json(users);
  })
);

// GETS A SINGLE USER
router.get("/:id",raw(async (req, res) => {
    const {error} = updateUser.validate(req.body);
    if(error){
      return res.status(400).send(error.details[0].message)
    } 
    const user = await user_model.findById(req.params.id)
                                    .select(`-_id 
                                        first_name 
                                        last_name 
                                        email
                                        phone`);
    if (!user) return res.status(404).json({ status: "No user found." });
    res.status(200).json(user);
  })
);

// UPDATES A SINGLE USER
router.put("/:id",raw(async (req, res) => {
    const {error} = updateUser.validate(req.body);
    if(error){
      return res.status(400).send(error.details[0].message)
    }
    const user = await user_model.findByIdAndUpdate(req.params.id,req.body, 
                                                    {new: true, upsert: true });
    res.status(200).json(user);
  })
);

// DELETES A USER
router.delete("/:id",raw(async (req, res) => {
    const user = await user_model.findByIdAndRemove(req.params.id);
    res.status(200).json(user);
  })
);

export default router;
