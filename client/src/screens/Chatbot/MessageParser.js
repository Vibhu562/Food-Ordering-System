let greetings = ["hello", "hi", "good morning", "good evening", "good afternoon", "morning", "hey", "yo", "salutations", "options", "help", "back", "what can you do"]

// MessageParser starter code
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
        const lowerCaseMessage = message.toLowerCase()

        for(let i=0, len=greetings.length; i<len; i++) {
            if (lowerCaseMessage.includes(greetings[i])) {
                this.actionProvider.greet()
            }
        }
        
        if (lowerCaseMessage.includes("Complaint") || lowerCaseMessage.includes("Complaints")){
            this.actionProvider.Complaint();
        }
        if (lowerCaseMessage.includes("Complaintstatus") || lowerCaseMessage.includes("Complaintsstatus")){
            this.actionProvider.Complaintstatus();
        }
        if (lowerCaseMessage.includes("Feedback") || lowerCaseMessage.includes("Feedback")){
            this.actionProvider.Feedback();
        }
        
       
        

       
    }
  }
  
  export default MessageParser;