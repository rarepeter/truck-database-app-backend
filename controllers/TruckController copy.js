// import { v4 as uuidv4 } from 'uuid';

// import Truck from '../schemas/Truck.js'
// import { startConnection } from '../router.js'

// class TruckController {
//     async create(req, res) {
//         try {
//             const { brand, model, engine, picture } = req.body
//             startConnection()
//             const truck = await Truck.create({ id: uuidv4(), brand, model, engine, picture })
//         } catch (e) {
//             console.log(e)
//         }
//         res.status(200).json('Truck registered!')
//     }

//     async getAll(req, res) {
//         try {
//             startConnection()
//             const posts = await Truck.find()
//             return res.json(posts)
//         } catch (e) {
//             console.log(e)
//         }
//         res.status(200).json('Truck list retrieved!')
//     }

//     async getOne(req, res) {
//         try {
//             const { id } = req.params
//             console.log(req.params)
//             startConnection()
//             const post = await Truck.findOne({ id })
//             return res.status(200).json(post)
//         } catch (e) {
//             console.log(e)
//         }
//         res.status(200).json('Truck list retrieved!')
//     }

//     async update(req, res) {
//         try {
//             startConnection()
//             const post = req.body
//             if (!post.id) { return res.status(400).json({ "message": "id not found" }) }
//             const updatedPost = await Truck.findOneAndUpdate({ id: post.id }, post, { new: true })
//             return res.status(200).json(updatedPost)
//         } catch (e) {
//             console.log(e)
//         }
//         res.status(200).json('Truck list retrieved!')
//     }

//     async delete(req, res) {
//         try {
//             startConnection()
//             const { id } = req.params
//             if (!id) { return res.status(400).json({ "message": "id not found" }) }
//             const deletedPost = await Truck.findOneAndDelete({ id })
//             return res.status(200).json(deletedPost)
//         } catch (e) {
//             console.log(e)
//         }
//         res.status(200).json('Truck list retrieved!')
//     }
// }

// export default new TruckController();