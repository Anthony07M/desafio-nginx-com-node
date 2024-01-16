const assert = require('node:assert')
const { queryFindPeoples } = require('./query.js')

const expectedQuerys = {
    expectedQuery: 'SELECT * FROM people;',
    queryFail: 'SELECT * FROM test',
}

assert.deepEqual(queryFindPeoples, expectedQuerys.expectedQuery)
assert.notEqual(queryFindPeoples, expectedQuerys.queryFail)