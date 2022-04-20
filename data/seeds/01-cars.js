// STRETCH
exports.seed = async function(knex) {
    await knex('cars').truncate()
    return knex('cars').insert([
        {vin: 'new', make: 'maxima', model: 'nissan', mileage: '200000'},
        {vin: 'old', make: 'explorer', model: 'ford', mileage: '70000'}
    ])
}