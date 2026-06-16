// Question bank for AB-730 / AB-731 — the real question pool plus the authored
// answer key and explanations. This file is the source of truth: edit questions,
// correct answers, or explanations directly here. Options must stay sorted A→D.
// Server-side only (imported via "server-only") so answers never reach the browser.
import "server-only";
import type { Question } from "./types";

export const BANK: Question[] = [
  {
    "id": "GEN-135",
    "exam": "ab730",
    "domain": "generative-ai-fundamentals",
    "subtopic": "agent-actions-api",
    "format": "scenario",
    "difficulty": "hard",
    "stem": "An agent must create a ticket in an external IT service-management system when an employee reports an issue. You need the agent to perform that action in the external system. What should you add to the agent?",
    "explanation": "Actions let an agent *do* things in external systems. A custom API action calls the IT system's API to create the ticket. A Copilot connector (B) only brings external data in as knowledge; an extra knowledge source (C) and image generation (D) perform no external action.",
    "options": [
      {
        "key": "A",
        "text": "A custom API action"
      },
      {
        "key": "B",
        "text": "A Copilot connector"
      },
      {
        "key": "C",
        "text": "An additional knowledge source"
      },
      {
        "key": "D",
        "text": "Image generation"
      }
    ],
    "correct": [
      "A"
    ]
  },
  {
    "id": "CNT-138",
    "exam": "ab730",
    "domain": "drafting-analyzing-business-content",
    "subtopic": "copilot-meetings",
    "format": "multiple",
    "difficulty": "medium",
    "stem": "Select all that apply. Which conditions or facts about Copilot in Teams meetings are correct?",
    "explanation": "Transcription must be enabled for Copilot to summarise and extract action items (A); 'During and after the meeting' is required for post-meeting follow-up (B); Copilot can synthesise decisions and open questions live (D). Recording alone (C) is not enough — Copilot relies on the transcript, not the recording.",
    "options": [
      {
        "key": "A",
        "text": "Transcription must be enabled for Copilot to generate summaries and action items."
      },
      {
        "key": "B",
        "text": "'During and after the meeting' is required for post-meeting follow-up."
      },
      {
        "key": "C",
        "text": "Recording alone is sufficient for Copilot to summarize the meeting."
      },
      {
        "key": "D",
        "text": "Copilot can synthesize decisions and open questions during the meeting."
      }
    ],
    "correct": [
      "A",
      "B",
      "D"
    ]
  },
  {
    "id": "GEN-122",
    "exam": "ab730",
    "domain": "generative-ai-fundamentals",
    "subtopic": "copilot-data-privacy",
    "format": "multiple",
    "difficulty": "medium",
    "stem": "Select all that apply. Which statements correctly describe how Microsoft 365 Copilot keeps organizational data private and secure?",
    "explanation": "Copilot only surfaces content the signed-in user is already permitted to see (A) and honours sensitivity labels within the tenant boundary (B). It does not send organisational data to public models (D), nor grant access to anything merely named in a prompt (C).",
    "options": [
      {
        "key": "A",
        "text": "It only surfaces content the signed-in user is authorized to access."
      },
      {
        "key": "B",
        "text": "It respects existing sensitivity labels and operates within the tenant security boundary."
      },
      {
        "key": "C",
        "text": "It grants access to any document a user references by name in a prompt."
      },
      {
        "key": "D",
        "text": "It sends organizational data to public AI services to improve answers."
      }
    ],
    "correct": [
      "A",
      "B"
    ]
  },
  {
    "id": "GEN-127",
    "exam": "ab730",
    "domain": "generative-ai-fundamentals",
    "subtopic": "data-protection-outputs",
    "format": "single",
    "difficulty": "medium",
    "stem": "You need to prevent Copilot from exposing highly sensitive financial data inappropriately. Which combination of Microsoft Purview features is designed to PREVENT this leakage?",
    "explanation": "Data loss prevention (DLP) plus sensitivity labels are the Purview features designed to *prevent* sensitive data from leaking. Audit/eDiscovery (A) investigate after the fact, retention (B) governs lifecycle, and communication compliance/insider risk (D) detect risky behaviour rather than blocking output.",
    "options": [
      {
        "key": "A",
        "text": "Audit and eDiscovery"
      },
      {
        "key": "B",
        "text": "Data lifecycle management and retention policies"
      },
      {
        "key": "C",
        "text": "Data loss prevention (DLP) and sensitivity labels"
      },
      {
        "key": "D",
        "text": "Communication compliance and insider risk management"
      }
    ],
    "correct": [
      "C"
    ]
  },
  {
    "id": "CNT-111",
    "exam": "ab730",
    "domain": "drafting-analyzing-business-content",
    "subtopic": "copilot-memory-instructions",
    "format": "single",
    "difficulty": "medium",
    "stem": "You must understand how Copilot personalizes responses over time. Which information is stored in Copilot memory?",
    "explanation": "Copilot memory stores saved memories and user instructions to personalise responses over time. It does not store your full chat history, meeting transcripts, or sensitivity labels.",
    "options": [
      {
        "key": "A",
        "text": "Chat history and prompts"
      },
      {
        "key": "B",
        "text": "Saved memories and user instructions"
      },
      {
        "key": "C",
        "text": "Meeting transcripts"
      },
      {
        "key": "D",
        "text": "Sensitivity labels"
      }
    ],
    "correct": [
      "B"
    ]
  },
  {
    "id": "PRM-118",
    "exam": "ab730",
    "domain": "managing-prompts-conversations",
    "subtopic": "reference-resources",
    "format": "single",
    "difficulty": "easy",
    "stem": "Select the answer that correctly completes the sentence. In Copilot, you point a prompt at a specific file, person, meeting, or email by typing [Target_A].",
    "explanation": "You type the slash (/) character to point a prompt at a specific file, person, meeting or email. # and $ are not Copilot reference characters, and @ is not limited to people here.",
    "options": [
      {
        "key": "A",
        "text": "the slash (/) character"
      },
      {
        "key": "B",
        "text": "the hashtag (#) character"
      },
      {
        "key": "C",
        "text": "the at (@) character only for people"
      },
      {
        "key": "D",
        "text": "a dollar sign ($)"
      }
    ],
    "correct": [
      "A"
    ]
  },
  {
    "id": "PRM-113",
    "exam": "ab730",
    "domain": "managing-prompts-conversations",
    "subtopic": "agents-store-vs-build",
    "format": "scenario",
    "difficulty": "hard",
    "stem": "You build an agent and try to share it with a team, but the Share option is unavailable. You confirm the agent is configured correctly. What is the most likely cause?",
    "explanation": "When the agent is configured correctly but Share is unavailable, sharing has been restricted at the organisation/admin level. Missing prompts or knowledge sources don't disable sharing, and publishing to the marketplace isn't required to share with a team.",
    "options": [
      {
        "key": "A",
        "text": "The agent is missing suggested prompts."
      },
      {
        "key": "B",
        "text": "The agent has no knowledge sources."
      },
      {
        "key": "C",
        "text": "The agent must be published to the commercial marketplace first."
      },
      {
        "key": "D",
        "text": "Agent sharing is restricted at the organization level."
      }
    ],
    "correct": [
      "D"
    ]
  },
  {
    "id": "CNT-123",
    "exam": "ab730",
    "domain": "drafting-analyzing-business-content",
    "subtopic": "copilot-meetings",
    "format": "scenario",
    "difficulty": "medium",
    "stem": "After a Teams meeting, participants must be able to ask Copilot follow-up questions and review AI-generated insights. Which Copilot meeting option must be selected?",
    "explanation": "Selecting 'During and after the meeting' lets participants ask Copilot follow-up questions and review insights afterwards. 'Only during' ends Copilot access when the meeting does; captions-only or Copilot-off give no recap.",
    "options": [
      {
        "key": "A",
        "text": "Only during the meeting"
      },
      {
        "key": "B",
        "text": "During and after the meeting"
      },
      {
        "key": "C",
        "text": "Copilot turned off"
      },
      {
        "key": "D",
        "text": "Live captions only"
      }
    ],
    "correct": [
      "B"
    ]
  },
  {
    "id": "CNT-105",
    "exam": "ab730",
    "domain": "drafting-analyzing-business-content",
    "subtopic": "generate-from-existing-doc",
    "format": "single",
    "difficulty": "medium",
    "stem": "Select the answer that correctly completes the sentence. With Copilot in Microsoft Word, you can create a new document by [Target_A].",
    "explanation": "Copilot in Word can create a brand-new document by referencing an existing one as the starting point. Summarising, rewriting in place, or reformatting act on the current document instead of producing a new one.",
    "options": [
      {
        "key": "A",
        "text": "rewriting the current document in place"
      },
      {
        "key": "B",
        "text": "summarizing the current document"
      },
      {
        "key": "C",
        "text": "transforming the current document's formatting"
      },
      {
        "key": "D",
        "text": "referencing an existing document as the starting point"
      }
    ],
    "correct": [
      "D"
    ]
  },
  {
    "id": "PRM-153",
    "exam": "ab730",
    "domain": "managing-prompts-conversations",
    "subtopic": "effective-prompts",
    "format": "yesno-series",
    "difficulty": "medium",
    "stem": "Scenario: A colleague lists prompt-writing tips. For each statement, answer Yes if it is accurate, or No if it is not.",
    "explanation": "Stating the audience and required next steps sharpens the response (Yes). Adding unrelated background to 'widen scope' only dilutes it (No). You can type / to reference a file, person, meeting or email (Yes).",
    "statements": [
      {
        "id": "1",
        "text": "Stating the audience and the required next steps improves the response."
      },
      {
        "id": "2",
        "text": "Adding unrelated background to widen scope improves the response."
      },
      {
        "id": "3",
        "text": "You can type / to reference a file, person, meeting, or email."
      }
    ],
    "answers": {
      "1": true,
      "2": false,
      "3": true
    }
  },
  {
    "id": "CNT-126",
    "exam": "ab730",
    "domain": "drafting-analyzing-business-content",
    "subtopic": "copilot-pages",
    "format": "single",
    "difficulty": "medium",
    "stem": "You captured ideas on a Copilot Page and now need that content as an editable Word document. What should you do?",
    "explanation": "Convert the Copilot Page directly into a Word document to get editable content. Retyping or screenshotting loses editability, and scheduling an email doesn't apply.",
    "options": [
      {
        "key": "A",
        "text": "Screenshot the Page and insert the image into Word."
      },
      {
        "key": "B",
        "text": "Manually retype everything into Word."
      },
      {
        "key": "C",
        "text": "Convert the Copilot Page into a Word document."
      },
      {
        "key": "D",
        "text": "Schedule the Page to email itself."
      }
    ],
    "correct": [
      "C"
    ]
  },
  {
    "id": "GEN-120",
    "exam": "ab730",
    "domain": "generative-ai-fundamentals",
    "subtopic": "agent-actions-api",
    "format": "single",
    "difficulty": "medium",
    "stem": "Select the answer that correctly completes the sentence. To bring external business data into an agent as knowledge it can reference (without performing actions in that system), you should add [Target_A].",
    "explanation": "A Copilot connector brings external business data in as *knowledge* the agent can reference, without taking actions. A custom API action performs actions, adaptive cards format output, and image generation is unrelated.",
    "options": [
      {
        "key": "A",
        "text": "a custom API action"
      },
      {
        "key": "B",
        "text": "image generation"
      },
      {
        "key": "C",
        "text": "a Copilot connector"
      },
      {
        "key": "D",
        "text": "an adaptive card"
      }
    ],
    "correct": [
      "C"
    ]
  },
  {
    "id": "GEN-114",
    "exam": "ab730",
    "domain": "generative-ai-fundamentals",
    "subtopic": "copilot-data-privacy",
    "format": "single",
    "difficulty": "hard",
    "stem": "You want to understand Microsoft's approach to securing Microsoft 365 Copilot. More than one answer may seem correct. Select the BEST answer.",
    "explanation": "Microsoft secures Copilot by embedding privacy and compliance protections alongside secure development and risk mitigation — defence in depth. It doesn't rely solely on customer controls (A) or on Zero Trust alone (D), and it builds on, rather than replaces, existing security services (B).",
    "options": [
      {
        "key": "A",
        "text": "Relying solely on customer-configured controls."
      },
      {
        "key": "B",
        "text": "Replacing existing security services with Copilot-specific ones."
      },
      {
        "key": "C",
        "text": "Embedding privacy and compliance protections alongside secure development and risk mitigation."
      },
      {
        "key": "D",
        "text": "Applying Zero Trust as the entire security model."
      }
    ],
    "correct": [
      "C"
    ]
  },
  {
    "id": "GEN-141",
    "exam": "ab730",
    "domain": "generative-ai-fundamentals",
    "subtopic": "data-protection-outputs",
    "format": "yesno-series",
    "difficulty": "medium",
    "stem": "Scenario: Your security team lists controls for Copilot. For each statement, answer Yes if it is accurate, or No if it is not.",
    "explanation": "DLP and sensitivity labels help prevent leakage (Yes). Microsoft 365 permissions limit Copilot to content the user may view (Yes). eDiscovery is for investigation/discovery, not real-time leak prevention (No).",
    "statements": [
      {
        "id": "1",
        "text": "Microsoft Purview DLP and sensitivity labels help prevent leakage of sensitive data."
      },
      {
        "id": "2",
        "text": "Microsoft 365 access permissions limit Copilot responses to content the user may view."
      },
      {
        "id": "3",
        "text": "eDiscovery is designed to prevent sensitive data leakage in real time."
      }
    ],
    "answers": {
      "1": true,
      "2": true,
      "3": false
    }
  },
  {
    "id": "GEN-118",
    "exam": "ab730",
    "domain": "generative-ai-fundamentals",
    "subtopic": "chat-vs-agent",
    "format": "single",
    "difficulty": "medium",
    "stem": "You need to explain how an agent experience differs from a chat experience in Microsoft 365 Copilot. Which statement is accurate?",
    "explanation": "An agent supports repeatable, instruction-based interactions that can perform actions and automate processes on the user's behalf — beyond a chat's one-off Q&A. Chat doesn't automate multi-step processes, and agents don't require Copilot Studio.",
    "options": [
      {
        "key": "A",
        "text": "A chat experience can automate multi-step business processes, while an agent only answers questions."
      },
      {
        "key": "B",
        "text": "A chat experience requires Copilot Studio, while an agent does not."
      },
      {
        "key": "C",
        "text": "Both provide identical capabilities; only the licensing differs."
      },
      {
        "key": "D",
        "text": "An agent supports repeatable, instruction-based interactions that can perform actions and automate processes on a user's behalf."
      }
    ],
    "correct": [
      "D"
    ]
  },
  {
    "id": "CNT-125",
    "exam": "ab730",
    "domain": "drafting-analyzing-business-content",
    "subtopic": "copilot-meetings",
    "format": "yesno-series",
    "difficulty": "medium",
    "stem": "Scenario: Your team reviews how Copilot supports Teams meetings. For each statement, answer Yes if it is accurate, or No if it is not.",
    "explanation": "Copilot can synthesise decisions and open questions live (Yes). Live captions alone do not save a transcript Copilot can later summarise — transcription is required (No). The meeting recap can extract decisions and action items from the transcript afterwards (Yes).",
    "statements": [
      {
        "id": "1",
        "text": "Copilot can synthesize decisions made and open questions during a live meeting."
      },
      {
        "id": "2",
        "text": "Live captions alone save a transcript that Copilot can later summarize."
      },
      {
        "id": "3",
        "text": "Copilot in the meeting recap can extract decisions and action items from the transcript after the meeting."
      }
    ],
    "answers": {
      "1": true,
      "2": false,
      "3": true
    }
  },
  {
    "id": "CNT-104",
    "exam": "ab730",
    "domain": "drafting-analyzing-business-content",
    "subtopic": "management-summary",
    "format": "single",
    "difficulty": "medium",
    "stem": "Select the answer that correctly completes the sentence. You can use Microsoft 365 Copilot to [Target_A] when senior leaders need a brief overview of an existing document.",
    "explanation": "Use Copilot to generate a management summary when leaders need a brief overview of an existing document. Translating, improving tone, or restructuring don't produce a concise leadership overview.",
    "options": [
      {
        "key": "A",
        "text": "improve the tone of a document"
      },
      {
        "key": "B",
        "text": "translate a document"
      },
      {
        "key": "C",
        "text": "generate a management summary"
      },
      {
        "key": "D",
        "text": "restructure a document"
      }
    ],
    "correct": [
      "C"
    ]
  },
  {
    "id": "GEN-110",
    "exam": "ab730",
    "domain": "generative-ai-fundamentals",
    "subtopic": "responsible-ai-risks",
    "format": "multiple",
    "difficulty": "medium",
    "stem": "Select all that apply. You must ensure Copilot-generated content in Word is accurate and reliable before sharing. Which actions help?",
    "explanation": "Verify accuracy by having a human review the content (A) and by checking the citations Copilot provides (B). Privacy controls (D) don't address accuracy, and activity history (C) doesn't confirm factual correctness.",
    "options": [
      {
        "key": "A",
        "text": "Have a human reviewer inspect the content before sharing."
      },
      {
        "key": "B",
        "text": "Use the citations Copilot provides to verify the sources."
      },
      {
        "key": "C",
        "text": "Rely on the Copilot activity history to confirm accuracy."
      },
      {
        "key": "D",
        "text": "Apply privacy controls to the document."
      }
    ],
    "correct": [
      "A",
      "B"
    ]
  },
  {
    "id": "CNT-116",
    "exam": "ab730",
    "domain": "drafting-analyzing-business-content",
    "subtopic": "copilot-meetings",
    "format": "scenario",
    "difficulty": "medium",
    "stem": "You have two Teams meetings that were recorded and transcribed. You need a written list of decisions and action items based only on what was discussed, without manually reviewing the recordings. What should you do in Teams?",
    "explanation": "Use Copilot in each meeting recap to summarise the discussion and identify decisions and action items from the transcript — no manual rewatching. Attendance reports, chat search, or Together mode don't extract decisions.",
    "options": [
      {
        "key": "A",
        "text": "Export the attendance report for each meeting."
      },
      {
        "key": "B",
        "text": "Search the meeting chat for decisions."
      },
      {
        "key": "C",
        "text": "Turn on Together mode and rewatch."
      },
      {
        "key": "D",
        "text": "Use Copilot in each meeting recap to summarize the discussion and identify decisions and action items."
      }
    ],
    "correct": [
      "D"
    ]
  },
  {
    "id": "PRM-111",
    "exam": "ab730",
    "domain": "managing-prompts-conversations",
    "subtopic": "agents-create-configure",
    "format": "single",
    "difficulty": "medium",
    "stem": "Select the answer that correctly completes the sentence. To enable a Copilot agent to reference documents stored on a SharePoint Online site when generating responses, you must configure the [Target_A] setting.",
    "explanation": "Knowledge sources let an agent reference SharePoint documents when generating responses. Capabilities, instructions, and suggested prompts don't connect document repositories.",
    "options": [
      {
        "key": "A",
        "text": "Capabilities"
      },
      {
        "key": "B",
        "text": "Knowledge sources"
      },
      {
        "key": "C",
        "text": "Instructions"
      },
      {
        "key": "D",
        "text": "Suggested prompts"
      }
    ],
    "correct": [
      "B"
    ]
  },
  {
    "id": "CNT-107",
    "exam": "ab730",
    "domain": "drafting-analyzing-business-content",
    "subtopic": "create-doc-from-prompt",
    "format": "single",
    "difficulty": "easy",
    "stem": "You use Microsoft 365 Copilot to create a document and need to start by describing what you require Copilot to write. What should you use?",
    "explanation": "You start by writing a prompt that describes what you want Copilot to create. A saved conversation, an existing document, or meeting notes aren't how you initiate a fresh creation.",
    "options": [
      {
        "key": "A",
        "text": "A saved conversation"
      },
      {
        "key": "B",
        "text": "A prompt"
      },
      {
        "key": "C",
        "text": "An existing document"
      },
      {
        "key": "D",
        "text": "Meeting notes"
      }
    ],
    "correct": [
      "B"
    ]
  },
  {
    "id": "PRM-101",
    "exam": "ab730",
    "domain": "managing-prompts-conversations",
    "subtopic": "effective-prompts",
    "format": "single",
    "difficulty": "medium",
    "stem": "You use Copilot to draft an announcement about a new hybrid work policy. It must be concise, aligned to company standards, and focused on what employees must do next. More than one prompt may work. Select the BEST answer.",
    "explanation": "The best prompt is specific about audience, key changes and required next steps, and asks for conciseness (D). 'Write an announcement…' (A) is vague, summarising the document (C) or writing background (B) misses the goal.",
    "options": [
      {
        "key": "A",
        "text": "Write an announcement about the new hybrid work policy."
      },
      {
        "key": "B",
        "text": "Write a detailed background on why the hybrid work policy was created."
      },
      {
        "key": "C",
        "text": "Summarize the hybrid work policy document."
      },
      {
        "key": "D",
        "text": "Create a concise announcement for employees that outlines the new hybrid work policy, key changes, and required next steps."
      }
    ],
    "correct": [
      "D"
    ]
  },
  {
    "id": "PRM-123",
    "exam": "ab730",
    "domain": "managing-prompts-conversations",
    "subtopic": "manage-conversations",
    "format": "single",
    "difficulty": "easy",
    "stem": "You want to change a conversation's title to something descriptive while keeping all of its history intact. What should you do?",
    "explanation": "Rename the chat from its conversation settings to change the title while keeping history intact. Deleting and restarting loses history; notebooks and scheduling don't rename.",
    "options": [
      {
        "key": "A",
        "text": "Delete the conversation and start over."
      },
      {
        "key": "B",
        "text": "Rename the chat from the conversation settings."
      },
      {
        "key": "C",
        "text": "Add the conversation to a notebook."
      },
      {
        "key": "D",
        "text": "Schedule the conversation."
      }
    ],
    "correct": [
      "B"
    ]
  },
  {
    "id": "GEN-130",
    "exam": "ab730",
    "domain": "generative-ai-fundamentals",
    "subtopic": "context-affects-responses",
    "format": "single",
    "difficulty": "medium",
    "stem": "You need to explain what most strongly shapes a Copilot response inside a given app. Which factor is it?",
    "explanation": "The app you're in and the content currently in focus most strongly shape a Copilot response. File counts, display language, or time of day don't drive the answer.",
    "options": [
      {
        "key": "A",
        "text": "The time of day the prompt is submitted."
      },
      {
        "key": "B",
        "text": "The number of files in the user's OneDrive."
      },
      {
        "key": "C",
        "text": "The app and the content currently in focus."
      },
      {
        "key": "D",
        "text": "The user's display language only."
      }
    ],
    "correct": [
      "C"
    ]
  },
  {
    "id": "PRM-140",
    "exam": "ab730",
    "domain": "managing-prompts-conversations",
    "subtopic": "effective-prompts",
    "format": "single",
    "difficulty": "medium",
    "stem": "You need a meeting-invite blurb. More than one prompt could work. Select the BEST answer.",
    "explanation": "The best prompt specifies length, the event details, the goal and a clear ask (D). The others are vague ('Tell me about meetings') or off-target.",
    "options": [
      {
        "key": "A",
        "text": "Tell me about meetings."
      },
      {
        "key": "B",
        "text": "Write something for a meeting invite."
      },
      {
        "key": "C",
        "text": "Explain why meetings are useful for teams in general."
      },
      {
        "key": "D",
        "text": "Write a two-sentence invite blurb for a 30-minute project kickoff on Tuesday at 10:00, stating the goal and asking attendees to come prepared with status updates."
      }
    ],
    "correct": [
      "D"
    ]
  },
  {
    "id": "PRM-145",
    "exam": "ab730",
    "domain": "managing-prompts-conversations",
    "subtopic": "agents-create-configure",
    "format": "single",
    "difficulty": "medium",
    "stem": "You want to give users a few example questions to try when they first open your agent, without changing how the agent behaves. Which setting should you use?",
    "explanation": "Suggested prompts give users example questions to try when they first open an agent, without changing its behaviour. Instructions, capabilities and knowledge sources change how the agent works.",
    "options": [
      {
        "key": "A",
        "text": "Instructions"
      },
      {
        "key": "B",
        "text": "Knowledge sources"
      },
      {
        "key": "C",
        "text": "Capabilities"
      },
      {
        "key": "D",
        "text": "Suggested prompts"
      }
    ],
    "correct": [
      "D"
    ]
  },
  {
    "id": "CNT-132",
    "exam": "ab730",
    "domain": "drafting-analyzing-business-content",
    "subtopic": "copilot-memory-instructions",
    "format": "scenario",
    "difficulty": "medium",
    "stem": "You previously told Copilot to remember that you prefer concise bullet-point answers, and now you want to review and remove that saved item. Which setting do you open?",
    "explanation": "Open Saved memories to review and remove an item you asked Copilot to remember. Custom instructions, chat history and personalization settings aren't where saved items are managed.",
    "options": [
      {
        "key": "A",
        "text": "Saved memories"
      },
      {
        "key": "B",
        "text": "Chat history"
      },
      {
        "key": "C",
        "text": "Enhanced personalization"
      },
      {
        "key": "D",
        "text": "Custom instructions"
      }
    ],
    "correct": [
      "A"
    ]
  },
  {
    "id": "GEN-112",
    "exam": "ab730",
    "domain": "generative-ai-fundamentals",
    "subtopic": "responsible-ai-risks",
    "format": "single",
    "difficulty": "medium",
    "stem": "Select the answer that correctly completes the sentence. To [Target_A] prompt injection attacks, agents must operate in trusted, isolated environments and apply validation checks before executing instructions.",
    "explanation": "Agents *mitigate* prompt-injection attacks by running in trusted, isolated environments and validating instructions before acting. The risk can't be fully eliminated, and you wouldn't ignore or increase it.",
    "options": [
      {
        "key": "A",
        "text": "mitigate"
      },
      {
        "key": "B",
        "text": "eliminate"
      },
      {
        "key": "C",
        "text": "increase"
      },
      {
        "key": "D",
        "text": "ignore"
      }
    ],
    "correct": [
      "A"
    ]
  },
  {
    "id": "GEN-103",
    "exam": "ab730",
    "domain": "generative-ai-fundamentals",
    "subtopic": "agent-builder-vs-studio",
    "format": "single",
    "difficulty": "medium",
    "stem": "Select the answer that correctly completes the sentence. The Agent Builder in Microsoft 365 Copilot is used to build [Target_A].",
    "explanation": "Agent Builder is used to build declarative agents configured with natural-language instructions or manual configuration — not custom code, workflow pipelines, or tenant-wide products.",
    "options": [
      {
        "key": "A",
        "text": "custom code deployments for external systems"
      },
      {
        "key": "B",
        "text": "automated multi-step workflow pipelines"
      },
      {
        "key": "C",
        "text": "declarative agents that use natural language instructions or manual configuration"
      },
      {
        "key": "D",
        "text": "role-based Copilot products for the whole tenant"
      }
    ],
    "correct": [
      "C"
    ]
  },
  {
    "id": "CNT-136",
    "exam": "ab730",
    "domain": "drafting-analyzing-business-content",
    "subtopic": "copilot-memory-instructions",
    "format": "yesno-series",
    "difficulty": "medium",
    "stem": "Scenario: A colleague describes Copilot memory and personalization. For each statement, answer Yes if it is accurate, or No if it is not.",
    "explanation": "Saved memories holds items you explicitly chose to save (Yes); user instructions stored in memory personalise responses over time (Yes); meeting transcripts are not stored inside Copilot memory (No).",
    "statements": [
      {
        "id": "1",
        "text": "Saved memories holds items you explicitly chose to save."
      },
      {
        "id": "2",
        "text": "User instructions stored in memory help personalize responses over time."
      },
      {
        "id": "3",
        "text": "Meeting transcripts are stored inside Copilot memory."
      }
    ],
    "answers": {
      "1": true,
      "2": true,
      "3": false
    }
  },
  {
    "id": "PRM-120",
    "exam": "ab730",
    "domain": "managing-prompts-conversations",
    "subtopic": "prompt-save-schedule-share",
    "format": "scenario",
    "difficulty": "medium",
    "stem": "You wrote a strong prompt and want a teammate to be able to reuse the exact same prompt. You do not need it to run automatically. What should you do?",
    "explanation": "Share the prompt so a teammate can reuse the exact prompt; scheduling would make it run automatically, which you don't need. Deleting/recreating or a personal notebook don't share it.",
    "options": [
      {
        "key": "A",
        "text": "Schedule the prompt."
      },
      {
        "key": "B",
        "text": "Share the prompt."
      },
      {
        "key": "C",
        "text": "Delete and recreate it for them."
      },
      {
        "key": "D",
        "text": "Add it to your personal notebook."
      }
    ],
    "correct": [
      "B"
    ]
  },
  {
    "id": "PRM-152",
    "exam": "ab730",
    "domain": "managing-prompts-conversations",
    "subtopic": "agents-create-configure",
    "format": "yesno-series",
    "difficulty": "medium",
    "stem": "Scenario: A teammate describes agent configuration. For each statement, answer Yes if it is accurate, or No if it is not.",
    "explanation": "Instructions can require a disclaimer at the end of every response (Yes); knowledge sources connect the agent to documents such as a SharePoint site (Yes); suggested prompts are example questions and don't control tone or behaviour (No).",
    "statements": [
      {
        "id": "1",
        "text": "Instructions can require a disclaimer at the end of every response."
      },
      {
        "id": "2",
        "text": "Knowledge sources connect the agent to documents such as a SharePoint site."
      },
      {
        "id": "3",
        "text": "Suggested prompts control the agent's tone and behavior."
      }
    ],
    "answers": {
      "1": true,
      "2": true,
      "3": false
    }
  },
  {
    "id": "CNT-130",
    "exam": "ab730",
    "domain": "drafting-analyzing-business-content",
    "subtopic": "move-insights-across-apps",
    "format": "single",
    "difficulty": "medium",
    "stem": "Select the answer that correctly completes the sentence. The advantage of using a Copilot Page as input when building a presentation is that it [Target_A].",
    "explanation": "A Copilot Page preserves the latest collaboratively edited content, so building a presentation from it avoids manual copying and keeps content current. It doesn't lock the page, convert everything to images, or require re-approval.",
    "options": [
      {
        "key": "A",
        "text": "permanently locks the Page from further edits"
      },
      {
        "key": "B",
        "text": "converts all content to images automatically"
      },
      {
        "key": "C",
        "text": "preserves the latest collaboratively edited content without manual copying"
      },
      {
        "key": "D",
        "text": "requires every teammate to re-approve the content"
      }
    ],
    "correct": [
      "C"
    ]
  },
  {
    "id": "PRM-141",
    "exam": "ab730",
    "domain": "managing-prompts-conversations",
    "subtopic": "agents-create-configure",
    "format": "single",
    "difficulty": "medium",
    "stem": "You are configuring an agent that should be able to produce images when users ask for them. Which setting enables this?",
    "explanation": "Capabilities (such as image generation) enable an agent to produce images. Instructions, knowledge sources and suggested prompts don't add generative capabilities.",
    "options": [
      {
        "key": "A",
        "text": "Instructions"
      },
      {
        "key": "B",
        "text": "Knowledge sources"
      },
      {
        "key": "C",
        "text": "Capabilities"
      },
      {
        "key": "D",
        "text": "Suggested prompts"
      }
    ],
    "correct": [
      "C"
    ]
  },
  {
    "id": "PRM-149",
    "exam": "ab730",
    "domain": "managing-prompts-conversations",
    "subtopic": "manage-conversations",
    "format": "multiple",
    "difficulty": "medium",
    "stem": "Select all that apply. Which actions are valid ways to manage Copilot conversations?",
    "explanation": "Valid conversation management: reopen a previous conversation (A), rename while keeping history (B), and add a conversation to a notebook (C). Deleting a conversation removes it from history, so (D) is false.",
    "options": [
      {
        "key": "A",
        "text": "Reopen a previous conversation from the chat history."
      },
      {
        "key": "B",
        "text": "Rename a conversation from its settings while keeping history."
      },
      {
        "key": "C",
        "text": "Add a conversation to a notebook to group it with related materials."
      },
      {
        "key": "D",
        "text": "Delete a conversation to keep it fully visible in the chat history."
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ]
  },
  {
    "id": "GEN-121",
    "exam": "ab730",
    "domain": "generative-ai-fundamentals",
    "subtopic": "agent-actions-api",
    "format": "scenario",
    "difficulty": "medium",
    "stem": "You are configuring an agent and need to control how structured information is displayed back to the user in a rich, interactive layout. Which capability addresses this?",
    "explanation": "Adaptive cards display structured information back to the user in a rich, interactive layout. API actions/connectors handle data and actions; knowledge sources provide grounding.",
    "options": [
      {
        "key": "A",
        "text": "Adaptive cards"
      },
      {
        "key": "B",
        "text": "A custom API action"
      },
      {
        "key": "C",
        "text": "A Copilot connector"
      },
      {
        "key": "D",
        "text": "Knowledge sources"
      }
    ],
    "correct": [
      "A"
    ]
  },
  {
    "id": "PRM-106",
    "exam": "ab730",
    "domain": "managing-prompts-conversations",
    "subtopic": "manage-conversations",
    "format": "single",
    "difficulty": "easy",
    "stem": "You delete a conversation from Microsoft 365 Copilot Chat. What occurs to the conversation?",
    "explanation": "Deleting a conversation removes it from the chat history — it's no longer visible. It isn't merely retained inactive, title-reset, or moved to a notebook.",
    "options": [
      {
        "key": "A",
        "text": "The conversation is no longer visible in the chat history."
      },
      {
        "key": "B",
        "text": "The conversation is retained in an inactive state."
      },
      {
        "key": "C",
        "text": "Only its title is reset."
      },
      {
        "key": "D",
        "text": "It is moved into a notebook."
      }
    ],
    "correct": [
      "A"
    ]
  },
  {
    "id": "PRM-146",
    "exam": "ab730",
    "domain": "managing-prompts-conversations",
    "subtopic": "agents-create-configure",
    "format": "scenario",
    "difficulty": "medium",
    "stem": "You want an agent's status updates to be consistent and concise. Which instruction is best written?",
    "explanation": "The best-written instruction is specific and bounded: 'Summarise the update in three labeled sections and keep it under 150 words.' Vague or unlimited instructions produce inconsistent updates.",
    "options": [
      {
        "key": "A",
        "text": "Be as thorough as possible with no limits."
      },
      {
        "key": "B",
        "text": "Write a professional update."
      },
      {
        "key": "C",
        "text": "Summarize the update in three labeled sections and keep it under 150 words."
      },
      {
        "key": "D",
        "text": "Explain everything about the project in full detail in one short line."
      }
    ],
    "correct": [
      "C"
    ]
  },
  {
    "id": "PRM-148",
    "exam": "ab730",
    "domain": "managing-prompts-conversations",
    "subtopic": "effective-prompts",
    "format": "multiple",
    "difficulty": "medium",
    "stem": "Select all that apply. Which elements would you include to make a prompt for a launch announcement clear and well-scoped?",
    "explanation": "A clear, well-scoped prompt includes the audience (A), the key changes to communicate (B), and a conciseness/length limit (C). Unrelated history (D) only broadens and weakens it.",
    "options": [
      {
        "key": "A",
        "text": "The audience for the announcement"
      },
      {
        "key": "B",
        "text": "The key changes that must be communicated"
      },
      {
        "key": "C",
        "text": "A request for conciseness or a length limit"
      },
      {
        "key": "D",
        "text": "Unrelated history that broadens the topic"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ]
  },
  {
    "id": "PRM-117",
    "exam": "ab730",
    "domain": "managing-prompts-conversations",
    "subtopic": "effective-prompts",
    "format": "single",
    "difficulty": "medium",
    "stem": "You are teaching colleagues to write effective Copilot prompts. Which set of elements best characterizes a well-formed prompt?",
    "explanation": "A well-formed prompt has a goal, context, expectations and a source. Formatting attributes (length/font/colour) or device details don't define prompt quality.",
    "options": [
      {
        "key": "A",
        "text": "Length, font, color, and tone"
      },
      {
        "key": "B",
        "text": "File size, owner, location, and version"
      },
      {
        "key": "C",
        "text": "Goal, context, expectations, and source"
      },
      {
        "key": "D",
        "text": "Audience age, device, browser, and time zone"
      }
    ],
    "correct": [
      "C"
    ]
  },
  {
    "id": "CNT-117",
    "exam": "ab730",
    "domain": "drafting-analyzing-business-content",
    "subtopic": "management-summary",
    "format": "single",
    "difficulty": "medium",
    "stem": "Senior leaders need a short, high-level overview of a long existing report so they can grasp the key points quickly. What should you ask Copilot to produce?",
    "explanation": "Ask Copilot for a management summary to give leaders a short, high-level overview. A translation, tone revision, or reformat doesn't condense the report.",
    "options": [
      {
        "key": "A",
        "text": "A translation of the report"
      },
      {
        "key": "B",
        "text": "A management summary of the report"
      },
      {
        "key": "C",
        "text": "A tone revision of the report"
      },
      {
        "key": "D",
        "text": "A reformatted version with new headings"
      }
    ],
    "correct": [
      "B"
    ]
  },
  {
    "id": "GEN-117",
    "exam": "ab730",
    "domain": "generative-ai-fundamentals",
    "subtopic": "chat-vs-agent",
    "format": "single",
    "difficulty": "medium",
    "stem": "Select the answer that correctly completes the sentence. Microsoft 365 Copilot grounds its responses in your organization's files, emails, meetings, and chats through [Target_A].",
    "explanation": "Microsoft 365 Copilot grounds responses in your organisation's files, emails, meetings and chats through Work IQ — the layer that understands your work data. Copilot connectors bring *external* data; Enterprise Data Protection and the Prompt Gallery aren't grounding mechanisms.",
    "options": [
      {
        "key": "A",
        "text": "Work IQ"
      },
      {
        "key": "B",
        "text": "Copilot connectors"
      },
      {
        "key": "C",
        "text": "Enterprise Data Protection"
      },
      {
        "key": "D",
        "text": "The Prompt Gallery"
      }
    ],
    "correct": [
      "A"
    ]
  },
  {
    "id": "PRM-125",
    "exam": "ab730",
    "domain": "managing-prompts-conversations",
    "subtopic": "agents-create-configure",
    "format": "multiple",
    "difficulty": "medium",
    "stem": "Select all that apply. Which outcomes can be controlled through an agent's Instructions setting?",
    "explanation": "An agent's Instructions control the tone it uses (A), required elements such as a disclaimer (B), and the structure/length of responses (D). Which external systems the agent can act in (C) is governed by actions/capabilities, not instructions.",
    "options": [
      {
        "key": "A",
        "text": "The tone the agent uses in responses"
      },
      {
        "key": "B",
        "text": "A required element, such as a disclaimer at the end of every response"
      },
      {
        "key": "C",
        "text": "Which external systems the agent can perform actions in"
      },
      {
        "key": "D",
        "text": "The structure and length of responses"
      }
    ],
    "correct": [
      "A",
      "B",
      "D"
    ]
  },
  {
    "id": "CNT-137",
    "exam": "ab730",
    "domain": "drafting-analyzing-business-content",
    "subtopic": "generate-from-existing-doc",
    "format": "multiple",
    "difficulty": "medium",
    "stem": "Select all that apply. Which tasks produce a NEW document or file rather than altering the original in place?",
    "explanation": "Creating a new document from an existing one (A), generating a separate management summary (B), and converting a Copilot Page into a PowerPoint (C) all produce new files. Improving tone in place (D) alters the original.",
    "options": [
      {
        "key": "A",
        "text": "Asking Copilot to create a new document by referencing an existing one"
      },
      {
        "key": "B",
        "text": "Generating a management summary as a separate overview"
      },
      {
        "key": "C",
        "text": "Converting a Copilot Page into a PowerPoint presentation"
      },
      {
        "key": "D",
        "text": "Improving the tone of the current document in place"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ]
  },
  {
    "id": "PRM-107",
    "exam": "ab730",
    "domain": "managing-prompts-conversations",
    "subtopic": "manage-conversations",
    "format": "single",
    "difficulty": "easy",
    "stem": "You use Copilot Chat throughout the week to draft emails and summarize documents and need to reopen a conversation from earlier in the week. Where can you access your previous conversations?",
    "explanation": "Reopen earlier conversations from the chat history. Settings, notebooks, or starting a new chat don't list your prior conversations.",
    "options": [
      {
        "key": "A",
        "text": "Copilot settings"
      },
      {
        "key": "B",
        "text": "The chat history"
      },
      {
        "key": "C",
        "text": "Copilot Notebooks"
      },
      {
        "key": "D",
        "text": "A new chat"
      }
    ],
    "correct": [
      "B"
    ]
  },
  {
    "id": "CNT-124",
    "exam": "ab730",
    "domain": "drafting-analyzing-business-content",
    "subtopic": "copilot-memory-instructions",
    "format": "single",
    "difficulty": "medium",
    "stem": "Select the answer that correctly completes the sentence. Copilot memory personalizes responses over time by storing [Target_A].",
    "explanation": "Copilot memory personalises responses by storing saved memories and user instructions — not your entire chat history, all transcripts, or sensitivity labels.",
    "options": [
      {
        "key": "A",
        "text": "your full chat history and every prompt you have ever sent"
      },
      {
        "key": "B",
        "text": "all of your meeting transcripts"
      },
      {
        "key": "C",
        "text": "the sensitivity labels applied to your files"
      },
      {
        "key": "D",
        "text": "saved memories and user instructions"
      }
    ],
    "correct": [
      "D"
    ]
  },
  {
    "id": "GEN-106",
    "exam": "ab730",
    "domain": "generative-ai-fundamentals",
    "subtopic": "agent-actions-api",
    "format": "scenario",
    "difficulty": "hard",
    "stem": "A company creates a Microsoft 365 Copilot agent that coaches on writing using SharePoint Online as a knowledge source and must interact with external business systems. You need to enable the agent to perform actions outside of Microsoft 365. Which capability should you add?",
    "explanation": "A custom API action lets the agent perform actions outside Microsoft 365 (for example, call an external system). A connector only brings data in; adaptive cards and image generation don't act externally.",
    "options": [
      {
        "key": "A",
        "text": "A Copilot connector"
      },
      {
        "key": "B",
        "text": "A custom API action"
      },
      {
        "key": "C",
        "text": "Image generation"
      },
      {
        "key": "D",
        "text": "An adaptive card"
      }
    ],
    "correct": [
      "B"
    ]
  },
  {
    "id": "PRM-151",
    "exam": "ab730",
    "domain": "managing-prompts-conversations",
    "subtopic": "prompt-gallery",
    "format": "multiple",
    "difficulty": "medium",
    "stem": "Select all that apply. Which statements correctly distinguish prompt and conversation features?",
    "explanation": "The Prompt Gallery offers curated, prebuilt prompts across Microsoft 365 apps (A); scheduling a prompt configures a recurring runtime (B); a notebook groups conversations and sources for grounded synthesis (C). Saving a prompt does not auto-share it org-wide (D).",
    "options": [
      {
        "key": "A",
        "text": "The Prompt Gallery offers curated, prebuilt prompts across Microsoft 365 apps."
      },
      {
        "key": "B",
        "text": "Scheduling a prompt configures a recurring runtime."
      },
      {
        "key": "C",
        "text": "A notebook groups conversations and sources for grounded synthesis."
      },
      {
        "key": "D",
        "text": "Saving a prompt automatically shares it with the whole organization."
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ]
  },
  {
    "id": "GEN-104",
    "exam": "ab730",
    "domain": "generative-ai-fundamentals",
    "subtopic": "chat-vs-agent",
    "format": "scenario",
    "difficulty": "medium",
    "stem": "A company uses Microsoft 365 Copilot so employees can quickly ask questions and receive one-time responses during daily work. The interactions do NOT need to follow predefined instructions, be reused, or use curated organizational knowledge. Which Copilot experience should you choose?",
    "explanation": "For quick, one-off answers with no need for reusable instructions or curated knowledge, choose the Microsoft 365 Copilot Chat experience — not a built or custom agent, nor a role-based experience.",
    "options": [
      {
        "key": "A",
        "text": "A custom Copilot Studio agent"
      },
      {
        "key": "B",
        "text": "A role-based Copilot experience"
      },
      {
        "key": "C",
        "text": "An agent built with Agent Builder"
      },
      {
        "key": "D",
        "text": "The Microsoft 365 Copilot Chat experience"
      }
    ],
    "correct": [
      "D"
    ]
  },
  {
    "id": "PRM-147",
    "exam": "ab730",
    "domain": "managing-prompts-conversations",
    "subtopic": "reference-resources",
    "format": "single",
    "difficulty": "medium",
    "stem": "You want Copilot to ground a summary on a specific past meeting. How do you reference that meeting in your prompt?",
    "explanation": "Use / to reference the specific past meeting so Copilot grounds the summary on it. Switching to Web, deleting chats, or the Prompt Gallery won't reference that meeting.",
    "options": [
      {
        "key": "A",
        "text": "Use / to reference the meeting."
      },
      {
        "key": "B",
        "text": "Add the meeting to the Prompt Gallery."
      },
      {
        "key": "C",
        "text": "Delete unrelated chats first."
      },
      {
        "key": "D",
        "text": "Switch grounding to Web."
      }
    ],
    "correct": [
      "A"
    ]
  },
  {
    "id": "CNT-101",
    "exam": "ab731",
    "domain": "drafting-analyzing-business-content",
    "subtopic": "responsible-ai-privacy-security",
    "format": "scenario",
    "difficulty": "medium",
    "stem": "A company processes customer support transcriptions and wants to align with responsible AI principles to reduce the risk of exposing personal data. What should the company do?",
    "explanation": "Aligning with responsible-AI privacy means data minimisation: limit how long personal data is stored and keep only what's necessary. Expanding the dataset increases exposure; transparency docs and restricting reports don't reduce the data-exposure risk itself.",
    "options": [
      {
        "key": "A",
        "text": "Expand the dataset to include more customer transcriptions."
      },
      {
        "key": "B",
        "text": "Limit how long personal data is stored and retain only necessary information."
      },
      {
        "key": "C",
        "text": "Publish documentation about the AI system to increase transparency."
      },
      {
        "key": "D",
        "text": "Restrict access to compliance reports to senior managers only."
      }
    ],
    "correct": [
      "B"
    ]
  },
  {
    "id": "CNT-104",
    "exam": "ab731",
    "domain": "drafting-analyzing-business-content",
    "subtopic": "governance-least-privilege",
    "format": "scenario",
    "difficulty": "medium",
    "stem": "A Microsoft 365 Copilot agent built in Copilot Studio reads HR data from SharePoint, but SharePoint permissions are broader than needed and the agent may surface data employees should not see. Current and future agents need this corrected. What should you do?",
    "explanation": "Fix the root cause by modifying SharePoint permissions to enforce least-privilege access, so current and future agents only surface what users should see. User toggles, content-filtering rules, or disabling connected experiences don't correct over-broad permissions.",
    "options": [
      {
        "key": "A",
        "text": "Allow users to individually enable or disable agents based on their preference."
      },
      {
        "key": "B",
        "text": "Disable connected experiences for all Microsoft 365 users."
      },
      {
        "key": "C",
        "text": "Modify the SharePoint permissions to enforce least-privilege access."
      },
      {
        "key": "D",
        "text": "Add content filtering rules to the Copilot Studio agent."
      }
    ],
    "correct": [
      "C"
    ]
  },
  {
    "id": "GEN-105",
    "exam": "ab731",
    "domain": "generative-ai-fundamentals",
    "subtopic": "gen-ai-business-value",
    "format": "single",
    "difficulty": "easy",
    "stem": "In which scenario can generative AI be employed to quickly create business value?",
    "explanation": "Generative AI delivers fast value for high-volume, repetitive communication that needs consistent drafts. High-judgement work — legal sign-off, executive negotiation, strategic partnerships — still needs humans.",
    "options": [
      {
        "key": "A",
        "text": "When conducting executive-level brand negotiations that require human judgment"
      },
      {
        "key": "B",
        "text": "When large volumes of repetitive communication require consistent draft responses"
      },
      {
        "key": "C",
        "text": "When finalizing legal contracts that require regulatory approval"
      },
      {
        "key": "D",
        "text": "When making strategic partnership decisions that involve senior leadership"
      }
    ],
    "correct": [
      "B"
    ]
  },
  {
    "id": "PRM-114",
    "exam": "ab731",
    "domain": "managing-prompts-conversations",
    "subtopic": "foundry-tools-model-catalog",
    "format": "scenario",
    "difficulty": "medium",
    "stem": "An AI team wants to compare models from several different providers before selecting one for a production deployment. Which Microsoft Foundry feature should they use?",
    "explanation": "The Foundry model catalog lets you browse and compare models from many providers before choosing one. Deployment, evaluation and prompt flow come later in the lifecycle.",
    "options": [
      {
        "key": "A",
        "text": "Model deployment"
      },
      {
        "key": "B",
        "text": "Model evaluation"
      },
      {
        "key": "C",
        "text": "Prompt flow"
      },
      {
        "key": "D",
        "text": "Model catalog"
      }
    ],
    "correct": [
      "D"
    ]
  },
  {
    "id": "CNT-102",
    "exam": "ab731",
    "domain": "drafting-analyzing-business-content",
    "subtopic": "responsible-ai-importance",
    "format": "multiple",
    "difficulty": "medium",
    "stem": "A retail company is deploying an AI system that generates personalized product recommendations based on customers' purchase history. Before deployment, the team wants to apply responsible AI principles. Select all that apply: which two explanations justify this approach?",
    "explanation": "Responsible AI here supports transparency in how customer data is used (A) and prevents biased recommendations that erode customer trust (D). It does not shift compliance to Microsoft (C) or remove the need for human oversight (B).",
    "options": [
      {
        "key": "A",
        "text": "It supports transparency in customer data usage."
      },
      {
        "key": "B",
        "text": "It removes the need for human oversight during deployment."
      },
      {
        "key": "C",
        "text": "It shifts compliance responsibility entirely to Microsoft."
      },
      {
        "key": "D",
        "text": "It prevents biased recommendations that can harm customer trust."
      }
    ],
    "correct": [
      "A",
      "D"
    ]
  },
  {
    "id": "GEN-116",
    "exam": "ab731",
    "domain": "generative-ai-fundamentals",
    "subtopic": "prompt-engineering-techniques",
    "format": "scenario",
    "difficulty": "medium",
    "stem": "Users report that Copilot occasionally generates fabricated content when summarizing policy documents. Which prompt engineering technique should you recommend to reduce this risk?",
    "explanation": "To curb fabrication (hallucination), instruct the model to base its response only on the provided source content — grounding. Requiring formality, more detail, or multiple variations doesn't reduce made-up facts.",
    "options": [
      {
        "key": "A",
        "text": "Ask the model to provide more detailed and comprehensive responses."
      },
      {
        "key": "B",
        "text": "Request multiple response variations and select the best one."
      },
      {
        "key": "C",
        "text": "Instruct the model to base its response only on the provided source content."
      },
      {
        "key": "D",
        "text": "Require the model to use formal language in all responses."
      }
    ],
    "correct": [
      "C"
    ]
  },
  {
    "id": "PRM-105",
    "exam": "ab731",
    "domain": "managing-prompts-conversations",
    "subtopic": "copilot-studio-capabilities",
    "format": "scenario",
    "difficulty": "medium",
    "stem": "A business team with non-technical users needs to build a low-code agent that accesses internal data, executes custom workflows, and integrates with an external ticketing system. What should you use?",
    "explanation": "Microsoft Copilot Studio is the low-code platform for non-technical users to build agents that access internal data, run custom workflows and integrate with external systems. The Graph API and Foundry are developer-centric; Microsoft 365 Copilot isn't an agent-builder.",
    "options": [
      {
        "key": "A",
        "text": "Microsoft 365 Copilot"
      },
      {
        "key": "B",
        "text": "Microsoft Graph API"
      },
      {
        "key": "C",
        "text": "Microsoft Copilot Studio"
      },
      {
        "key": "D",
        "text": "Microsoft Foundry"
      }
    ],
    "correct": [
      "C"
    ]
  },
  {
    "id": "PRM-111",
    "exam": "ab731",
    "domain": "managing-prompts-conversations",
    "subtopic": "custom-engine-agent",
    "format": "scenario",
    "difficulty": "hard",
    "stem": "A company wants to automate IT support by building an agent that processes incoming requests, applies custom priority rules, integrates with an external ticketing system, and can assign or escalate tickets autonomously. Which agent capability in Microsoft 365 Copilot supports this level of orchestration and integration?",
    "explanation": "The custom engine agent capability supports full orchestration — processing requests, applying custom priority rules, integrating external systems, and acting autonomously. A declarative agent, Copilot Chat, or an in-app feature can't orchestrate at that level.",
    "options": [
      {
        "key": "A",
        "text": "A declarative agent with instruction-based configuration"
      },
      {
        "key": "B",
        "text": "The custom engine agent capability"
      },
      {
        "key": "C",
        "text": "Microsoft 365 Copilot Chat"
      },
      {
        "key": "D",
        "text": "An in-app Copilot assistance feature"
      }
    ],
    "correct": [
      "B"
    ]
  },
  {
    "id": "CNT-103",
    "exam": "ab731",
    "domain": "drafting-analyzing-business-content",
    "subtopic": "responsible-ai-reliability-safety",
    "format": "scenario",
    "difficulty": "medium",
    "stem": "A company deploys an AI assistant that generates maintenance instructions for field technicians. Leadership is concerned about the risk of unsafe or incorrect instructions reaching workers. What should you prioritize?",
    "explanation": "Prioritise reliability and safety: validate outputs and add safeguards before unsafe instructions can reach technicians. Faster responses, limiting visibility, or expanding log access don't address the safety risk.",
    "options": [
      {
        "key": "A",
        "text": "Expand technician access to historical maintenance logs."
      },
      {
        "key": "B",
        "text": "Increase the speed of AI response generation to reduce downtime."
      },
      {
        "key": "C",
        "text": "Validating outputs and implementing safeguards before instructions reach technicians."
      },
      {
        "key": "D",
        "text": "Limit visibility of the AI assistant to management only."
      }
    ],
    "correct": [
      "C"
    ]
  },
  {
    "id": "GEN-106",
    "exam": "ab731",
    "domain": "generative-ai-fundamentals",
    "subtopic": "select-gen-ai-solution",
    "format": "scenario",
    "difficulty": "easy",
    "stem": "Leadership wants to pilot generative AI to improve employee productivity with minimal upfront development effort and low risk. The solution must scale quickly across the organization. Which solution should you recommend?",
    "explanation": "Microsoft 365 Copilot delivers productivity gains with minimal development effort and scales quickly across the organisation. Foundry, Copilot Studio and Azure OpenAI all require build effort.",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Foundry"
      },
      {
        "key": "B",
        "text": "Azure OpenAI Service"
      },
      {
        "key": "C",
        "text": "Microsoft 365 Copilot"
      },
      {
        "key": "D",
        "text": "Microsoft Copilot Studio"
      }
    ],
    "correct": [
      "C"
    ]
  },
  {
    "id": "CNT-108",
    "exam": "ab731",
    "domain": "drafting-analyzing-business-content",
    "subtopic": "responsible-ai-principles",
    "format": "scenario",
    "difficulty": "easy",
    "stem": "A company deploys an AI assistant that summarizes confidential legal documents within Microsoft 365. Which responsible AI principle should you prioritize?",
    "explanation": "For summarising confidential legal documents, prioritise Privacy and security. Fairness, transparency and inclusiveness matter generally, but the dominant risk here is protecting confidential data.",
    "options": [
      {
        "key": "A",
        "text": "Fairness"
      },
      {
        "key": "B",
        "text": "Inclusiveness"
      },
      {
        "key": "C",
        "text": "Transparency"
      },
      {
        "key": "D",
        "text": "Privacy and security"
      }
    ],
    "correct": [
      "D"
    ]
  },
  {
    "id": "CNT-106",
    "exam": "ab731",
    "domain": "drafting-analyzing-business-content",
    "subtopic": "governance-principles",
    "format": "single",
    "difficulty": "medium",
    "stem": "Select the answer that correctly completes the sentence. Effective AI governance requires clearly defined policies, oversight mechanisms, and [Target_A].",
    "explanation": "Effective AI governance needs cross-functional accountability across business, legal and technical stakeholders — not IT-only ownership, removing humans from decisions, or relying solely on the vendor's framework.",
    "options": [
      {
        "key": "A",
        "text": "eliminating human involvement from AI decision-making processes"
      },
      {
        "key": "B",
        "text": "assigning all governance responsibility exclusively to the IT department"
      },
      {
        "key": "C",
        "text": "cross-functional accountability across business, legal, and technical stakeholders"
      },
      {
        "key": "D",
        "text": "relying solely on the AI vendor's compliance framework"
      }
    ],
    "correct": [
      "C"
    ]
  },
  {
    "id": "PRM-108",
    "exam": "ab731",
    "domain": "managing-prompts-conversations",
    "subtopic": "microsoft-graph-capabilities",
    "format": "single",
    "difficulty": "medium",
    "stem": "Select the answer that correctly completes the sentence. [Target_A] provides contextual signals and permission-aware access to Microsoft 365 data used by Copilot for grounding.",
    "explanation": "Microsoft Graph provides contextual signals and permission-aware access to Microsoft 365 data used by Copilot for grounding. Copilot, Foundry and Copilot Studio don't provide that permission-trimmed grounding layer.",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Copilot"
      },
      {
        "key": "B",
        "text": "Microsoft Foundry"
      },
      {
        "key": "C",
        "text": "Microsoft Graph"
      },
      {
        "key": "D",
        "text": "Microsoft Copilot Studio"
      }
    ],
    "correct": [
      "C"
    ]
  },
  {
    "id": "GEN-103",
    "exam": "ab731",
    "domain": "generative-ai-fundamentals",
    "subtopic": "fine-tuned-vs-pretrained",
    "format": "single",
    "difficulty": "medium",
    "stem": "When is fine-tuning a pretrained large language model most appropriate?",
    "explanation": "Fine-tuning is most appropriate when consistent use of specialised domain terminology is required. For instant deployment, live document retrieval, or pure cost-minimisation, other approaches fit better.",
    "options": [
      {
        "key": "A",
        "text": "When you need immediate deployment without any training overhead"
      },
      {
        "key": "B",
        "text": "When you want to minimize costs by relying on publicly available information"
      },
      {
        "key": "C",
        "text": "When consistent use of specialized domain terminology is required"
      },
      {
        "key": "D",
        "text": "When the model needs to rely entirely on real-time retrieved documents"
      }
    ],
    "correct": [
      "C"
    ]
  },
  {
    "id": "GEN-117",
    "exam": "ab731",
    "domain": "generative-ai-fundamentals",
    "subtopic": "ml-lifecycle",
    "format": "scenario",
    "difficulty": "medium",
    "stem": "A machine learning model has been deployed to production. Users report that accuracy has degraded over time as real-world behavior has changed. What activity should you prioritize?",
    "explanation": "When a deployed model's accuracy degrades (model drift), continuously monitor performance and retrain as needed. Expanding access, blindly enlarging the dataset, or marketing don't address drift.",
    "options": [
      {
        "key": "A",
        "text": "Define updated marketing messaging for the AI product."
      },
      {
        "key": "B",
        "text": "Expand user access to gather more feedback."
      },
      {
        "key": "C",
        "text": "Increase the size of the original training dataset without evaluating model drift."
      },
      {
        "key": "D",
        "text": "Continuously monitor model performance and retrain the model as needed."
      }
    ],
    "correct": [
      "D"
    ]
  },
  {
    "id": "GEN-113",
    "exam": "ab731",
    "domain": "generative-ai-fundamentals",
    "subtopic": "security-authentication",
    "format": "multiple",
    "difficulty": "medium",
    "stem": "Your organization is piloting Microsoft 365 Copilot and needs to ensure sign-in is protected and all user activity is traceable for compliance. Select all that apply: which two security measures should you implement?",
    "explanation": "Protect sign-in and ensure traceability with multi-factor authentication for all users (D) and unified audit logging in Microsoft Purview (B). Changing update channels or licensing guest users doesn't meet the requirement.",
    "options": [
      {
        "key": "A",
        "text": "Assign Copilot licenses to guest users to broaden access"
      },
      {
        "key": "B",
        "text": "Turn on unified audit logging in Microsoft Purview"
      },
      {
        "key": "C",
        "text": "Switch all users to a different Microsoft 365 update channel"
      },
      {
        "key": "D",
        "text": "Enable multi-factor authentication (MFA) for all users"
      }
    ],
    "correct": [
      "B",
      "D"
    ]
  },
  {
    "id": "GEN-102",
    "exam": "ab731",
    "domain": "generative-ai-fundamentals",
    "subtopic": "select-gen-ai-solution",
    "format": "single",
    "difficulty": "medium",
    "stem": "Select the answer that correctly completes the sentence. To build a custom application that integrates large language models with control over model deployment and configuration, a company should use [Target_A].",
    "explanation": "Microsoft Foundry lets you build custom applications that integrate LLMs with control over model deployment and configuration. Copilot, Copilot Studio and Security Copilot don't give that low-level control.",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Copilot"
      },
      {
        "key": "B",
        "text": "Microsoft Foundry"
      },
      {
        "key": "C",
        "text": "Security Copilot"
      },
      {
        "key": "D",
        "text": "Microsoft Copilot Studio"
      }
    ],
    "correct": [
      "B"
    ]
  },
  {
    "id": "GEN-112",
    "exam": "ab731",
    "domain": "generative-ai-fundamentals",
    "subtopic": "grounding-permissions",
    "format": "scenario",
    "difficulty": "medium",
    "stem": "A company wants to summarize meetings, Teams conversations, and documents using AI, while respecting Entra ID permissions so users only see content they are authorized to access. Which solution should you recommend?",
    "explanation": "Microsoft 365 Copilot summarises meetings, Teams conversations and documents while respecting Entra ID permissions, so users see only content they're authorised to access. Copilot Chat (web-grounded), Studio, or Security Copilot don't fit.",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Copilot Chat"
      },
      {
        "key": "B",
        "text": "Microsoft Copilot Studio"
      },
      {
        "key": "C",
        "text": "Microsoft 365 Copilot"
      },
      {
        "key": "D",
        "text": "Security Copilot"
      }
    ],
    "correct": [
      "C"
    ]
  },
  {
    "id": "PRM-116",
    "exam": "ab731",
    "domain": "managing-prompts-conversations",
    "subtopic": "foundry-tools-content-understanding",
    "format": "scenario",
    "difficulty": "hard",
    "stem": "A company processes thousands of contracts per month and needs to automatically extract structured fields such as renewal dates, payment terms, and liability clauses, then store them for reporting. Which Microsoft Foundry capability should you recommend?",
    "explanation": "Azure Content Understanding in Foundry Tools extracts structured fields from large volumes of contracts for reporting. AI Search retrieves content, fine-tuning adapts a model, and prompt flow orchestrates.",
    "options": [
      {
        "key": "A",
        "text": "Azure AI Search in Foundry Tools"
      },
      {
        "key": "B",
        "text": "Model fine-tuning in Foundry"
      },
      {
        "key": "C",
        "text": "Azure Content Understanding in Foundry Tools"
      },
      {
        "key": "D",
        "text": "Prompt flow in Foundry Tools"
      }
    ],
    "correct": [
      "C"
    ]
  },
  {
    "id": "PRM-109",
    "exam": "ab731",
    "domain": "managing-prompts-conversations",
    "subtopic": "extensibility-framework",
    "format": "single",
    "difficulty": "medium",
    "stem": "Which statement accurately describes the Microsoft 365 Copilot extensibility framework?",
    "explanation": "The Microsoft 365 Copilot extensibility framework lets organisations surface external data and services into Copilot using connectors and plugins. It isn't for building custom models, OS-level integration, or UI theming.",
    "options": [
      {
        "key": "A",
        "text": "It enables companies to build fully custom AI models using Azure OpenAI Service."
      },
      {
        "key": "B",
        "text": "It provides operating system-level integrations for Copilot on Windows devices."
      },
      {
        "key": "C",
        "text": "It enables companies to surface external data and services into Copilot by using connectors and plugins."
      },
      {
        "key": "D",
        "text": "It controls the visual branding and theming of the Copilot user interface."
      }
    ],
    "correct": [
      "C"
    ]
  },
  {
    "id": "GEN-109",
    "exam": "ab731",
    "domain": "generative-ai-fundamentals",
    "subtopic": "fine-tuned-vs-pretrained",
    "format": "scenario",
    "difficulty": "medium",
    "stem": "A company wants documents to follow a specific format and tone without relying on long prompts each time. Which characteristic of a fine-tuned model best addresses this need?",
    "explanation": "A fine-tuned model adapts a pretrained model by training on a smaller, task-specific dataset and adjusting the weights — so it follows the desired format and tone without long prompts. It isn't real-time retrieval, tenant-only training, or live weight updates.",
    "options": [
      {
        "key": "A",
        "text": "A fine-tuned model was trained exclusively on the company's tenant data and never on public data."
      },
      {
        "key": "B",
        "text": "A fine-tuned model adapts a pretrained model to a specific task by training on a smaller task-specific dataset and adjusting the model weights."
      },
      {
        "key": "C",
        "text": "A fine-tuned model retrieves live enterprise data at query time to improve relevance."
      },
      {
        "key": "D",
        "text": "A fine-tuned model updates its weights in real time during each inference call."
      }
    ],
    "correct": [
      "B"
    ]
  },
  {
    "id": "GEN-108",
    "exam": "ab731",
    "domain": "generative-ai-fundamentals",
    "subtopic": "fine-tuned-vs-pretrained",
    "format": "scenario",
    "difficulty": "medium",
    "stem": "A legal team uses a pretrained LLM but notices it produces inconsistent terminology and formatting even when detailed prompts are provided. How does fine-tuning differ from using the pretrained model as-is?",
    "explanation": "Fine-tuning adjusts the model's weights by training it on a smaller, domain-specific dataset to improve targeted tasks — unlike editing prompts at inference, training a new model from scratch, or limiting to retrieved documents.",
    "options": [
      {
        "key": "A",
        "text": "Fine-tuning limits the model to only retrieved enterprise documents."
      },
      {
        "key": "B",
        "text": "Fine-tuning trains an entirely new model from scratch on legal data."
      },
      {
        "key": "C",
        "text": "Fine-tuning adjusts the model's weights by training it on a smaller, domain-specific dataset to improve performance for targeted tasks."
      },
      {
        "key": "D",
        "text": "Fine-tuning modifies the prompts sent to the model at inference time."
      }
    ],
    "correct": [
      "C"
    ]
  },
  {
    "id": "GEN-101",
    "exam": "ab731",
    "domain": "generative-ai-fundamentals",
    "subtopic": "cost-drivers-gen-ai",
    "format": "multiple",
    "difficulty": "medium",
    "stem": "Your organization is evaluating the operational costs of deploying a generative AI solution at scale. Select all that apply: which factors directly influence usage-based costs?",
    "explanation": "Usage-based costs are driven by the number of tokens processed in prompts and responses (A) and the selected model and its pricing tier (C). Tenant account counts or SharePoint storage don't drive usage billing.",
    "options": [
      {
        "key": "A",
        "text": "The number of tokens processed in prompts and responses"
      },
      {
        "key": "B",
        "text": "The number of users who have accounts in the tenant"
      },
      {
        "key": "C",
        "text": "The selected model and its pricing tier"
      },
      {
        "key": "D",
        "text": "The amount of data stored in SharePoint Online"
      }
    ],
    "correct": [
      "A",
      "C"
    ]
  },
  {
    "id": "PRM-112",
    "exam": "ab731",
    "domain": "managing-prompts-conversations",
    "subtopic": "foundry-benefits",
    "format": "multiple",
    "difficulty": "medium",
    "stem": "Your organization is evaluating Microsoft Foundry for enterprise generative AI. Select all that apply: which benefits should you highlight?",
    "explanation": "Foundry benefits include access to foundation models from multiple providers in a single environment (A) and the ability to scale deployments across regions and business units (C). It doesn't require a custom model per scenario (D) or replace business applications (B).",
    "options": [
      {
        "key": "A",
        "text": "Access to foundation models from multiple providers in a single environment"
      },
      {
        "key": "B",
        "text": "Automatic replacement of all legacy business applications"
      },
      {
        "key": "C",
        "text": "Ability to scale AI deployments across regions and business units"
      },
      {
        "key": "D",
        "text": "Requirement to train a custom model for every use scenario"
      }
    ],
    "correct": [
      "A",
      "C"
    ]
  },
  {
    "id": "PRM-102",
    "exam": "ab731",
    "domain": "managing-prompts-conversations",
    "subtopic": "copilot-dashboard-viva",
    "format": "scenario",
    "difficulty": "medium",
    "stem": "A manager wants to understand how widely Microsoft 365 Copilot is being adopted and what impact it is having on employee productivity. What should the manager use?",
    "explanation": "The Microsoft Copilot Dashboard in Viva Insights shows adoption breadth and productivity impact. Copilot Studio analytics, Copilot Chat, and the extensibility framework don't provide org-wide adoption insights.",
    "options": [
      {
        "key": "A",
        "text": "The Microsoft Copilot Dashboard in Viva Insights"
      },
      {
        "key": "B",
        "text": "Microsoft Copilot Chat"
      },
      {
        "key": "C",
        "text": "The Copilot extensibility framework"
      },
      {
        "key": "D",
        "text": "Microsoft Copilot Studio analytics"
      }
    ],
    "correct": [
      "A"
    ]
  },
  {
    "id": "CNT-105",
    "exam": "ab731",
    "domain": "drafting-analyzing-business-content",
    "subtopic": "responsible-ai-accountability-safety",
    "format": "scenario",
    "difficulty": "hard",
    "stem": "An AI agent built on Azure OpenAI updates a CRM system autonomously and has been acting outside its intended scope, making high-impact changes. The team needs identity-based access control, traceability, and a mechanism to intervene on high-impact actions. What should you implement?",
    "explanation": "For an autonomous agent making high-impact changes, implement role-based access control tied to organisational identity, plus controlled intervention on high-impact actions. Dashboards alone, built-in model safety alone, or more training data don't provide identity-based control and intervention.",
    "options": [
      {
        "key": "A",
        "text": "Centralized monitoring dashboards without changing access controls"
      },
      {
        "key": "B",
        "text": "Role-based access control (RBAC) integrated with organizational identity and controlled intervention for high-impact actions"
      },
      {
        "key": "C",
        "text": "Expanding the agent's training data to improve decision accuracy"
      },
      {
        "key": "D",
        "text": "Relying solely on Microsoft's built-in safety features for the model"
      }
    ],
    "correct": [
      "B"
    ]
  },
  {
    "id": "GEN-111",
    "exam": "ab731",
    "domain": "generative-ai-fundamentals",
    "subtopic": "rag-grounding",
    "format": "single",
    "difficulty": "medium",
    "stem": "Which step in the retrieval-augmented generation (RAG) process primarily reduces the risk of fabricated answers?",
    "explanation": "In retrieval-augmented generation, retrieving content from trusted knowledge sources most reduces fabricated answers by grounding generation in real data. Query rewriting, generation, and post-hoc governance help less with fabrication.",
    "options": [
      {
        "key": "A",
        "text": "Query rewriting to refine the user's original question"
      },
      {
        "key": "B",
        "text": "Content retrieval from trusted knowledge sources"
      },
      {
        "key": "C",
        "text": "Response generation by the language model"
      },
      {
        "key": "D",
        "text": "Safety and governance validation after generation"
      }
    ],
    "correct": [
      "B"
    ]
  },
  {
    "id": "CNT-114",
    "exam": "ab731",
    "domain": "drafting-analyzing-business-content",
    "subtopic": "azure-ai-subscription-models",
    "format": "scenario",
    "difficulty": "medium",
    "stem": "A company runs a stable, predictable Azure AI workload and the finance team requires consistent monthly spend without usage spikes. Which subscription model should you recommend?",
    "explanation": "For a stable, predictable workload that needs consistent monthly spend, choose a prepaid capacity commitment (reserved/provisioned capacity). Pay-as-you-go varies with usage, and per-unit or per-user licences don't fit.",
    "options": [
      {
        "key": "A",
        "text": "Pay-as-you-go billing based on actual consumption"
      },
      {
        "key": "B",
        "text": "Separate Azure subscriptions per business unit"
      },
      {
        "key": "C",
        "text": "A prepaid capacity commitment for the Azure AI service"
      },
      {
        "key": "D",
        "text": "Per-user Microsoft 365 Copilot licenses for all staff"
      }
    ],
    "correct": [
      "C"
    ]
  },
  {
    "id": "GEN-114",
    "exam": "ab731",
    "domain": "generative-ai-fundamentals",
    "subtopic": "data-quality-representativeness",
    "format": "scenario",
    "difficulty": "medium",
    "stem": "A model trained primarily on data from one region produces irrelevant results for users in other regions. What is the primary fix for this issue?",
    "explanation": "If a model underperforms for some regions, expand the training data to include representative data from all regions. Temperature, shorter responses, or prompt formatting don't fix unrepresentative training data.",
    "options": [
      {
        "key": "A",
        "text": "Increase the model's temperature setting to generate more varied responses."
      },
      {
        "key": "B",
        "text": "Expand the training data to include representative data from all regions."
      },
      {
        "key": "C",
        "text": "Adjust prompts to request region-specific formatting."
      },
      {
        "key": "D",
        "text": "Reduce the length of model responses."
      }
    ],
    "correct": [
      "B"
    ]
  },
  {
    "id": "GEN-104",
    "exam": "ab731",
    "domain": "generative-ai-fundamentals",
    "subtopic": "gen-ai-vs-rules-based",
    "format": "single",
    "difficulty": "easy",
    "stem": "Which characteristic distinguishes generative AI from a rules-based system?",
    "explanation": "Generative AI generates responses by learning patterns from large datasets rather than relying on predefined rules — unlike a rules-based system built on decision trees and explicit matches.",
    "options": [
      {
        "key": "A",
        "text": "Generative AI requires predefined decision trees for every possible outcome."
      },
      {
        "key": "B",
        "text": "Generative AI produces outputs only when explicit rules match the input."
      },
      {
        "key": "C",
        "text": "Generative AI generates responses by learning patterns from large datasets rather than relying on predefined rules."
      },
      {
        "key": "D",
        "text": "Generative AI is limited to structured data inputs such as tables and forms."
      }
    ],
    "correct": [
      "C"
    ]
  },
  {
    "id": "PRM-107",
    "exam": "ab731",
    "domain": "managing-prompts-conversations",
    "subtopic": "researcher-analyst-copilot",
    "format": "single",
    "difficulty": "medium",
    "stem": "Select the answer that correctly completes the sentence. To analyze structured data in a spreadsheet and identify trends out of the box in Microsoft 365 Copilot, you should use [Target_A].",
    "explanation": "Analyst in Microsoft 365 Copilot analyses structured spreadsheet data and identifies trends out of the box. Researcher synthesises across sources; Graph and Teams Copilot aren't the data-analysis agent.",
    "options": [
      {
        "key": "A",
        "text": "Researcher in Microsoft 365 Copilot"
      },
      {
        "key": "B",
        "text": "Analyst in Microsoft 365 Copilot"
      },
      {
        "key": "C",
        "text": "Copilot in Microsoft Teams"
      },
      {
        "key": "D",
        "text": "Microsoft Graph"
      }
    ],
    "correct": [
      "B"
    ]
  },
  {
    "id": "PRM-113",
    "exam": "ab731",
    "domain": "managing-prompts-conversations",
    "subtopic": "foundry-benefits",
    "format": "single",
    "difficulty": "medium",
    "stem": "Which statement accurately describes a key benefit of Microsoft Foundry?",
    "explanation": "A key Foundry benefit is the centralised management and governance of AI solutions across an organisation. It still uses AI models, supports more than open-source, and requires configuration.",
    "options": [
      {
        "key": "A",
        "text": "Foundry delivers AI capabilities directly inside Microsoft 365 apps without configuration."
      },
      {
        "key": "B",
        "text": "Foundry enables the centralized management and governance of AI solutions across an organization."
      },
      {
        "key": "C",
        "text": "Foundry automates business workflows without requiring any AI models."
      },
      {
        "key": "D",
        "text": "Foundry only supports open-source AI frameworks and models."
      }
    ],
    "correct": [
      "B"
    ]
  },
  {
    "id": "PRM-106",
    "exam": "ab731",
    "domain": "managing-prompts-conversations",
    "subtopic": "microsoft-graph-capabilities",
    "format": "single",
    "difficulty": "medium",
    "stem": "Which capability does Microsoft Graph provide to support Microsoft 365 Copilot?",
    "explanation": "Microsoft Graph aggregates organisational signals and relationships across Microsoft 365 services to support Copilot grounding. It doesn't generate LLM responses, build models, or replace storage.",
    "options": [
      {
        "key": "A",
        "text": "Build and deploy custom AI models for organizational use"
      },
      {
        "key": "B",
        "text": "Generate large language model responses for end users"
      },
      {
        "key": "C",
        "text": "Replace Microsoft 365 storage with an alternative data layer"
      },
      {
        "key": "D",
        "text": "Aggregate organizational signals and relationships across Microsoft 365 services"
      }
    ],
    "correct": [
      "D"
    ]
  },
  {
    "id": "PRM-104",
    "exam": "ab731",
    "domain": "managing-prompts-conversations",
    "subtopic": "copilot-studio-capabilities",
    "format": "scenario",
    "difficulty": "medium",
    "stem": "A company wants to build a conversational agent for external customers that operates across multiple channels, triggers APIs, and automates workflows through Power Automate. What solution should you recommend?",
    "explanation": "Microsoft Copilot Studio builds external-facing conversational agents that operate across channels, trigger APIs, and automate workflows via Power Automate. Copilot Chat, Teams Copilot, and Agent Builder don't cover multi-channel external bots with this automation.",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Copilot Chat"
      },
      {
        "key": "B",
        "text": "Microsoft Copilot Studio"
      },
      {
        "key": "C",
        "text": "Copilot in Microsoft Teams"
      },
      {
        "key": "D",
        "text": "Agent Builder in Microsoft 365 Copilot"
      }
    ],
    "correct": [
      "B"
    ]
  },
  {
    "id": "CNT-116",
    "exam": "ab731",
    "domain": "drafting-analyzing-business-content",
    "subtopic": "ai-champions-program",
    "format": "scenario",
    "difficulty": "medium",
    "stem": "Microsoft 365 Copilot has been rolled out to all employees, but usage is inconsistent across departments. The company wants to establish a network of internal advocates to drive broader and more effective adoption. What is the best approach?",
    "explanation": "Drive adoption by establishing defined expectations for advocates: peer enablement, feedback collection, and sharing practical use cases. Limiting to IT, purely voluntary roles, or constant rotation undermine the program.",
    "options": [
      {
        "key": "A",
        "text": "Allow participation to be entirely voluntary with no defined responsibilities."
      },
      {
        "key": "B",
        "text": "Limit communication about Copilot adoption to the IT department."
      },
      {
        "key": "C",
        "text": "Establish defined expectations including peer enablement, feedback collection, and sharing practical use cases."
      },
      {
        "key": "D",
        "text": "Rotate the advocate role frequently to maximize organizational coverage."
      }
    ],
    "correct": [
      "C"
    ]
  },
  {
    "id": "CNT-117",
    "exam": "ab731",
    "domain": "drafting-analyzing-business-content",
    "subtopic": "copilot-data-permissions",
    "format": "single",
    "difficulty": "medium",
    "stem": "Select the answer that correctly completes the sentence. To reduce security and privacy risks when adopting Microsoft 365 Copilot, your organization must ensure that [Target_A].",
    "explanation": "Reduce Copilot security and privacy risk by ensuring existing Microsoft Purview DLP and sensitivity-labelling policies are configured properly. Blanket firewall blocks, restricting all storage, or executive-only access aren't the right control.",
    "options": [
      {
        "key": "A",
        "text": "Copilot access is limited to senior executives and IT administrators"
      },
      {
        "key": "B",
        "text": "all external AI tools are blocked at the network firewall"
      },
      {
        "key": "C",
        "text": "existing Microsoft Purview data loss prevention (DLP) and sensitivity labeling policies are configured properly"
      },
      {
        "key": "D",
        "text": "all SharePoint and OneDrive access is restricted until Copilot is fully deployed"
      }
    ],
    "correct": [
      "C"
    ]
  },
  {
    "id": "PRM-110",
    "exam": "ab731",
    "domain": "managing-prompts-conversations",
    "subtopic": "extensibility-framework",
    "format": "scenario",
    "difficulty": "medium",
    "stem": "An organization wants an AI experience that is grounded in Microsoft 365 data, can be extended with external plugins and connectors, and operates within a unified extensibility framework. Which Copilot experience supports this model?",
    "explanation": "Microsoft 365 Copilot is grounded in Microsoft 365 data, extensible with external plugins and connectors, and operates within a unified extensibility framework. Single-app Copilots, Copilot in Windows, and Security Copilot don't match all three.",
    "options": [
      {
        "key": "A",
        "text": "Copilot in individual Microsoft 365 apps such as Excel or Teams"
      },
      {
        "key": "B",
        "text": "Microsoft 365 Copilot"
      },
      {
        "key": "C",
        "text": "Copilot in Windows"
      },
      {
        "key": "D",
        "text": "Security Copilot"
      }
    ],
    "correct": [
      "B"
    ]
  },
  {
    "id": "PRM-103",
    "exam": "ab731",
    "domain": "managing-prompts-conversations",
    "subtopic": "copilot-chat-web-mobile",
    "format": "single",
    "difficulty": "easy",
    "stem": "Select the answer that correctly completes the sentence. To provide employees with a conversational AI experience accessible via browser and mobile, grounded in web content, without requiring custom development or enterprise data configuration, a company should [Target_A].",
    "explanation": "Microsoft 365 Copilot Chat gives a browser and mobile conversational experience grounded in web content, with no custom development or enterprise-data configuration. Foundry-based or custom agents require build effort.",
    "options": [
      {
        "key": "A",
        "text": "build a custom copilot using Microsoft Foundry"
      },
      {
        "key": "B",
        "text": "adopt Microsoft 365 Copilot Chat"
      },
      {
        "key": "C",
        "text": "extend Microsoft 365 Copilot with custom agents"
      },
      {
        "key": "D",
        "text": "deploy a Foundry-based agent with custom configuration"
      }
    ],
    "correct": [
      "B"
    ]
  },
  {
    "id": "CNT-110",
    "exam": "ab731",
    "domain": "drafting-analyzing-business-content",
    "subtopic": "responsible-ai-principles",
    "format": "multiple",
    "difficulty": "medium",
    "stem": "A company deploys a customer-facing AI product recommendation system. The team wants to reduce bias in recommendations and ensure customers understand how AI is being used. Select all that apply: which two responsible AI principles should guide this work?",
    "explanation": "To reduce bias and help customers understand how AI is used, apply Fairness (A) and Transparency (C). Accountability and reliability/safety matter broadly but don't directly target bias and understanding.",
    "options": [
      {
        "key": "A",
        "text": "Fairness"
      },
      {
        "key": "B",
        "text": "Accountability"
      },
      {
        "key": "C",
        "text": "Transparency"
      },
      {
        "key": "D",
        "text": "Reliability and safety"
      }
    ],
    "correct": [
      "A",
      "C"
    ]
  },
  {
    "id": "GEN-107",
    "exam": "ab731",
    "domain": "generative-ai-fundamentals",
    "subtopic": "fine-tuned-vs-pretrained",
    "format": "scenario",
    "difficulty": "medium",
    "stem": "A team is using Microsoft 365 Copilot Tuning to reflect company-specific HR phrasing without requiring long prompts every time. How does a fine-tuned model differ from a pretrained model in this context?",
    "explanation": "A fine-tuned model adjusts the pretrained model's weights by training it on labeled, task-specific data — so it reflects company HR phrasing without long prompts. It isn't query-time retrieval, and pretrained models don't update weights per query.",
    "options": [
      {
        "key": "A",
        "text": "A fine-tuned model retrieves tenant documents at query time to adapt its responses."
      },
      {
        "key": "B",
        "text": "A pretrained model was trained exclusively on the organization's HR data."
      },
      {
        "key": "C",
        "text": "A pretrained model updates its weights each time an employee submits a query."
      },
      {
        "key": "D",
        "text": "A fine-tuned model adjusts the pretrained model's weights by training it on labeled, task-specific data to improve performance."
      }
    ],
    "correct": [
      "D"
    ]
  },
  {
    "id": "GEN-115",
    "exam": "ab731",
    "domain": "generative-ai-fundamentals",
    "subtopic": "rag-grounding",
    "format": "scenario",
    "difficulty": "medium",
    "stem": "A company wants to build an HR assistant in Microsoft Teams that uses SharePoint and third-party sources, surfaces only approved content with citations, and does not require moving data. What should you recommend?",
    "explanation": "Use retrieval-augmented generation (RAG) to ground the HR assistant in approved SharePoint and third-party sources, with citations and no data movement. Fine-tuning, web grounding, or a classification model don't meet 'approved sources + citations, no data move.'",
    "options": [
      {
        "key": "A",
        "text": "Fine-tune a pretrained model on HR policy documents."
      },
      {
        "key": "B",
        "text": "Use retrieval-augmented generation (RAG) to ground responses in approved sources."
      },
      {
        "key": "C",
        "text": "Enable web grounding so the assistant can search publicly available HR information."
      },
      {
        "key": "D",
        "text": "Build a predictive classification model to categorize HR queries."
      }
    ],
    "correct": [
      "B"
    ]
  },
  {
    "id": "CNT-112",
    "exam": "ab731",
    "domain": "drafting-analyzing-business-content",
    "subtopic": "copilot-licensing",
    "format": "single",
    "difficulty": "medium",
    "stem": "Select the answer that correctly completes the sentence. Microsoft 365 Copilot licensing options include [Target_A].",
    "explanation": "Microsoft 365 Copilot licensing includes per-user monthly subscription add-on licenses and pay-as-you-go usage billing (for example, for agents). Perpetual, per-device, or server licensing options don't apply.",
    "options": [
      {
        "key": "A",
        "text": "per-device perpetual licenses and on-premises server licenses"
      },
      {
        "key": "B",
        "text": "per-user monthly subscription add-on licenses and pay-as-you-go usage billing"
      },
      {
        "key": "C",
        "text": "automatic inclusion in all Microsoft 365 business plans at no extra cost"
      },
      {
        "key": "D",
        "text": "prepaid server capacity licenses billed annually per rack unit"
      }
    ],
    "correct": [
      "B"
    ]
  },
  {
    "id": "GEN-110",
    "exam": "ab731",
    "domain": "generative-ai-fundamentals",
    "subtopic": "prompt-engineering-techniques",
    "format": "scenario",
    "difficulty": "medium",
    "stem": "Employees using Microsoft 365 Copilot notice that responses vary significantly in tone and format across different users. Which prompt technique would most improve consistency?",
    "explanation": "Include examples of the desired tone and format in the prompt (few-shot prompting) to improve consistency across users. Token limits, 'adjusting weights', or limiting who can access Copilot don't standardise outputs.",
    "options": [
      {
        "key": "A",
        "text": "Adjust the model weights to lock the response style."
      },
      {
        "key": "B",
        "text": "Increase the token limit to allow longer responses."
      },
      {
        "key": "C",
        "text": "Limit the number of users who can access Copilot."
      },
      {
        "key": "D",
        "text": "Include examples of the desired tone and format in the prompt."
      }
    ],
    "correct": [
      "D"
    ]
  },
  {
    "id": "PRM-115",
    "exam": "ab731",
    "domain": "managing-prompts-conversations",
    "subtopic": "foundry-tools-document-intelligence",
    "format": "single",
    "difficulty": "medium",
    "stem": "Select the answer that correctly completes the sentence. A company needs to extract structured data such as invoice amounts, vendor names, and payment due dates from scanned PDF forms. It should use [Target_A].",
    "explanation": "Azure Document Intelligence in Foundry Tools extracts structured data — amounts, vendor names, due dates — from scanned PDF forms. AI Search retrieves, AI Vision is general-purpose vision, and prompt flow orchestrates.",
    "options": [
      {
        "key": "A",
        "text": "Azure AI Search in Foundry Tools"
      },
      {
        "key": "B",
        "text": "Azure AI Vision in Foundry Tools"
      },
      {
        "key": "C",
        "text": "Azure Document Intelligence in Foundry Tools"
      },
      {
        "key": "D",
        "text": "Prompt flow in Foundry Tools"
      }
    ],
    "correct": [
      "C"
    ]
  },
  {
    "id": "CNT-109",
    "exam": "ab731",
    "domain": "drafting-analyzing-business-content",
    "subtopic": "responsible-ai-principles",
    "format": "multiple",
    "difficulty": "medium",
    "stem": "An organization is implementing an AI system that autonomously produces high-impact operational recommendations. System failures could directly harm individuals, and the organization requires human oversight of critical outputs. Select all that apply: which two responsible AI principles are most critical to apply?",
    "explanation": "For autonomous, high-impact systems requiring human oversight, the most critical principles are Reliability and safety (A) and Accountability (D). Scalability and accessibility aren't the core risk controls here.",
    "options": [
      {
        "key": "A",
        "text": "Reliability and safety"
      },
      {
        "key": "B",
        "text": "Accessibility"
      },
      {
        "key": "C",
        "text": "Scalability"
      },
      {
        "key": "D",
        "text": "Accountability"
      }
    ],
    "correct": [
      "A",
      "D"
    ]
  },
  {
    "id": "PRM-101",
    "exam": "ab731",
    "domain": "managing-prompts-conversations",
    "subtopic": "researcher-analyst-copilot",
    "format": "scenario",
    "difficulty": "medium",
    "stem": "A strategy team needs to produce a briefing that synthesizes information from internal documents, SharePoint, and web sources, with a clear summary and citations. Which Microsoft 365 Copilot capability should you use?",
    "explanation": "Researcher in Microsoft 365 Copilot synthesises internal documents, SharePoint and web sources into a briefing with a summary and citations. Analyst handles structured data; Graph and Studio aren't the synthesis agent.",
    "options": [
      {
        "key": "A",
        "text": "Analyst in Microsoft 365 Copilot"
      },
      {
        "key": "B",
        "text": "Microsoft Graph"
      },
      {
        "key": "C",
        "text": "Researcher in Microsoft 365 Copilot"
      },
      {
        "key": "D",
        "text": "Microsoft Copilot Studio"
      }
    ],
    "correct": [
      "C"
    ]
  },
  {
    "id": "CNT-113",
    "exam": "ab731",
    "domain": "drafting-analyzing-business-content",
    "subtopic": "ai-champions-program",
    "format": "single",
    "difficulty": "easy",
    "stem": "Select the answer that correctly completes the sentence. An AI champions program is primarily designed to [Target_A].",
    "explanation": "An AI champions program is primarily designed to create peer advocates who encourage responsible and effective AI use across teams — not to centralise purchasing, restrict usage, or replace governance.",
    "options": [
      {
        "key": "A",
        "text": "centralize all AI purchase decisions within the IT department"
      },
      {
        "key": "B",
        "text": "limit AI tool usage to technically trained staff only"
      },
      {
        "key": "C",
        "text": "replace formal AI governance processes with peer-led adoption"
      },
      {
        "key": "D",
        "text": "create peer advocates who encourage responsible and effective AI use across teams"
      }
    ],
    "correct": [
      "D"
    ]
  },
  {
    "id": "CNT-118",
    "exam": "ab731",
    "domain": "drafting-analyzing-business-content",
    "subtopic": "responsible-ai-principles",
    "format": "scenario",
    "difficulty": "medium",
    "stem": "An organization is deploying an AI hiring assistant that screens candidate resumes. Leaders want to ensure the system does not disadvantage applicants based on gender or ethnicity. Which responsible AI principle should most directly guide the design?",
    "options": [
      {
        "key": "A",
        "text": "Fairness"
      },
      {
        "key": "B",
        "text": "Reliability and safety"
      },
      {
        "key": "C",
        "text": "Privacy and security"
      },
      {
        "key": "D",
        "text": "Transparency"
      }
    ],
    "correct": [
      "A"
    ],
    "explanation": "Fairness is the principle that directly addresses avoiding bias and ensuring the system treats applicants equitably across groups such as gender and ethnicity. Reliability/safety, privacy, and transparency are important but don't target equitable treatment of candidates."
  },
  {
    "id": "GEN-118",
    "exam": "ab731",
    "domain": "generative-ai-fundamentals",
    "subtopic": "rag-grounding",
    "format": "scenario",
    "difficulty": "medium",
    "stem": "A company wants its AI assistant to always answer using the latest internal policies, which change weekly, and to cite the source document. Which approach best meets this need?",
    "options": [
      {
        "key": "A",
        "text": "Fine-tune a model each month on the policy documents"
      },
      {
        "key": "B",
        "text": "Use retrieval-augmented generation (RAG) over the policy repository"
      },
      {
        "key": "C",
        "text": "Increase the model's temperature to produce more varied answers"
      },
      {
        "key": "D",
        "text": "Paste all policies permanently into the system prompt"
      }
    ],
    "correct": [
      "B"
    ],
    "explanation": "RAG retrieves the current policy documents at query time and grounds the answer with citations, so weekly changes are reflected immediately. Fine-tuning is slow to update and doesn't cite sources, temperature affects variability rather than accuracy, and stuffing every policy into the prompt doesn't stay current or scale."
  },
  {
    "id": "PRM-117",
    "exam": "ab731",
    "domain": "managing-prompts-conversations",
    "subtopic": "foundry-tools-model-evaluation",
    "format": "scenario",
    "difficulty": "medium",
    "stem": "Before promoting a generative AI solution to production, an AI team must compare candidate models on accuracy, groundedness, and safety using consistent metrics. Which Microsoft Foundry capability should they use?",
    "options": [
      {
        "key": "A",
        "text": "Model catalog"
      },
      {
        "key": "B",
        "text": "Model evaluation"
      },
      {
        "key": "C",
        "text": "Azure Content Understanding"
      },
      {
        "key": "D",
        "text": "Prompt flow deployment"
      }
    ],
    "correct": [
      "B"
    ],
    "explanation": "Model evaluation in Foundry scores and compares models on metrics such as accuracy, groundedness and safety to inform a production decision. The model catalog only lists models to choose from, Content Understanding extracts data, and prompt flow orchestrates rather than evaluates."
  }
];
