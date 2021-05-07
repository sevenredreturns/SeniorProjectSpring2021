var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	steam_id: { type: String, required: true, unique: true },
	username: { type: String, required: true },
	photo_url: String
}, {
	//Built-in timestamping with custom naming
	timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
});

//Create model using above schema
var User = mongoose.model('User', userSchema);
module.exports = User;
