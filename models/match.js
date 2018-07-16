var mongoose=require('mongoose');
var matchSchema=mongoose.Schema({
  MATCH_ID:{
      type: Number,
      required:true
  },
  SEASON:{
      type:String,
      required:true
  },
  DATE:{
      type:String,
      required:true
  },
  TEAM1:{
      type:String,
      required:true
  },
  TEAM2:{
      type:String,
      required:true
  },
  TOSS_WINNER:{
      type:String,
      required:true
  },
  TOSS_DECISION:{
      type:String,
      required:true
  },
RESULT:{
  type:String,
  required:true
},
WINNER:{
  type:String,
  required:true
}

});

var Match = mongoose.model("Match", matchSchema, "playerreview");
// var Match=module.exports=mongoose.model("ipldataset",matchSchema);

module.exports.getMatches=function(callback,limit){
  Match.find(callback).limit(limit);
};