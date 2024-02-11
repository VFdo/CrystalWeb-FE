import React, {useState} from 'react';
import { useCallback } from 'react';
import Talk from 'talkjs';
import { Session, Chatbox } from '@talkjs/react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ChatComponent = ({ open, handleClose }) => {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  
  const syncUser = useCallback(
    () =>
      new Talk.User({
        id: '0000',
        name: 'Vidu',
        email: 'vidufernando98@gmail.com',
        photoUrl: 'https://unsplash.com/photos/starry-night-sky-over-the-starry-night-lLFZhRYGgI4',
        welcomeMessage: 'Hellooo :)',
        role: 'admin',
      }),
    []
  );

  const syncConversation = useCallback((session) => {
    // JavaScript SDK code here
    const conversation = session.getOrCreateConversation('welcome');

    const other = new Talk.User({
      id: 'frank',
      name: 'Frank',
      email: 'frank@example.com',
      photoUrl: 'https://talkjs.com/new-web/avatar-8.jpg',
      welcomeMessage: 'Hey, how can I help?',
      role: 'default',
    });
    conversation.setParticipant(session.me);
    conversation.setParticipant(other);

    return conversation;
  }, []);

  return (
    
    <Session appId="t19q4LjZ" syncUser={syncUser}>
      <Modal
        open={open} onClose={handleClose}
        closeOnClickBackdrop={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box >
        <Chatbox
        syncConversation={syncConversation}
        style={{ width: '100%', height: '500px' }}
      ></Chatbox>
      {/* <Button onClick={handleClose}>Close</Button> */}
        </Box>
      </Modal>
    </Session>
  );
}

export default ChatComponent;