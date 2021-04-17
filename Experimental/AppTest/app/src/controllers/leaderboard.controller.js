const leaderboard = require('../models/leaderboard.model.js');

exports.addLeaderboard = (req, res) =>
{
    const newLeaderboard = new leaderboard({
                                               appid  : req.body.appid,
                                               places: req.body.places
                                           });

    newLeaderboard.save().then(data =>
                               {
                                   res.status(200).json(data);
                               }).catch(err =>
                                        {
                                            res.status(500).json({
                                                                     message: "Leaderboard failed to be added!",
                                                                     error  : err.message
                                                                 });
                                        });
};

exports.getLeaderboardByID = (req, res) =>
{
    leaderboard.findById(req.params.id).select('-__v')
               .then(leaderboard =>
                     {
                         res.status(200).json(leaderboard);
                     }).catch(err =>
                              {
                                  if (err.kind === 'ObjectId')
                                  {
                                      return res.status(404).send({
                                                                      message: "leaderboard not found with id " +
                                                                          req.params.id,
                                                                      error  : err
                                                                  });
                                  }
                                  return res.status(500).send({
                                                                  message: "Error retrieving leaderboard with id " +
                                                                      req.params.id,
                                                                  error  : err
                                                              });
                              });
};

exports.getLeaderboardByName = (req, res) =>
{
    const query = leaderboard.where({game: req.params.game});

    query.findOne.select('-__v').then(leaderboard =>
                                      {
                                          res.status(200).json(leaderboard);
                                      }).catch(err =>
                                               {
                                                   if (err.kind === "String")
                                                   {
                                                       return res.status(404)
                                                                 .send(
                                                                     {
                                                                         message: "leaderboard not found with name " +
                                                                             req.params.game,
                                                                         error  : err
                                                                     });
                                                   }
                                                   return res.status(500).send(
                                                       {
                                                           message: "Error retrieving leaderboard with name " +
                                                               req.params.game,
                                                           error  : err
                                                       });
                                               });
};

exports.getAllLeaderboards = (req, res) =>
{
    leaderboard.find().select('-__v').then(leaderboardInfos =>
                                           {
                                               res.status(200)
                                                  .json(leaderboardInfos);
                                           }).catch(error =>
                                                    {
                                                        console.log(error);

                                                        res.status(500).json({
                                                                                 message: "Error!",
                                                                                 error  : error
                                                                             });
                                                    });
};

exports.deleteLeaderboard = (req, res) =>
{
    let leaderboardId = req.params.id;

    leaderboard.findByIdAndRemove(leaderboardId).select('-__v -_id')
               .then(leaderboard =>
                     {
                         if (!leaderboard)
                         {
                             res.status(404).json({
                                                      message: "Leaderboard with id = " +
                                                          leaderboardId +
                                                          " does not exist",
                                                      error  : "404"
                                                  });
                         }
                         res.status(200).json({});
                     }).catch(err =>
                              {
                                  return res.status(500).send({
                                                                  message: "Error -> cannot delete a leaderboard with id = " +
                                                                      leaderboardId,
                                                                  error  : err.message
                                                              });
                              });
};

exports.updateLeaderboard = (req, res) =>
{
    //find leaderboard and update it
    leaderboard.findByIdAndUpdate(
        req.body._id,
        {
            appid  : req.body.appid,
            places: [{
                user : req.body.user,
                place: req.body.place,
                score: req.body.score
            }]
        },
        {new: true}
    ).select('-__v')
               .then(leaderboard =>
                     {
                         if (!leaderboard)
                         {
                             return res.status(404).send({
                                                             message: "Error -> cannot update a leaderboard with id " +
                                                                 res.params.id,
                                                             error  : "Not Found!"
                                                         });
                         }

                         res.status(200).json(leaderboard);
                     }).catch(err =>
                              {
                                  return res.status(500).send({
                                                                  message: "Error -> can not update a leaderboard with ID " +
                                                                      req.params.id,
                                                                  error  : err.message
                                                              });
                              });
};