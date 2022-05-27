const connectedKnex = require('./knex-connector');

function getAllCompanies() {
    return connectedKnex('COMPANY').select('*');
}

function getCompanyById(id) {
    return connectedKnex('COMPANY').select('*').where('ID', id).first();
}

function addCompany(company) {
    return connectedKnex("COMPANY").insert(company);
}

function updateCompany(id, company) {
    return connectedKnex("COMPANY").where('ID', id).update(company);
}

function deleteCompany(id) {
    return connectedKnex("COMPANY").where('ID', id).del()
}

module.exports = {
    getCompanyById,
    getAllCompanies,
    addCompany,
    updateCompany,
    deleteCompany
}