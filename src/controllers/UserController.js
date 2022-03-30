import User from "../models/User"

export default {
  async list(req, res){
    const users = await User.findAll()
    res.status(200).send(users)
  },
  async create(req, res){
    const {email, name, password} = req.body

    const user = await User.create({email, name, password})

    res.status(201).send(user)
  },
  async update(req, res){
    const id = req.params.id
    const {name, email, password} = req.body
    const user = await User.findByPk(id)

    user.update({name, email, password})

    res.status(200).send(user)
  },

  async delete(req, res){
    const id = req.params.id

    const user = await User.findByPk(id)

    await user.destroy();
    
    res.status(200).send(user)
  }


}