// ActionProvider starter code
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    greet() {
      const greetingMessage = this.createChatBotMessage(
        "Hello, What do you want ?",
        {
          widget: "CvOptions",
        }
      );
      this.updateChatbotState(greetingMessage);
    }
  
    Complain = () => {
      const message = this.createChatBotMessage("Complaint", {
        widget: "Complaint",
      });
  
      this.updateChatbotState(message);
    };
    Complainstatus = () => {
      const message = this.createChatBotMessage("Complaint status", {
        widget: "Complaintstatus",
      });
  
      this.updateChatbotState(message);
    };
    Issuestatus = () => {
      const message = this.createChatBotMessage("Issue not resolved", {
        widget: "Issuenotresolved",
      });
  
      this.updateChatbotState(message);
    };
    Feedback = () => {
      const message = this.createChatBotMessage("Feedback", {
        widget: "Feedback",
      });
  
      this.updateChatbotState(message);
    };
    updateChatbotState(message) {
        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
          }));
        }
      }
      
      export default ActionProvider;