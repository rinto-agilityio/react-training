import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

// components
import PrimaryModal from './PrimaryModal';

const StorybookModal = () => {
  const [openModal, toggleModal] = useState(false);

  return (
    <>
      <PrimaryModal
        show={openModal}
        onClose={() => toggleModal(false)}
        title='This is Title the modal'
      >
        <p>This is body the modal</p>
      </PrimaryModal>

      <button onClick={() => toggleModal(true)}>Open Modal</button>
    </>
  );
};

storiesOf('Modal', module)
  .addDecorator(story => <div style={{ marginTop: '30px' }}>{story()}</div>)
  .add('Modal', () => (
    <div>
      <StorybookModal />
    </div>
  ));

