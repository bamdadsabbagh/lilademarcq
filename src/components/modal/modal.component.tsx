import React, {ReactElement} from 'react';
import Image from 'next/image';
import {Container, Modal} from './modal.styles';
import {useModalComponent} from './hooks/use-modal-component';

export function ModalComponent(): ReactElement {
  const {isOpen, src, handleClick} = useModalComponent();

  return (
    <>
      {isOpen && src && (
        <Modal onClick={handleClick}>
          <Container>
            <Image
              src={src}
              // placeholder="blur"
              layout="intrinsic"
              objectFit="contain"
              width={1280}
              height={720}
              quality={95}
            />
          </Container>
        </Modal>
      )}
    </>
  );
}
