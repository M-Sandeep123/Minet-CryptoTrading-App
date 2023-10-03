import React from "react";
import { Meta, StoryFn, } from "@storybook/react";
import { LogInTemplate } from ".";
import ImageAtom from "../../atoms/Image";
import login from "/public/assets/images/login.png"
import Signup from "../../organisms/Signup";
export default {
  title: "templates/logIn",
  component: LogInTemplate
}as Meta<typeof LogInTemplate>

const Template: StoryFn<typeof LogInTemplate> = (args) => (<LogInTemplate {...args}/>)

export const SignInTemplate = Template.bind({});
SignInTemplate.args={
  image:<ImageAtom src={login} width="100%" height="99.6%"/>,
  content:<Signup onClickSignup={()=>{console.log("clicked")}}/>
}
