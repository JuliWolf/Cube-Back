cube(`Coordinates`, {
  sql: `SELECT * FROM cube.coordinates`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    lat: {
      sql: `lat`,
      type: `string`
    },
    
    long: {
      sql: `long`,
      type: `string`
    },

    coordinateId: {
      sql: `coordinate_id`,
      type: `number`,
      primaryKey: true
    }
  }
});
