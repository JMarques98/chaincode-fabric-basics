'use strict';

const { Contract } = require('fabric-contract-api');

class SimpleContract extends Contract {

    //Write in the WorldSate / ledger
    async put(ctx, key, value) {
        await ctx.stub.putState(key, Buffer.from(value));
    }

    // Get the pair value-key specific
    async get(ctx, key) {
        const value = await ctx.stub.getState(key);
        if (!value || value.length === 0) {
            throw new Error(`The asset ${key} does not exist`);
        }

        return value.toString();
    }

    //Delete en in the World State∫
    async del(ctx, key) {
        await ctx.stub.deleteState(key);
    }
    
}

module.exports = SimpleContract;