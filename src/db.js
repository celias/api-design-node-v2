import mongoose from 'mongoose'
mongoose.Promise = global.Promise

export const connect = () => {
  return mongoose.connect('mongodb://geediv:pinkpanther87@ds145911.mlab.com:45911/rest-mongo', {
    useMongoClient: true
  })
}
