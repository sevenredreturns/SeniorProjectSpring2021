const SteamAPI = require('steamapi');
const steam = new SteamAPI('AFC50D555093E31FDE2AF8FA0CBCEBBD');

exports.getGamesFromSteam = (req, res) =>
{
    steam.getUserOwnedGames(req.params.id).then(data =>
                                                {
                                                    res.status(200)
                                                       .json(data);
                                                }).catch(err =>
                                                         {
                                                             res.status(
                                                                 500)
                                                                .json({
                                                                          message: "Failed to retrieve games!",
                                                                          error  : err.message
                                                                      });
                                                         });

};

exports.getAchievementsFromSteam = (req, res) =>
{

    steam.getUserAchievements(req.params.steamid, req.params.appid).then(data =>
                                                                         {
                                                                             res.status(
                                                                                 200)
                                                                                .json(
                                                                                    data);
                                                                         })
         .catch(err =>
                {
                    res.status(
                        500)
                       .json({
                                 message: "Failed to retrieve Achievements!",
                                 error  : err.message
                             });
                });


};

exports.getAchievementsForGameFromSteam = (req, res) =>
{
    steam.getGameAchievements(req.params.appid).then(data =>
                                                     {
                                                         res.status(
                                                             200)
                                                            .json(
                                                                data);
                                                     })
         .catch(err =>
                {
                    res.status(
                        500)
                       .json({
                                 message: "Failed to retrieve Achievements!",
                                 error  : err.message
                             });
                });
}