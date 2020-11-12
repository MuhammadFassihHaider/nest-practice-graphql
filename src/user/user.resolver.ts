import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { UserServices } from "./users.service";
import { UsersInput} from "../graphql";
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';
@Resolver()
export class UserResolver {

    constructor(private readonly userService: UserServices){}

    // @Query(() => String)
    // async hello() {
    //     return 'hello'
    // }

    @Mutation()
    async createUser(@Args('user') input: UsersInput){
        const user =  await this.userService.createUser(input);
        return user;
    }

    @Query()
    async showAllUsers(){
        const users = await this.userService.userList();
        return users;
    }

    @Mutation(() => Boolean)
    async profileUpload(@Args({name:'file', type:() => GraphQLUpload})
    {
        createReadStream,
        filename
    }: FileUpload): Promise<boolean>{
        return new Promise(async (resolve, reject) => 
        createReadStream()
        .pipe(createWriteStream(`./uploads/${filename}`))
        .on('finish', () => resolve(true))
        .on('error', () => reject(false))
        );
    }

}