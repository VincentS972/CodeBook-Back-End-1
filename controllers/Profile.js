const router = require('express').Router()
const Profile = require('../models/Profile')

// async function getAllProfiles(req, res) {
//   try {
//     const profile = await Profile.find();
//     res.json(profile);
//   } catch (error) {
//     console.log('error fetching Profiles:', error);
//     res.json({ message: 'error fetching Profiles' });
//   }
// }

// async function getProfileByEmail(req, res) {
//   const { emailAddress, _id } = req.body;
//   try {
//     const profile = await Profile.findOne({ emailAddress: `${emailAddress}` });
//     console.log('we are her', profile);
//     return res.json(profile);
//   } catch (error) {
//     console.log('error fetching profile', error);
//     res.json({ message: 'error fetching profile' });
//   }
// }

// async function getProfileById(req, res) {
//   try {
//     const { id } = req.params;
//     const profile = await Profile.findById(id);
//     res.json(profile);
//   } catch (error) {
//     console.log('error finding this Profile');
//     res.json({ message: 'error finding this Profile' });
//   }
// }
// async function createProfile(req, res) {
//   try {
//     if (!req.body.image) req.body.image = undefined;
//     await new Profile(req.body).save();
//     res.status(201).json({ message: 'Profile created' });
//   } catch (error) {
//     console.log('error creating Profile:', error);
//     res.json({ message: 'error creating Profile' });
//   }
// }

// async function updateProfileById(req, res) {
//   try {
//     const { id } = req.params;
//     if (!req.body.image) req.body.image = undefined;
//     await Profile.findByIdAndUpdate(id, req.body);
//     res.status(204).json({ message: 'Profile updated' });
//   } catch (error) {
//     console.log('error updating Profile:', error);
//     res.json({ message: 'error updating Profile' });
//   }
// }

// async function deleteProfileById(req, res) {
//   try {
//     const { id } = req.params;
//     await Profile.findByIdAndDelete(id);
//     res.status(204).json({ message: 'bread deleted' });
//   } catch (error) {
//     console.log('error deleting Profile:', error);
//     res.json({ message: 'error deleting Profile' });
//   }
// }
// module.exports = {
//   getAllProfiles,
//   createProfile,
//   deleteProfileById,
//   updateProfileById,
//   getProfileById,
//   getProfileByEmail,
// };


router.get('/', async (req, res) => {
  try {
      const people = await Profile.find()
      res.json(people)
  } catch (error) {
      console.log('error retreiving profile:', error)
      res.json({ message: 'error retreving profile' })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
      const profile = await Profile.findById(id)
      res.json(profile)

  } catch (error) {
      console.log('error retreiving profile:', error)
      res.status(404).json({ message: `error retreiving profile with id ${id}` })
  }
})

router.post('/', async (req, res) => {
  try {
      const user = await new Profile(req.body).save()
      res.json({ 'message': 'Profile created' })

  } catch (error) {
      console.log('error creating profile:', error)
      res.status(500).json({ message: 'error creating profile' })
  }
  
})

router.post('/login', async (req, res) => {
  const { emailAddress } = req.body;
  console.log(emailAddress)
  try {
    const profile = await Profile.findOne({ emailAddress: `${emailAddress}` });
    console.log('we are her', profile);
    return res.json(profile);
  } catch (error) {
    console.log('error fetching profile', error);
    res.json({ message: 'error fetching profile' });
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!req.body.image) req.body.image = undefined;
    await Profile.findByIdAndUpdate(id, req.body);
    res.status(204).json({ message: 'Profile updated' });
  } catch (error) {
    console.log('error updating Profile:', error);
    res.json({ message: 'error updating Profile' });
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Profile.findByIdAndDelete(id);
    res.status(204).json({ message: 'profile deleted' });
  } catch (error) {
    console.log('error deleting Profile:', error);
    res.json({ message: 'error deleting Profile' });
  }
})

module.exports = router