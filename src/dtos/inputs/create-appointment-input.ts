import { InputType, Field} from "type-graphql"
import {IsString, IsDate} from "class-validator"

@InputType()
export class CreateAppointmentInput{
    @IsString()
    @Field()
    customerId: String;
  
    @IsDate()
    @Field()
    startsAt: Date;
  
    @IsDate()
    @Field()
    endsAt: Date;

}