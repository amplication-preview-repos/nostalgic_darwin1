/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BankWhereInput } from "./BankWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class BankCountArgs {
  @ApiProperty({
    required: false,
    type: () => BankWhereInput,
  })
  @Field(() => BankWhereInput, { nullable: true })
  @Type(() => BankWhereInput)
  where?: BankWhereInput;
}

export { BankCountArgs as BankCountArgs };
