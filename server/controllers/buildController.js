require('dotenv').config();


// Save a new build
exports.save = async (req, res) => {
    res.status(201).json({ message: 'Success 1'});
};

// Share a build
exports.share = async (req, res) => {
    res.status(201).json({ message: 'Success 4'});
};

// Get a build by its Id
exports.getBuildById = async (req, res) => {
    res.status(201).json({ message: 'Success 2'});
};


// Delete a build by its Id
exports.removeBuildById = async (req, res) => {
    res.status(201).json({ message: 'Success 3'});
};


