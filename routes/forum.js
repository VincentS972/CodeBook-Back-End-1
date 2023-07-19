const router = require('express').Router()
const {
    getAllForums,
    createForum,
    deleteForumById,
    updateForumById,
    getForumById
   
} = require ('../controllers/Forum')

//GET / get all breads
router.get('/', getAllForums)

//Get / :id get bread by id
router.get('/:id', getForumById)

//POST/ create Bread
router.post('/', createForum)

//PUT /:id update bread by id 
router.put('/:id', updateForumById)

//DELETE /:id delete bread by id 
router.delete('/:id', deleteForumById)

module.exports = router