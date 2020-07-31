import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";

export class CreateUserUseCase {
    constructor(
       private usersRepository: IUserRepository,
       private mailProvider: IMailProvider
    ){}
   
    async execute(data: ICreateUserRequestDTO){
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

        if(userAlreadyExists) throw new Error('User already exists.')

        const user = new User(data)

        this.mailProvider.sendMail({
            to:{
                name: data.name,
                email: data.email
            },
            from:{
                name: 'Estudo API',
                email: 'estudo.api@test.com'
            },
            subject: 'Seja bem-vindx á plataforma',
            body: '<p>Você já pode fazer login em nossa plataforma.</p>'
        })

        await this.usersRepository.save(user)
    }
}