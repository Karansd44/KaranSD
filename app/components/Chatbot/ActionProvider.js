"use client";
import { chatbotMessages } from "../../../assets/chatbot-data";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  handleGreeting = () => {
    const greetingMessage = this.createChatBotMessage(
      chatbotMessages.greetings[Math.floor(Math.random() * chatbotMessages.greetings.length)]
    );
    this.addMessageToState(greetingMessage);
    
    const optionsMessage = this.createChatBotMessage("What would you like to know?", {
      widget: "options",
    });
    this.addMessageToState(optionsMessage);
  };

  handleSummaryQuery = () => {
    const message = this.createChatBotMessage(chatbotMessages.summary);
    this.addMessageToState(message);
    
    const followUpMessage = this.createChatBotMessage("Would you like to know more about any specific area?", {
      widget: "options",
    });
    this.addMessageToState(followUpMessage);
  };

  handleSkillsQuery = () => {
    const message = this.createChatBotMessage(chatbotMessages.skills);
    this.addMessageToState(message);
  };

  handleExperienceQuery = () => {
    const message = this.createChatBotMessage(chatbotMessages.experience);
    this.addMessageToState(message);
  };

  handleEducationQuery = () => {
    const message = this.createChatBotMessage(chatbotMessages.education);
    this.addMessageToState(message);
  };

  handleProjectsQuery = () => {
    const message = this.createChatBotMessage(chatbotMessages.projects);
    this.addMessageToState(message);
    
    const githubMessage = this.createChatBotMessage("Visit my GitHub to see all projects:", {
      widget: "githubInfo",
    });
    this.addMessageToState(githubMessage);
  };

  handleContactQuery = () => {
    const message = this.createChatBotMessage(chatbotMessages.contact);
    this.addMessageToState(message);
    
    const linkedInMessage = this.createChatBotMessage("Connect with me on LinkedIn:", {
      widget: "linkedInInfo",
    });
    this.addMessageToState(linkedInMessage);
  };

  handleFallback = () => {
    const message = this.createChatBotMessage(chatbotMessages.fallback);
    this.addMessageToState(message);
  };
}

export default ActionProvider;