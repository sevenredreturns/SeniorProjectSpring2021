const game = require('../models/game.model.js');

exports.addGame = (req, res) =>
{
    const newGame = new game({
        name: req.body.name,
        steamID: req.body.steamID,
        gogID: req.body.gogID,
        system: req.body.system,
        achievements: req.body.achievements
    })

    newGame.save().then(data =>
    {
        res.status(200).json(data);
    }).catch(err =>
    {
        res.status(500).json({
            message: "Game failed to be added!",
            error: err.message
        });
    });
};

exports.getGameByID = (req, res) =>
{
    game.findById(req.params.id).select('-__v')
        .then(game =>
        {
            res.status(200).json(game);
        }).catch(err =>
    {
        if(err.kind === 'ObjectId')
        {
            return res.status(404).send({
                message: "game not found with id " + req.params.id,
                error: err
            });
        }
        return res.status(500).send(
            {
                message: "Error retrieving game with id " + req.params.id,
                error: err
            });
    });
};

exports.getGameByName = (req, res) =>
{
    const query = game.where({name: req.params.name});

    query.findOne.select('-__v').then(game =>
    {
        res.status(200).json(game);
    }).catch(err =>
    {
        if (err.kind === 'String')
        {
            return res.status(404).send(
                {
                    message: "game not found with name " + req.params.name,
                    error: err
                });
        }
        return res.status(500).send(
            {
                message: "Error retrieving game with name " + req.params.name,
                error: err
            });
    });

};

exports.getAllGames = (req, res) =>
{
    game.find().select('-__v').then(gameInfos =>
    {
        res.status(200).json(gameInfos);
    }).catch(error =>
    {
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    });
};

exports.deleteGame = (req, res) =>
{
    let gameId = req.params.id

    game.findByIdAndRemove(gameId).select('-__v -_id')
        .then(game =>
        {
            if (!game)
            {
                res.status(404).json({
                    message: "Game with id = " + gameId + " does not exist",
                    error: "404"
                });
            }
            res.status(200).json({});
        }).catch(err =>
    {
        return res.status(500).send({
            message: "Error -> cannot delete a game with id = " + gameId,
            error: err.message
        });
    });
};

exports.updateGame = (req, res) =>
{
    //find game and update it
    game.findByIdAndUpdate(
        req.body._id,
        {
            name: req.body.name,
            steamID: req.body.steamID,
            gogID: req.body.gogID,
            system: req.body.system,
            achievements: req.body.achievements
        },
        {new: true}
    ).select('-__v')
        .then(game =>
        {
            if (!game)
            {
                return res.status(404).send({
                    message: "Error -> Can NOT update a game with ID = " + req.params.id,
                    error: "Not Found!"
                });
            }

            res.status(200).json(game);
        }).catch(err =>
    {
        return res.status(500).send({
            message: "Error -> Can Not update a game with ID = " + req.params.id,
            error: err.message
        });
    });
};

