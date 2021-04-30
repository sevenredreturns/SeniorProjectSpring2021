const api = require('steam-js-api');

api.setKey('AFC50D555093E31FDE2AF8FA0CBCEBBD');

exports.getGamesFromSteam = (req, res) =>
{
    api.getOwnedGames(req.params.id).then(data =>
                                          {
                                              res.status(200).json(data);
                                          }).catch(err =>
                                                   {
                                                       res.status(500)
                                                          .json({
                                                                    message: "Failed to retrieve games!",
                                                                    error  : err.message
                                                                });
                                                   });
};

exports.getAchievementsFromSteam = (req, res) =>
{
    let gameslist = req.body.gameslist;
    let achievementList = [];
    for (var i = 0; i < gameslist.length; i++)
    {
        api.getAchievements(req.body.steamid, gameslist[i].appid).then(data =>
                                                                       {
                                                                           achievementList.push(
                                                                               data);
                                                                       })
           .catch(err =>
                  {
                      res.status(500).json({
                                               message: "Failed to retrieve achievements!",
                                               error  : err.message
                                           });
                  });
        console.log(achievementList);
        return achievementList;
    }


};