// TODO: Add resolvers for user
// 1. Queries
// 1.1. users
// 1.2. userById
// 2. Mutations
// 2.1. createUser
// 2.2. updateUser
// 2.3. deleteUser
import userModel from '../models/userModel';
import {User} from '../../interfaces/User';
export default {
  Query: {
    users: async () => {
      return await userModel.find();
    },
    userById: async (_parent: undefined, args: {id: string}) => {
      return await userModel.findById(args.id);
    },
  },
  Mutation: {
    createUser: async (_parent: undefined, args: User) => {
      console.log('args', args);
      const user = new userModel(args);
      console.log(user);
      return await user.save();
    },
    updateUser: async (_parent: undefined, args: User) => {
      const user = await userModel.findByIdAndUpdate(args.id, args, {
        new: true,
      });
      return user;
    },
    deleteUser: async (_parent: undefined, args: {id: string}) => {
      const user = await userModel.findByIdAndDelete(args.id);
      return user;
    },
  },
};
