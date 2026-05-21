import React, { useState, useEffect } from 'react';
import './Chatbot.css';
import {
    FaMicrophone, FaPlus, FaPaperPlane, FaCheck,
    FaTimes, FaRedo, FaBars, FaSun, FaMoon, FaTrash, FaRobot, FaThumbsUp, FaThumbsDown, FaVolumeUp
} from 'react-icons/fa';
import { IoAddCircle } from 'react-icons/io5';
const Chatbot = ({ onUpdateForm }) => {
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'What is your member ID?' },
    ]);
    const [input, setInput] = useState('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const [chatSessions, setChatSessions] = useState(() => {
        // Load chat sessions from localStorage on initial render
        const savedSessions = localStorage.getItem('chatSessions');
        return savedSessions ? JSON.parse(savedSessions) : [
            { id: 1, messages: [{ sender: 'bot', text: 'Hello! How can I assist you today?' }] },
        ];
    });
    const [currentSessionId, setCurrentSessionId] = useState(() => {
        // Load current session ID from localStorage on initial render
        const savedSessionId = localStorage.getItem('currentSessionId');
        return savedSessionId ? JSON.parse(savedSessionId) : 1;
    });
    const [isRecording, setIsRecording] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu
    const [theme, setTheme] = useState(() => {
        // Load theme from localStorage on initial render
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme : 'light'; // Default to 'light' if no theme is saved
    });
    const currentSession = chatSessions.find((session) => session.id === currentSessionId) || { messages: [] };
    // Save chat sessions and current session ID to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('chatSessions', JSON.stringify(chatSessions));
    }, [chatSessions]);

    useEffect(() => {
        localStorage.setItem('currentSessionId', JSON.stringify(currentSessionId));
    }, [currentSessionId]);

    useEffect(() => {
        // Save the theme to localStorage whenever it changes
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handlePlayAudio = (text) => {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    };

    const handleReaction = (index, reaction) => {
        const updatedMessages = [...messages];
        updatedMessages[index].reaction = reaction; // Add reaction to the message
        setMessages(updatedMessages);
    };
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    let recognition;
    // List of questions and their corresponding form fields
    const questions = [
        { field: 'memberId', question: 'What is your member ID?' },
        { field: 'groupNumber', question: 'What is your Group Number?' },
        { field: 'name', question: 'What is your name?' },
        { field: 'dob', question: 'What is your date of birth?' },
        { field: 'address', question: 'What is your address?' },
        { field: 'city', question: 'What is your city?' },
        { field: 'state', question: 'What is your state?' },
        { field: 'zip', question: 'What is your ZIP code?' },
        { field: 'phone', question: 'What is your phone number?' },
        { field: 'gender', question: 'What is your gender?' },
        { field: 'newAddress', question: 'Do you have a new address?' },
        { field: 'relation', question: 'What is your relation to the policyholder?' },
        { field: 'provider', question: 'Who is your provider?' },
        { field: 'providerTaxId', question: 'What is your provider tax identification number?' },
        { field: 'facilityName', question: 'What is your group/facility name?' },
        { field: 'npiNumber', question: 'What is your NPI number?' },
        { field: 'providerAddress', question: 'What is your provider address?' },
        { field: 'providerCity', question: 'What is your provider city?' },
        { field: 'providerState', question: 'What is your provider state?' },
        { field: 'providerZip', question: 'What is your provider ZIP code?' },
        { field: 'serviceAddress', question: 'What is the address where services were rendered?' },
        { field: 'servicePhone', question: 'What is the phone number for services rendered?' },
    ];

    const handleSend = () => {
        if (input.trim() === '') return;

        const userMessage = { sender: 'user', text: input };
        const updatedMessages = [...messages, userMessage];

        // Get the current question and field
        const currentQuestion = questions[currentQuestionIndex];
        const { field, question } = currentQuestion;

        // Extract the relevant part of the user's response
        let extractedValue = input.trim();

        // Define keywords for each field to extract relevant data
        const fieldKeywords = {
            memberId: ['my member id is', 'member id is'],
            groupNumber: ['my group number is', 'group number is'],
            name: ['my name is', 'name is'],
            dob: ['my date of birth is', 'date of birth is', 'dob is'],
            address: ['my address is', 'address is'],
            city: ['my city is', 'city is'],
            state: ['my state is', 'state is'],
            zip: ['my zip is', 'zip is', 'zipcode is'],
            phone: ['my phone number is', 'phone number is'],
            gender: ['my gender is', 'gender is'],
            newAddress: ['my new address is', 'new address is'],
            relation: ['my relation is', 'relation is'],
            provider: ['my provider is', 'provider is'],
            providerTaxId: ['my provider tax id is', 'provider tax id is'],
            facilityName: ['my facility name is', 'facility name is'],
            npiNumber: ['my npi number is', 'npi number is'],
            providerAddress: ['my provider address is', 'provider address is'],
            providerCity: ['my provider city is', 'provider city is'],
            providerState: ['my provider state is', 'provider state is'],
            providerZip: ['my provider zip is', 'provider zip is'],
            serviceAddress: ['my service address is', 'service address is'],
            servicePhone: ['my service phone is', 'service phone is'],
        };

        // Extract relevant data based on the field
        const keywords = fieldKeywords[field] || [];
        const regex = new RegExp(`(?:${keywords.join('|')})\\s*(.+)`, 'i');
        const match = extractedValue.match(regex);
        if (match) {
            extractedValue = match[1].trim(); // Extract the relevant part
        }

        // Update the form data with the extracted value
        onUpdateForm({ [field]: extractedValue });

        // Add a "thinking" indicator
        updatedMessages.push({ sender: 'bot', text: '...', isThinking: true });
        setMessages(updatedMessages);
        // Update the current session in chatSessions
        const updatedChatSessions = chatSessions.map((session) =>
            session.id === currentSessionId
                ? { ...session, messages: updatedMessages }
                : session
        );
        setChatSessions(updatedChatSessions);
        setInput('');

        // Simulate a delay before the bot responds
        setTimeout(() => {
            const nextQuestionIndex = currentQuestionIndex + 1;
            if (nextQuestionIndex < questions.length) {
                const nextQuestion = questions[nextQuestionIndex].question;
                const botMessages = [...updatedMessages];
                botMessages.pop(); // Remove the "thinking" indicator
                botMessages.push({ sender: 'bot', text: nextQuestion });
                // Update messages and chatSessions
                setMessages(botMessages);
                const updatedChatSessions = chatSessions.map((session) =>
                    session.id === currentSessionId
                        ? { ...session, messages: botMessages }
                        : session
                );
                setChatSessions(updatedChatSessions);
                setCurrentQuestionIndex(nextQuestionIndex);
            } else {
                // Update messages and chatSessions
                setMessages(botMessages);
                const updatedChatSessions = chatSessions.map((session) =>
                    session.id === currentSessionId
                        ? { ...session, messages: botMessages }
                        : session
                );
                setChatSessions(updatedChatSessions);
            }
        }, 1500); // 1.5-second delay for realism
    };
    const handleStartNewChat = () => {
        const newSessionId = Date.now(); // Use timestamp as a unique ID
        const firstMessage = messages[0]?.text || questions[0]?.question || 'Hello! How can I assist you today?';
    
        setChatSessions([
            ...chatSessions,
            { id: newSessionId, messages: [{ sender: 'bot', text: firstMessage }] },
        ]);
        setCurrentSessionId(newSessionId);
    };
    const handleSwitchChat = (sessionId) => {
        setCurrentSessionId(sessionId);
        setIsMenuOpen(false); // Close the menu after switching
    };
    const truncateText = (text, maxLength = 20) => {
        return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
    };
    const handleDeleteChat = (sessionId) => {
        const updatedSessions = chatSessions.filter((session) => session.id !== sessionId);

        // If the deleted session is the current session, switch to the first available session
        if (sessionId === currentSessionId && updatedSessions.length > 0) {
            setCurrentSessionId(updatedSessions[0].id);
        } else if (updatedSessions.length === 0) {
            // If no sessions are left, create a new default session
            setCurrentSessionId(1);
            updatedSessions.push({
                id: 1,
                messages: [{ sender: 'bot', text: 'Hello! How can I assist you today?' }],
            });
        }

        setChatSessions(updatedSessions);
    };
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const userMessage = { sender: 'user', text: `Uploaded file: ${file.name}` };
            const updatedSessions = chatSessions.map((session) =>
                session.id === currentSessionId
                    ? { ...session, messages: [...session.messages, userMessage] }
                    : session
            );

            setChatSessions(updatedSessions);

            setTimeout(() => {
                const botMessage = { sender: 'bot', text: 'File received. Thank you!' };
                setChatSessions((prevSessions) =>
                    prevSessions.map((session) =>
                        session.id === currentSessionId
                            ? { ...session, messages: [...session.messages, botMessage] }
                            : session
                    )
                );
            }, 1000);
        }
    };

    const startVoiceRecording = () => {
        if (!('webkitSpeechRecognition' in window)) {
            //alert('Voice recognition is not supported in this browser.');
            return;
        }

        recognition = new window.webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.continuous = false;

        recognition.onstart = () => {
            setIsRecording(true);
            setIsListening(true); // Show zig-zag animation
        };

        recognition.onend = () => {
            setIsListening(false); // Hide zig-zag animation
        };

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setInput(transcript); // Fill the input box with the transcribed text
        };

        recognition.start();
    };

    const stopVoiceRecording = () => {
        if (recognition) {
            recognition.stop();
        }
        setIsRecording(false);
        setIsListening(false);
    };

    const finalizeVoiceRecording = () => {
        if (recognition) {
            recognition.onend = null; // Prevent `onend` from being called again
            recognition.stop(); // Stop the recognition session
        }
        setIsRecording(false);
        setIsListening(false);
    };

    // const handleVoiceMessage = () => {
    //     if (!('webkitSpeechRecognition' in window)) {
    //         alert('Voice recognition is not supported in this browser.');
    //         return;
    //     }

    //     const recognition = new window.webkitSpeechRecognition();
    //     recognition.lang = 'en-US';
    //     recognition.continuous = false;

    //     recognition.onstart = () => {
    //         setIsRecording(true);
    //     };

    //     recognition.onend = () => {
    //         setIsRecording(false);
    //     };

    //     recognition.onresult = (event) => {
    //         const transcript = event.results[0][0].transcript;
    //         setInput(transcript); // Fill the input box with the transcribed text
    //     };

    //     recognition.start();
    // };

    return (
        <div className={`chatbot-container ${theme}`}>
            <div className="chatbot-header">
                <div className="chatbot-header-left">
                    <FaBars className="chatbot-menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)} />
                    <h3>Claimease Pro</h3>
                </div>
                <div className="chatbot-header-right">
                    {theme === 'light' ? (
                        <FaMoon className="chatbot-theme-icon" onClick={toggleTheme} title='Change theme' />
                    ) : (
                        <FaSun className="chatbot-theme-icon" onClick={toggleTheme} title='Change theme' />
                    )}
                    <IoAddCircle className="chatbot-add-chat-icon" onClick={handleStartNewChat} title="Start a new chat" />
                </div>
            </div>
            {isMenuOpen && (
                <div className="chatbot-menu">
                    <h4>Previous Chats</h4>
                    <ul>
                        {chatSessions.map((session) => {
                            const firstMessage = session.messages[0]?.text || 'New Chat';
                            return (
                                <li
                                    key={session.id}
                                    className={session.id === currentSessionId ? 'active' : ''}
                                    onClick={() => handleSwitchChat(session.id)}
                                >
                                    {truncateText(firstMessage)}
                                    <FaTrash
                                        className="chatbot-delete-icon"
                                        onClick={() => handleDeleteChat(session.id)} />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
            {/* {isMenuOpen && (
                <div className="chatbot-menu">
                    <h4>Previous Chats</h4>
                    <ul>
                        {chatSessions.map((session) => (
                            <li key={session.id} className={session.id === currentSessionId ? 'active' : ''}>
                                <span onClick={() => handleSwitchChat(session.id)}>Chat {session.id}</span>
                                <FaTrash
                                    className="chatbot-delete-icon"
                                    onClick={() => handleDeleteChat(session.id)}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            )} */}
            <div className="chatbot-messages">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`chatbot-message ${msg.sender} ${msg.isThinking ? 'thinking-animation' : ''}`}
                    >
                        {msg.sender === 'bot' && (
                            <div className="bot-message-container">
                                <div className="bot-profile-pic">
                                    <FaRobot />
                                </div>
                                <div className="message-text">{msg.text}</div>
                            </div>
                        )}
                        {msg.sender === 'user' && (
                            <div className="message-text">{msg.text}</div>
                        )}
                        {msg.sender === 'bot' && !msg.isThinking && (
                            <div className="message-actions">
                                {/* <FaThumbsUp
                        className={`reaction-icon ${msg.reaction === 'thumbs-up' ? 'active' : ''}`}
                        onClick={() => handleReaction(index, 'thumbs-up')}
                        title="Thumbs up"
                    />
                    <FaThumbsDown
                        className={`reaction-icon ${msg.reaction === 'thumbs-down' ? 'active' : ''}`}
                        onClick={() => handleReaction(index, 'thumbs-down')}
                        title="Thumbs down"
                    />
                    <FaVolumeUp
                        className="reaction-icon"
                        onClick={() => handlePlayAudio(msg.text)}
                        title="Play response"
                    /> */}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="chatbot-input-container">
                <div className={`chatbot-input-wrapper ${isListening ? 'listening' : ''}`}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        className="chatbot-input"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSend(); // Trigger send on Enter key press
                            }
                        }}
                    />
                </div>
                <div className="chatbot-icons">
                    <label htmlFor="file-upload">
                        <FaPlus className="chatbot-icon" title="Add contents" />
                    </label>
                    <input
                        type="file"
                        id="file-upload"
                        style={{ display: 'none' }}
                        onChange={handleFileUpload}
                    />
                    {!isRecording && (
                        <FaMicrophone
                            className="chatbot-icon"
                            onClick={startVoiceRecording}
                            title="Start dictation"
                        />
                    )}
                    {isRecording && (
                        <>
                            <FaCheck
                                className="chatbot-icon"
                                onClick={finalizeVoiceRecording}
                            />
                            <FaTimes
                                className="chatbot-icon"
                                onClick={stopVoiceRecording}
                            />
                        </>
                    )}
                </div>
                <button onClick={handleSend} className="chatbot-send-button">
                    <FaPaperPlane className="chatbot-send-icon" title="Send" />
                </button>
            </div>
        </div>
    );
};

export default Chatbot;