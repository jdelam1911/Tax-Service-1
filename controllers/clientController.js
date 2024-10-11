const Client = require('../models/Client');

// Show all clients
exports.getAllClients = async (req, res) => {
    const clients = await Client.findAll();
    res.render('clients/clientList', { clients });
};

// Add a new client
exports.addClient = async (req, res) => {
    const { name, taxInfo } = req.body;
    await Client.create({ name, taxInfo });
    res.redirect('/clients');
};

// Edit client
exports.getEditClient = async (req, res) => {
    const client = await Client.findByPk(req.params.id);
    res.render('clients/editClient', { client });
};

exports.editClient = async (req, res) => {
    const { name, taxInfo } = req.body;
    await Client.update({ name, taxInfo }, { where: { id: req.params.id } });
    res.redirect('/clients');
};
