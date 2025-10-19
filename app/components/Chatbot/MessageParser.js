"use client";

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();
    
    // Handle greetings
    if (
      lowerCaseMessage.includes("hello") ||
      lowerCaseMessage.includes("hi") ||
      lowerCaseMessage.includes("hey") ||
      lowerCaseMessage.includes("greetings")
    ) {
      return this.actionProvider.handleGreeting();
    }
    
    // Handle summary/about queries
    if (
      lowerCaseMessage.includes("summary") ||
      lowerCaseMessage.includes("summarize") ||
      lowerCaseMessage.includes("summarise") ||
      lowerCaseMessage.includes("about you") ||
      lowerCaseMessage.includes("who are you") ||
      lowerCaseMessage.includes("tell me about") ||
      lowerCaseMessage.includes("overview") ||
      lowerCaseMessage.includes("introduce")
    ) {
      return this.actionProvider.handleSummaryQuery();
    }
    
    // Handle skill-related queries
    if (
      lowerCaseMessage.includes("skill") ||
      lowerCaseMessage.includes("technologies") ||
      lowerCaseMessage.includes("tech stack") ||
      lowerCaseMessage.includes("programming") ||
      lowerCaseMessage.includes("languages") ||
      lowerCaseMessage.includes("frameworks") ||
      lowerCaseMessage.includes("tools")
    ) {
      return this.actionProvider.handleSkillsQuery();
    }
    
    // Handle experience-related queries
    if (
      lowerCaseMessage.includes("experience") ||
      lowerCaseMessage.includes("work") ||
      lowerCaseMessage.includes("job") ||
      lowerCaseMessage.includes("career") ||
      lowerCaseMessage.includes("intern")
    ) {
      return this.actionProvider.handleExperienceQuery();
    }
    
    // Handle education-related queries
    if (
      lowerCaseMessage.includes("education") ||
      lowerCaseMessage.includes("study") ||
      lowerCaseMessage.includes("degree") ||
      lowerCaseMessage.includes("university") ||
      lowerCaseMessage.includes("college") ||
      lowerCaseMessage.includes("b.tech") ||
      lowerCaseMessage.includes("btech")
    ) {
      return this.actionProvider.handleEducationQuery();
    }
    
    // Handle project-related queries
    if (
      lowerCaseMessage.includes("project") ||
      lowerCaseMessage.includes("portfolio") ||
      lowerCaseMessage.includes("app") ||
      lowerCaseMessage.includes("website") ||
      lowerCaseMessage.includes("built") ||
      lowerCaseMessage.includes("github")
    ) {
      return this.actionProvider.handleProjectsQuery();
    }
    
    // Handle contact-related queries
    if (
      lowerCaseMessage.includes("contact") ||
      lowerCaseMessage.includes("email") ||
      lowerCaseMessage.includes("reach") ||
      lowerCaseMessage.includes("linkedin") ||
      lowerCaseMessage.includes("social media") ||
      lowerCaseMessage.includes("connect")
    ) {
      return this.actionProvider.handleContactQuery();
    }
    
    // Fallback
    return this.actionProvider.handleFallback();
  }
}

export default MessageParser;