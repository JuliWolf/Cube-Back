cube(`History`, {
  sql: `SELECT * FROM cube.history`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [date]
    },
    fixStatusPerDay: {
      type: `number`,
      sql: `fix_status`
    },
    totalAmount: {
      sql: `fix_status`,
      type: `sum`,
      drillMembers: [fixStatus]
    }
  },
  
  dimensions: {
    date: {
      sql: `date`,
      type: `string`
    },

    fixStatus: {
      sql: `fix_status`,
      type: `string`
    },

    countryId: {
      sql: `country_id`,
      type: `number`,
      primaryKey: true
    }
  }
});
