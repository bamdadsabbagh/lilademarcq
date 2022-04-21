import React, {ReactElement, useCallback} from 'react';
import {useAtom} from 'jotai';
import styled from 'styled-components';
import Image from 'next/image';
import {modalAtom, setModalAtom} from '../../atoms/modal.atom';

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.8);

  overflow: hidden;

  z-index: 1000;

  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 95%;
  height: 95%;
`;

export function ModalComponent(): ReactElement {
  const [{isOpen, src}] = useAtom(modalAtom);
  const [, setModal] = useAtom(setModalAtom);

  const handleClick = useCallback(() => {
    setModal({isOpen: false, src: null});
  }, [setModal]);

  return (
    <>
      {isOpen && src && (
        <Modal onClick={handleClick}>
          <Container>
            <Image
              src={src}
              placeholder="blur"
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
