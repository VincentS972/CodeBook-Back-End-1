const router = require('express').Router()
const Forum = require('../models/Forum')

// async function getAllForums(req, res) {
//   try {
//     const forum = await Forum.find();
//     res.json(forum);
//   } catch (error) {
//     console.log('error fetching Forums:', error);
//     res.json({ message: 'error fetching Forums' });
//   }
// }

// async function getForumById(req, res) {
//   try {
//     const { id } = req.params;
//     const forum = await Forum.findById(id);
//     res.json(forum);
//   } catch (error) {
//     console.log('error finding this Forums');
//     res.json({ message: 'error finding this Forums' });
//   }
// }
// async function createForum(req, res) {
//   console.log(req.body);
//   try {
//     await new Forum(req.body).save();
//     res.status(201).json({ message: 'Forum created' });
//   } catch (error) {
//     console.log('error creating Forum:', error);
//     res.json({ message: 'error creating Forum' });
//   }
// }

// async function updateForumById(req, res) {
//   try {
//     const { id } = req.params;
//     if (!req.body.image) req.body.image = undefined;
//     await Forum.findByIdAndUpdate(id, req.body);
//     res.status(204).json({ message: 'Forum updated' });
//   } catch (error) {
//     console.log('error updating Forum:', error);
//     res.json({ message: 'error updating Forum' });
//   }
// }

// async function deleteForumById(req, res) {
//   try {
//     const { id } = req.params;
//     await Forum.findByIdAndDelete(id);
//     res.status(204).json({ message: 'Forum deleted' });
//   } catch (error) {
//     console.log('error deleting Forum:', error);
//     res.json({ message: 'error deleting Forum' });
//   }
// }
// module.exports = {
//   getAllForums,
//   createForum,
//   deleteForumById,
//   updateForumById,
//   getForumById,
// };


router.get('/', async (req, res) => {
  try {
      const people = await Forum.find()
      res.json(people)
  } catch (error) {
      console.log('error retreiving forum:', error)
      res.json({ message: 'error retreving forum' })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
      const person = await Forum.findById(id)
      res.json(person)

  } catch (error) {
      console.log('error retreiving person:', error)
      res.status(404).json({ message: `error retreiving person with id ${id}` })
  }
})

router.post('/', async (req, res) => {
  try {
      const user = await new Forum(req.body).save()
      res.json(user)

  } catch (error) {
      console.log('error creating person:', error)
      res.status(500).json({ message: 'error creating person' })
  }
  
})

module.exports = router