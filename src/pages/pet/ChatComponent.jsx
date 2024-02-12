import React, {useState} from 'react';
import { useCallback } from 'react';
import Talk from 'talkjs';
import { Session, Chatbox } from '@talkjs/react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const ChatComponent = ({ open, handleClose, petId, petName }) => {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const id = petId.toString();
  const name = petName.toString();
  
  const syncUser = useCallback(
    () =>
      new Talk.User({
        id: id, 
        name: name + ' \'s ownwer',
        email: 'vidufernando98@gmail.com',
        photoUrl: 'https://source.unsplash.com/random?pets',
        welcomeMessage: name + ' says hi!',
        role: 'user',
      }),
    []
  );

  const syncConversation = useCallback((session) => {
    // JavaScript SDK code here
    const conversation = session.getOrCreateConversation('welcome' + id);

    const other = new Talk.User({
      id: 'frank',
      name: 'Vet',
      email: 'frank@example.com',
      photoUrl: 'https://talkjs.com/new-web/avatar-10.jpg',
      welcomeMessage: 'Hey, how can I help?',
      role: 'admin',
    });
    conversation.setParticipant(session.me);
    conversation.setParticipant(other);

    return conversation;
  }, []);

  return (
    
    <Session appId="t19q4LjZ" syncUser={syncUser}>
      <Modal
        open={open} 
        onClose={handleClose}
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