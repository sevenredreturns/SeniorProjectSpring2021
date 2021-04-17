const achievement = require('../models/achievements.model.js');

exports.addAchievement = (req, res) =>
{
    const newCheevo = new achievement({
                                          appid       : req.body.appid,
                                          achievements: req.body.achievements

                                      });

    console.log(newCheevo);

    newCheevo.save().then(data =>
                          {
                              res.status(200).json(data);
                          }).catch(err =>
                                   {
                                       res.status(500).json({
                                                                message: "achievements failed to be added",
                                                                error  : err.message
                                                            });
                                   });
};

exports.getAchievementsByID = (req, res) =>
{
    achievement.findById(req.params.id).select('-__v')
               .then(achievements =>
                     {
                         res.status(200).json(achievements);
                     }).catch(err =>
                              {
                                  if (err.kind === 'objectId')
                                  {
                                      return res.status(404).send({
                                                                      message: "achievement list not found with id " +
                                                                          req.params.id,
                                                                      error  : err
                                                                  });
                                  }
                                  return res.status(500).send({
                                                                  message: "Error retrieving achievement list with id " +
                                                                      req.params.id,
                                                                  error  : err
                                                              });
                              });
};

exports.getAllAchievements = (req, res) =>
{
    achievement.find().select('-__v').then(achievementInfos =>
                                           {
                                               res.status(200)
                                                  .json(achievementInfos);
                                           }).catch(error =>
                                                    {
                                                        console.log(error);

                                                        res.status(500).json({
                                                                                 message: "Error!",
                                                                                 error  : error
                                                                             });
                                                    });
};

exports.deleteAchievements = (req, res) =>
{
    let achievementId = req.params.id;

    achievement.findByIdAndRemove(achievementId).select('-__v')
               .then(achievements =>
                     {
                         if (!achievements)
                         {
                             res.status(404).json({
                                                      message: "Achievements with id = " +
                                                          achievementId +
                                                          " does not exist",
                                                      error  : "404"
                                                  });
                         }
                         res.status(200).json({});
                     }).catch(err =>
                              {
                                  return res.status(500).send({
                                                                  message: "Error -> cannot delete achievement list with id = " +
                                                                      achievementId,
                                                                  error  : err.message
                                                              });
                              });
};

exports.updateAchievements = (req, res) =>
{
    //find an achievement list and update it
    achievement.findByIdAndUpdate(
        req.body._id,
        {
            game        : req.body.game,
            achievements: [
                {
                    title      : req.body.title,
                    description: req.body.description,
                    points     : req.body.points
                }
            ]
        },
        {new: true}
    ).select('-__v').then(achievement =>
                          {
                              if (!achievement)
                              {
                                  return res.status(404).send({
                                                                  message: "Error -> cannot update an achievement list with ID = " +
                                                                      req.params.id,
                                                                  error  : "Not found!"
                                                              });
                              }

                              res.status(200).json(achievement);
                          }).catch(err =>
                                   {
                                       return res.status(500).send({
                                                                       message: "Error -> cannot update an achievement list with ID = " +
                                                                           req.params.id,
                                                                       error  : err.message
                                                                   });
                                   });
};

exports.getAchievementsByAppid = (req, res) =>
{
    const query = achievement.where({appid: req.params.appid});

    query.findOne().then(game =>
                         {
                             res.status(200).json(game);
                         }).catch(err =>
                                  {
                                      if (err.kind === 'String')
                                      {
                                          return res.status(404)
                                                    .send(
                                                        {
                                                            message: "game not found with appid " +
                                                                req.params.appid,
                                                            error  : err
                                                        });
                                      }
                                      return res.status(500).send(
                                          {
                                              message: "Error retrieving game with appid " +
                                                  req.params.appid,
                                              error  : err
                                          });
                                  });

};