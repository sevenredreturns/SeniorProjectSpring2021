const user = require('../models/user.model.js');
const mongoose = require('mongoose');

exports.addUser = (req, res) =>
{

    const newUser = new user({
                                 username: req.body.username
                             });

    newUser.save().then(data =>
                        {
                            res.status(200).json(data);
                        }).catch(err =>
                                 {
                                     res.status(500).json({
                                                              message: "User failed to be added!",
                                                              error  : err.message
                                                          });
                                 });
};

exports.getUserByID = (req, res) =>
{
    console.log(req.params['id']);
    user.findById(req.params.id).select('-__v')
        .then(user =>
              {
                  res.status(200).json(user);
              }).catch(err =>
                       {
                           if (err.kind === 'ObjectId')
                           {
                               return res.status(404).send(
                                   {
                                       message: "user not found with id " +
                                           req.params.id,
                                       error  : err
                                   });
                           }
                           return res.status(500).send(
                               {
                                   message: "Error retrieving user with id " +
                                       req.params.id,
                                   error  : err
                               });
                       });
};

exports.getUserByName = (req, res) =>
{
    const query = user.where({username: req.params.username});

    query.findOne.select('-__v').then(user =>
                                      {
                                          res.status(200).json(user);
                                      }).catch(err =>
                                               {
                                                   if (err.kind === 'String')
                                                   {
                                                       return res.status(404)
                                                                 .send(
                                                                     {
                                                                         message: "user not found with id " +
                                                                             req.params.username,
                                                                         error  : err
                                                                     });
                                                   }
                                                   return res.status(500).send(
                                                       {
                                                           message: "Error retrieving user with id " +
                                                               req.params.username,
                                                           error  : err
                                                       });
                                               });

};

exports.getAllUsers = (req, res) =>
{
    user.find().select('-__v').then(userInfos =>
                                    {
                                        res.status(200).json(userInfos);
                                    }).catch(error =>
                                             {
                                                 console.log(error);

                                                 res.status(500).json({
                                                                          message: "Error!",
                                                                          error  : error
                                                                      });
                                             });
};

exports.deleteUser = (req, res) =>
{
    let userId = req.params.id;

    user.findByIdAndRemove(userId).select('-__v -_id')
        .then(user =>
              {
                  if (!user)
                  {
                      res.status(404).json({
                                               message: "User with id = " +
                                                   userId + " does not exist",
                                               error  : "404"
                                           });
                  }
                  res.status(200).json({});
              }).catch(err =>
                       {
                           return res.status(500).send({
                                                           message: "Error -> cannot delete a user with id = " +
                                                               userId,
                                                           error  : err.message
                                                       });
                       });
};


exports.updateUser = (req, res) =>
{
    let userID = req.body._id;

    userUpdate = new user();
    if (req.body.username != null)
    {
        userUpdate.username = req.body.username;
    }
    if (req.body.firstName != null)
    {
        userUpdate.firstName = req.body.firstName;
    }
    if (req.body.lastName != null)
    {
        userUpdate.lastName = req.body.lastName;
    }
    if (req.body.email != null)
    {
        userUpdate.email = req.body.email;
    }
    if (req.body.bio != null)
    {
        userUpdate.bio = req.body.bio;
    }
    if (req.body.avatarurl != null)
    {
        userUpdate.avatarurl = req.body.avatarurl;
    }
    if(req.body.otherProfiles != null)
    {
        userUpdate.otherProfiles = req.body.otherProfiles;
    }
    console.log(userUpdate);

    console.log(userID);
    //find user and update it
    user.findByIdAndUpdate(
        userID.$oid,
        {
            username : userUpdate.username,
            firstName: userUpdate.firstName,
            lastName : userUpdate.lastName,
            email    : userUpdate.email,
            bio      : userUpdate.bio,
            avatarurl: userUpdate.avatarurl,
            otherProfiles:userUpdate.otherProfiles
        },
        {new: true, omitUndefined: true}
    ).select('-__v')
        .then(user =>
              {
                  if (!user)
                  {
                      return res.status(404).send({
                                                      message: "Error -> Can NOT update a user with ID = " +
                                                          req.params.id,
                                                      error  : "Not Found!"
                                                  });
                  }

                  res.status(200).json(user);
              }).catch(err =>
                       {
                           return res.status(500).send({
                                                           message: "Error -> Can Not update a user with ID = " +
                                                               req.params.id,
                                                           error  : err.message
                                                       });
                       });
};

exports.searchForGameInArray = function (inputid, array)
{
    for (var i = 0; i < array.length; i++)
    {
        if (array[i].appid = inputid)
        {
            return i;
        }
    }
};

exports.updateUserAchievements = (req, res) =>
{
    let userID = req.body._id;

    user.findByIdAndUpdate(
        userID.$oid,
        {
            ownedGames: req.body.ownedGames
        },
        {new: true, omitUndefined: true}
    ).select('-__v')
        .then(user =>
              {
                  if (!user)
                  {
                      return res.status(404).send({
                                                      message: "Error -> Can NOT update a user with ID = " +
                                                          req.params.id,
                                                      error  : "Not Found!"
                                                  });
                  }

                  res.status(200).json(user);
              }).catch(err =>
                       {
                           return res.status(500).send({
                                                           message: "Error -> Can Not update a user with ID = " +
                                                               req.params.id,
                                                           error  : err.message
                                                       });
                       });

};

exports.updateUserFriends = (req, res) =>
{
    let userID = req.body._id;
};

exports.getUserByEmail = (req, res) =>
{
    const query = user.where({email: req.params.email});

    query.findOne().then(user =>
                         {
                             res.status(200).json(user);
                         }).catch(err =>
                                  {
                                      if (err.kind === 'String')
                                      {
                                          return res.status(404)
                                                    .send(
                                                        {
                                                            message: "user not found with email " +
                                                                req.params.email,
                                                            error  : err
                                                        });
                                      }
                                      return res.status(500).send(
                                          {
                                              message: "Error retrieving user with email " +
                                                  req.params.email,
                                              error  : err
                                          });
                                  });

};
