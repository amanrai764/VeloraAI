//one user can create only on assisant assisant things also written in this user model  like business name,desc
import mongoose from "mongoose";//used to create schema,we use firebase for authentication here not through email and password so passsword not required

const pageSchema = new mongoose.Schema(//new schema for page
    {
    name: String,

    path: String,

    keywords: {
      type: [String],
      default: [],
    },
  },
  { _id: false }
)

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    assistantName:{
        type:String,
        default:"Velora"
    },
    businessName:{//ex:saas app,ecommerce app
        type:String,
        default:""
    },
    businessType:{
        type:String,
        default:""
    },
    businessDescription:{//ai will response according to description 
        type:String,
        default:""
    },
    tone:{//assistant tone or ai tone
        type:String,
        enum: [
        "friendly",
        "professional",
        "sales",
      ],
      default:"friendly"
    },
    theme:{
        type:String,
        enum:[
        "light",
        "dark",
        "glass",
        "neon",
      ],
      default:"dark"
    },
    enableVoice:{
        type:Boolean,
        default:true
    },
    pages:{//user website pages jispe hum usko navigate karayenge
        type:[pageSchema],//[] it is array type
        default:[]
    },
    enableNavigation:{//to navigate on any page
        type:Boolean,
        default:true
    },
    geminiApiKey:{//user khud ki api key enter kare jisse hamara response na khatam ho jaldi because agar hum khud ki api key lagayenge toh woh jaldi khatam ho jaayega 
        type:String,
        default:""
    },
    geminiStatus:{//if user limit exceeded so to tell them that you use any other api key
        type:String,
        enum:[
        "active",
        "quota_exceeded",
        "invalid",
      ],
      default:"active"
    },
    totalMessages:{//for free users
        type:Number,
        default:0
    },
    plan:{//charges are include for my website no charge for gemini key it is saas appp so plan is mandotatory
        type:String,
        enum:["free","pro"],
        default:"free"
    },
    requestLimit: {
      type: Number,
      default: 200,
    },

    proExpiresAt: {
      type: Date,
      default: null,
    },

    isSetupComplete:{
        type:Boolean,
        default:false
    }

},{timestamps:true})//timestamp:true gives 2 fields more created at and updated at


const User = mongoose.model("User" ,userSchema)

export default User

