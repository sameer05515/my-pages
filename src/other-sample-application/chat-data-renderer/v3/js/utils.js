export function getConversationMessages(conversation) {
    let messages = [];
    let currentNode = conversation.current_node;
  
    while (currentNode) {
      let node = conversation.mapping[currentNode];
      if (node.message && node.message.content?.parts?.length > 0 && node.message.author.role !== "system") {
        let author = node.message.author.role === "assistant" ? "ChatGPT" : "User";
        messages.push({ author, text: node.message.content.parts[0] });
      }
      currentNode = node.parent;
    }
  
    return messages.reverse();
  }
  