const game = rewuire('../game.model.js');

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
                message: "Error retrieving user with id " + req.params.id,
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

