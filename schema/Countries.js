cube(`Countries`, {
  sql: `SELECT * FROM cube.countries`,
  
  joins: {
    Coordinates: {
      relationship: `hasOne`,
      sql: `${Countries}.country_id = ${Coordinates}.coordinate_id`
    },
    DeathHistory: {
      relationship: `belongsTo`,
      sql: `${Countries}.country_id = ${DeathHistory}.country_id`
    },
    History: {
      relationship: `belongsTo`,
      sql: `${Countries}.country_id = ${History}.country_id`
    },
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [countryName, countryCode]
    },
    deathStatus: {
      sql: `death_status`,
      type: `number`
    },

    infectedStatus: {
      sql: `infected_status`,
      type: `number`
    }
  },
  
  dimensions: {
    countryId: {
      sql: `country_id`,
      type: `number`,
      primaryKey: true
    },
    countryName: {
      sql: `country_name`,
      type: `string`
    },
    
    countryCode: {
      sql: `country_code`,
      type: `string`
    },
    
    province: {
      sql: `province`,
      type: `string`
    }
  }
});
