import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

interface IUserCreate{
  email: string;
}

class UsersService{
  private usersRepository: Repository<User>;

  constructor(){
    this.usersRepository = getCustomRepository(UsersRepository);
  }
  async create({email}: IUserCreate) {
    const userExists = await this.usersRepository.findOne({
      email
    });
    if(userExists){
      return userExists;
    }
    const users = this.usersRepository.create({
      email
    });
    await this.usersRepository.save(users);
    return users;
  }

  async findByEmail(email: string) {
    const userExists = await this.usersRepository.findOne({
      email
    });

    return userExists;
  }
}
export { UsersService };
