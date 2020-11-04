import React, {
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from 'react';

import { Container } from './styles';

export interface ModalHandles {
  openModal: () => void;
}

const Modal: React.RefForwardingComponent<ModalHandles> = (props, ref) => {
  const [visible, setVisible] = useState(true);

  const openModal = useCallback(() => {
    setVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setVisible(false);
  }, []);

  useImperativeHandle(ref, () => {
    return { openModal };
  });

  useEffect(() => {
    closeModal();
  }, [closeModal]);

  if (!visible) {
    return null;
  }

  return (
    <Container>
      <div>
        <header>
          <div id="logo" />
          <button onClick={closeModal}>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
            </svg>
          </button>
        </header>
        <iframe
          title="Cotação Agilus"
          src="http://servagilus.dyndns.org:40001/agiluscrmweb/#/formcotacao?chave=4cedba9a-839b-44da-bd00-58afb94a170c&amp;numeroWhatsApp=5511947355581&amp;textoWhatspApp=teste"
        />
      </div>
    </Container>
  );
};

export default forwardRef(Modal);
