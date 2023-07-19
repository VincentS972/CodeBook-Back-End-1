const Forum = require('../models/forum')

async function getAllForums(req, res) {
    try {
        const forum = await Forum.find()
        res.json(forum)
    } catch (error) {
        console.log('error fetching Forums:', error)
        res.json({ 'message': 'error fetching Forums' })
    }
}

async function getForumById( req, res){
    try {
        const { id } = req.params
        const forum = await Forum.findById(id)
        res.json(forum)
    } catch (error) {
        console.log('error finding this Forums')
        res.json({ 'message': 'error finding this Forums'})   
    }
}
async function createForum(req, res) {
try {
    if (!req.body.image) req.body.image = undefined
    await new Forum(req.body).save()
    res.status(201).json({ 'message': 'Forum created' })
} catch (error) {
    console.log('error creating Forum:', error)
    res.json({ 'message': 'error creating Forum' })
}
}

async function updateForumById( req,res ) {
    try {
        const { id } = req.params
        if (!req.body.image) req.body.image = undefined
        await Forum.findByIdAndUpdate(id, req.body)
        res.status(204).json({ 'message': 'Forum updated'})
    } catch (error) {
        console.log('error updating Forum:', error)
        res.json({ 'message': 'error updating Forum'})
    }
}

async function deleteForumById(req, res) {
    try {
        const { id } = req.params
        await Forum.findByIdAndDelete(id)
        res.status(204).json({ 'message': 'Forum deleted' })
    } catch (error) {
        console.log('error deleting Forum:', error)
        res.json({ 'message': 'error deleting Forum' })
    }
}
module.exports = {
    getAllForums,
    createForum,
    deleteForumById,
    updateForumById,
    getForumById
}