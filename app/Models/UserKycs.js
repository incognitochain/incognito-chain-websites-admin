'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserKycs extends Model {
    static get table() {
        return 'user_kycs'
    }
    user() {
        return this.belongsTo('App/Models/User', 'user_id', 'id')
    }
    async getByUserId(user_id) {
        return await this.query()
            .whereNull('deleted_at')
            .where('user_id', user_id).first()
    }
}

module.exports = UserKycs
